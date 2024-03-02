"use client";

import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { toast } from "@/components/ui/use-toast";
import { GlobalContext } from "@/context";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

export default function UpdatePassword() {
  const [oldPassword, setOldPssword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);

  const { id } = useParams();

  function isValid() {
    return newPassword === "" ? false : true;
  }

  const updaetePassord = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch(
      `http://localhost:4000/api/auth/update-password/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      }
    );
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
    <div className=" border-[1px] w-[800px] mb-5 p-8 ">
      <h3 className=" mb-5 text-xl font-bold ml-44">Update Password</h3>
      <div className=" flex flex-col items-center w-full">
        <form onSubmit={updaetePassord}>
          <div className="w-full">
            <label htmlFor="">Current Password</label>
            <input
              type="password"
              className=" bg-slate-200/50 block w-[380px] outline-none border-[1px] rounded-md h-9 px-3"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPssword(e.target.value)}
            />
          </div>
          <div className=" mt-4 w-full">
            <label htmlFor="">New Password</label>
            <div className=" flex items-center ">
              <input
                type="password"
                className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={!isValid()}
            type="submit"
            className=" disabled:bg-sky-600/50 disabled:pointer-events-none disabled:hover:shadow-none w-full bg-sky-600 text-white mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            {pageLevelLoader ? (
              <ComponentLevelLoader
                text={"Adding password"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "update password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
