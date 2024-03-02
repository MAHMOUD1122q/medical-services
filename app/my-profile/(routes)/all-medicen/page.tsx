"use client";

import { PencilIcon, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

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

export default function AllMedicen() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [allData, setallData] = useState({} as any);

  useEffect(() => {
    fetch(
      `http://localhost:4000/api/medicen/all-medicen?page=${page}&limit=6`,
      {}
    ).then((response) => {
      response.json().then((data) => {
        setUsers(data.data);
        setallData(data);
        setPageCount(data.pageCount);
      });
    });
  }, [page]);

  const deleteMedicen = async (id: any) => {
    const data = await fetch(
      `http://localhost:4000/api/medicen/delete-medicen/${id}`,
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
  const count = allData?.medicenCount;
  return (
    <div className=" border-[1px] w-[800px] mb-5 p-6">
      <div className="border-r border-b border-l shadow-md p-5">
        <h2 className=" text-3xl font-bold mb-8"> {count} Medicen </h2>
        <div className=" flex items-center justify-between">
          <div className="">
            <h3 className=" mb-5"> Title</h3>
            {users.map((e: any) => (
              <>
                <p className=" mb-6">{e.title}</p>
              </>
            ))}
          </div>
          <div className="">
            <h3 className=" mb-5">Price</h3>
            {users.map((e: any) => (
              <>
                <p className="mb-6">{e.price}</p>
              </>
            ))}
          </div>
          <div className="">
            <p className=" mb-5"> Action</p>
            {users.map((e: any) => (
              <>
                <div className=" flex  mb-6" key={e._id}>
                  <PencilIcon
                    fill="#854d0e"
                    fillOpacity="0.3"
                    className=" text-yellow-800 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                    onClick={() =>
                      router.push(`/my-profile/update-medicen/${e._id}`)
                    }
                  />
                  <Trash
                    fill="#b91c1c"
                    fillOpacity="0.3"
                    className=" text-red-700 h-7 w-7 bg-white border-[1px] p-[5px] mr-2 cursor-pointer"
                    onClick={() => deleteMedicen(e._id)}
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
