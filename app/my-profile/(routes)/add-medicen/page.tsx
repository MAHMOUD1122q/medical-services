"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/firebase/index";
import Image from "next/image";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
export default function AddMedicen() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState(0);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({} as any);
  const [imagesPreview, setImagesPreview] = useState("");
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    img && uploadFile(img, "img");
  }, [img]);
  const uploadFile = (file: any, fileType: any) => {
    const storage = getStorage(app);
    const folder = fileType === "img" ? "medicen/" : "all/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "img" ? setImgPerc(Math.round(progress)) : null;
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);
          setInputs((prev:any) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  };
  const imgPreview = (e: any) => {
    setImagesPreview(img);
  };

  const createNewmedicen = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch("http://localhost:4000/api/medicen/add-medicen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        link,
        img: inputs.img,
      }),
    });
    const finalData = await data.json();
    if (finalData.success) {
      toast({
        variant: "success",
        title: finalData.message,
      });
      setPageLevelLoader(false);
    } else {
      setPageLevelLoader(false);
      toast({
        variant: "destructive",
        title: finalData.message,
      });
    }
  };

  return (
    <div className=" border-[1px] w-[800px] mb-5 p-8">
      <h3 className=" mb-8 text-2xl font-bold ">Add Medicen</h3>
      <div className=" border-b-[1px] mt-4">
        <form action="" onSubmit={createNewmedicen}>
          <h3> Add image</h3>
          <div className="flex items-center justify-center w-full mb-5 mt-3">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                accept="image/*"
                id="dropzone-file"
                type="file"
                className=" hidden"
                name="img"
                onChange={(e:any) => setImg((prev: any) => e.target.files[0])}
              />
            </label>
          </div>
          <div className="grid grid-cols-6 gap-2 my-5">
            {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
            <Image
              src={imagesPreview}
              alt="Preview"
              className={`col-span-1 object-contain shadow rounded border-2 border-gray p-2 h-full w-full ${
                imagesPreview === "" ? "hidden" : null
              }`}
              width={50}
              height={50}
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add title</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add link</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add Price</label>
            <input
              type="Number"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="price"
              onChange={(e:any) => setPrice((prev: any) => e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white px-[250px] mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            {pageLevelLoader ? (
              <ComponentLevelLoader
                text={"Adding Medicen"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "Add Medicen"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
