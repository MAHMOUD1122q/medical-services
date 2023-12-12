"use client"
import { GlobalContext } from "@/context";
import { Locate, PencilIcon, PlusIcon, Trash } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { format } from 'date-fns'

export default function MyProfile(){
    const {setIsAuthUser,isAuthUser} = useContext(GlobalContext)

    useEffect(() => {
      fetch("http://localhost:4000/api/auth/profile",{
        credentials:"include",
      }).then((response) => {
        response.json().then((data) => {
          setIsAuthUser(data)
        })
      })
    },[]);

    const image = isAuthUser?.image;
    const email = isAuthUser?.email;
    const createAt = isAuthUser?.createdAt;
    const username = isAuthUser?.username;  
 return (
    <>
    <title>my-profile</title>
    <div className=" border-[1px] w-[800px] mb-5 p-8">
      <div className=" flex items-center ">
        <div className=" mr-5">
            <Image
              src={image}
              alt="image"
              width={64}
              height={64}
              className=" rounded-[50%] w-16 h-16"
            />
        </div>
        <div>
          <p className="">{username}</p>
          <div className=" flex">
            <p>
              Email: {email} <span> | </span>{" "}
              {/* <span>Joined on: {format(new Date(createAt),'MMM d,yyyy HH:mm')}</span>{" "} */}
              <span>Joined on: {createAt}</span>
            </p>
          </div>
        </div>
      </div>
      <hr className=" w-[725px] ml-[5px] mt-5" />
      <div className=" border-b-[1px] mt-4">
      <form action="">
          <div className="">
            <label htmlFor="">Change Your Username</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="">Change Your Avatar</label>
            <div className=" flex items-center ">
              <Image src="/default.png" alt="avatar" width={50} height={50} />
              <input
                type="file"
                className="  block outline-none border-[1px] w-full ml-3 py-2 rounded-md px-3"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
    </>
  );
}