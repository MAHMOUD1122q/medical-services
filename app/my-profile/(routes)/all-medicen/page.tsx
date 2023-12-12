"use client"

import { PencilIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function AllMedicen() {
    const active = true;
    const [users, setUsers] = useState([])
    const [allData, setallData] = useState({})

//     useEffect(() => {
//       fetch("http://localhost:4000/api/auth/all-users",{
//     }).then((response) => {
//       response.json().then((data) => {
//         setUsers(data.data)
//         setallData(data)
//       })
//     })
//   },[]);

    const deleteUser = () => {
      fetch("http://localhost:4000/api/auth/delete-user",{
      
    })
    }
    const count = allData?.userCount
    return (
        <div className=" border-[1px] w-[800px] mb-5 p-6">
        <div className="border-r border-b border-l shadow-md p-5">
          <h2 className=" text-3xl font-bold mb-8"> {count} Medicen </h2>
          <div className=" flex items-center justify-between">
            <div className="">
              <h3 className=" mb-5"> Title</h3>
              {/* {
                users.map((e:any) => (
                  <>
                  <p className=" mb-6">{e.username}</p>
                  </>
                ))
              } */}
            </div>
            <div className="">
              <h3 className=" mb-5">Price</h3>
              {/* {
                users.map((e:any) => (
                  <>
                    <p className="mb-6">{e.email}</p>
                  </>
                ))
              } */}
            </div>
            <div className="">
              <p className=" mb-5"> Action</p>
              {/* {
                users.map((e:any) => (
                  <>
                <div className=" flex  mb-6" key={e._id}>
                <PencilIcon
                  fill="#854d0e"
                  fillOpacity="0.3"
                  className=" text-yellow-800 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                />
                <Trash
                  fill="#b91c1c"
                  fillOpacity="0.3"
                  className=" text-red-700 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                />
              </div>
                  </>
                ))
              } */}
            </div>
          </div>
          <div className=" flex justify-center items-center mt-4">
            <span className=" border-[1px] py-2 px-4 ">First</span>
            <span className=" border-[1px] py-2 px-4">Prev</span>
            <ul className=" flex">
              <li
                className={cn(
                  " border-[1px] py-2 px-4 ",
                  active && " bg-sky-100/50 border-sky-700 "
                )}
              >
                1
              </li>
            </ul>
            <span className=" border-[1px] py-2 px-4 ">Next</span>
            <span className=" border-[1px] py-2 px-4">Last</span>
          </div>
        </div>
      </div>
    )
}