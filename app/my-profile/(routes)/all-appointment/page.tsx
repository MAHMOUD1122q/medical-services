"use client";

import { PencilIcon, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

import _ from "lodash";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AllAppointment() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [allData, setallData] = useState({} as any);

  useEffect(() => {
    fetch(
      `http://localhost:4000/api/appointment/all-appointment?page=${page}&limit=6`,
      {}
    ).then((response) => {
      response.json().then((data) => {
        setUsers(data.data);
        setallData(data);
        setPageCount(data.pageCount);
      });
    });
  }, [page]);
  const deleteBlog = async (id: any) => {
    const data = await fetch(
      `http://localhost:4000/api/appointment/delete-appointment/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const finalData = await data.json();
    if (finalData.success) {
      toast({
        variant: "success",
        title: finalData.message,
      });
      setTimeout(() => {
        history.go(0);
      }, 2000);
    }
  };
  const count = allData?.AppointmentCount;

  return (
    <div className=" border-[1px] w-[800px] mb-5 p-6">
      <div className="border-r border-b border-l shadow-md p-5">
        <h2 className=" text-3xl font-bold mb-8"> {count} Appointments </h2>
        <div className=" flex items-center justify-between">
          <div className=" ">
            <h3 className=" mb-5"> name</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-8">{e.name}</p>
              </>
            ))}
          </div>
          <div className="">
            <h3 className=" mb-5"> mobile</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-8">{e.mobile}</p>
              </>
            ))}
          </div>
          <div className="">
            <h3 className=" mb-5"> doctor name</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-8">{e.doctorName}</p>
              </>
            ))}
          </div>
          <div className="">
            <h3 className=" mb-5"> the time</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-8">{e.appointmentTime}</p>
              </>
            ))}
          </div>
          <div className="">
            <h3 className=" mb-5"> the day</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-8">{e.appointmentDay}</p>
              </>
            ))}
          </div>
          <div className="">
            <p className=" mb-5"> Action</p>
            {users.map((e: any) => (
              <>
                <div className=" flex  mb-8" key={e._id}>
                  {/* <PencilIcon
                    fill="#854d0e"
                    fillOpacity="0.3"
                    className=" text-yellow-800 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                    onClick={() =>
                      router.push(`/my-profile/update-blog/${e._id}`)
                    }
                  /> */}
                  <Trash
                    fill="#b91c1c"
                    fillOpacity="0.3"
                    className=" text-red-700 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                    onClick={() => deleteBlog(e._id)}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            {page === 1 ? (
              <PaginationItem className=" cursor-not-allowed text-gray-600 hover:bg-white pointer-events-none">
                <PaginationPrevious onClick={() => setPage(page - 1)} />
              </PaginationItem>
            ) : (
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(page - 1)} />
              </PaginationItem>
            )}
            {pageCount < 1 ? (
              <PaginationItem>
                <>
                  <PaginationLink
                    className={`${page === 1 ? "bg-gray-100" : ""}`}
                  >
                    1
                  </PaginationLink>
                </>
              </PaginationItem>
            ) : (
              _.times(pageCount, (i: any) => (
                <PaginationItem key={i}>
                  <>
                    <PaginationLink
                      className={`${
                        page === i + 1 ? "bg-gray-100" : ""
                      } cursor-pointer`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </>
                </PaginationItem>
              ))
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage(page + 1)}
                className={` cursor-pointer ${
                  pageCount === page
                    ? "pointer-events-none  cursor-not-allowed text-gray-600"
                    : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
