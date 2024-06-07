"use client";

import CommenSection from "@/components/commenSection";
import { useEffect, useState } from "react";
import _ from "lodash";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Doctors() {
  const router = useRouter();
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    fetch(
      `http://localhost:4000/api/doctor/all-doctors?page=${page}&limit=12`,
      {}
    ).then((response) => {
      response.json().then((data) => {
        setDoctors(data.data);
        setPageCount(data.pageCount);
      });
    });
  }, [page]);
  return (
    <>
      <title> Doctors </title>
      <CommenSection title=" Well Experienced" sub=" Doctors" subtitle="" />
      <div className="py-16">
        <div className=" text-center w-full">
          <h3 className=" text-4xl font-semibold mb-4">
            Well Experienced Doctors
          </h3>
          <p className=" w-full md:w-[430px]  mx-auto text-[#666666] mb-20">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className="flex mx-0 md:mx-20 flex-wrap">
          {doctors.length === 0 ? (
            <p className=" text-2xl font-bold text-center w-full mb-5">
              No Doctors
            </p>
          ) : (
            doctors.map((doc: any) => (
              <>
                <div className=" text-center border-2 shadow-lg mx-4 rounded overflow-hidden mb-8">
                  <img
                    src={doc.img}
                    alt="img"
                    className=" w-64 h-[270px]"
                    draggable="false"
                  />
                  <span className="text-[#666666] text-sm mt-5 block">
                    {doc.specialization}
                  </span>
                  <h3 className=" text-xl mb-5">Dr. {doc.name}</h3>
                  <Dialog>
                    <DialogTrigger className=" py-2 px-3 bg-sky-600 text-white mb-3 rounded-xl ">
                      make appointment
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          choase time available to appointment with dr.{" "}
                          {doc.name}
                        </DialogTitle>
                        <DialogDescription>
                          <p className=" text-lg">saturday</p>
                          <div className="flex mt-2">
                            {doc.schedule.saturday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                {" "}
                                day off{" "}
                              </p>
                            ) : (
                              doc.schedule.saturday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=saturday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">sunday</p>
                          <div className="flex">
                            {doc.schedule.sunday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                {" "}
                                day off{" "}
                              </p>
                            ) : (
                              doc.schedule.sunday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=sunday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">monday</p>
                          <div className="flex">
                            {doc.schedule.monday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                day off
                              </p>
                            ) : (
                              doc.schedule.monday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=monday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">tuesday</p>
                          <div className="flex">
                            {doc.schedule.tuesday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                day off
                              </p>
                            ) : (
                              doc.schedule.tuesday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=tuesday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">wednesday</p>
                          <div className="flex">
                            {doc.schedule.wednesday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                day off
                              </p>
                            ) : (
                              doc.schedule.wednesday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=wednesday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">thursday</p>
                          <div className="flex ">
                            {doc.schedule.thursday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                day off
                              </p>
                            ) : (
                              doc.schedule.thursday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=thursday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                          <p className="mt-2 text-lg">friday</p>
                          <div className="flex ">
                            {doc.schedule.friday.length === 0 ? (
                              <p className=" text-md text-black border-2 p-2 border-sky-600">
                                day off
                              </p>
                            ) : (
                              doc.schedule.friday.map((time: any) => (
                                <p
                                  className=" hover:bg-sky-600 hover:text-white duration-300 cursor-pointer mr-2 mt-2 border-[1px] border-sky-600 px-3 py-2 "
                                  key={time.id}
                                  onClick={() =>
                                    router.push(
                                      `/appointment/${doc._id}?time=${time.label}&day=friday`
                                    )
                                  }
                                >
                                  {time.label}
                                </p>
                              ))
                            )}
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </>
            ))
          )}
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
    </>
  );
}
