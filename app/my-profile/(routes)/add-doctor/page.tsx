import Image from "next/image";

export default function AddDoctors() {
  return (
    <div className=" border-[1px] w-[800px] mb-5 p-8">
      <h3 className=" mb-8 text-2xl font-bold ">Add Doctors</h3>
      <div className=" border-b-[1px] mt-4">
        <form action="">
          <div className=" mb-6">
            <label htmlFor="">Add image</label>
            <div className=" flex items-center ">
              <input
                type="file"
                className="  block outline-none border-[1px] w-full  py-2 rounded-md px-3"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="">Add Username</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}
