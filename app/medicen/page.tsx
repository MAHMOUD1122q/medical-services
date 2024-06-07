"use client";
import CommenSection from "@/components/commenSection";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
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

export default function Medicine() {
  const [medicens, setMedicens] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetch(
      `http://localhost:4000/api/medicen/all-medicen?search=${search}&page=${page}`,
      {}
    ).then((response) => {
      response.json().then((data) => {
        setMedicens(data.data);
        setPageCount(data.pageCount);
      });
    });
  }, [search, page]);
  return (
    <>
      <title> Medicen </title>
      <CommenSection title="Learn about" sub=" Medicen" subtitle="" />
      <div className="py-16">
        <div className="flex flex-wrap items-center flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-32 mb-8">
          <p className="font-bold text-lg ">Search</p>
          <input
            type="text"
            name="search"
            onChange={(e: any) => setSearch(e.target.value)}
            className=" border-sky-600 border ml-2 rounded-md py-2 w-80 outline-none pl-2 pr-10 caret-sky-600 text-xl"
          />
          <Search className="ml-[-30px]" />
        </div>
        <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          {medicens.length === 0 ? (
            <p className=" text-2xl font-bold text-center w-full mb-5">
              No medicen
            </p>
          ) : (
            medicens.map((med: any) => (
              <>
                <div
                  className=" mx-4 shadow-lg border rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn cursor-pointer hover:scale-105 duration-500"
                  onClick={() => router.push(`/medicen/${med._id}`)}
                >
                  <img
                    loading="lazy"
                    src={med.img}
                    alt="image"
                    className=" w-full h-52"
                  />
                  <div className=" px-6">
                    <h3 className=" font-semibold text-2xl mt-2 mb-3">
                      {med.title}
                    </h3>
                    <p className="text-lg text-gray-500 mb-2">
                      Price: {med.price} EGP
                    </p>
                    <button className=" flex mb-6 logo-grediant items-center text-lg">
                      {" "}
                      Read more <span className=" text-3xl"> &rarr;</span>{" "}
                    </button>
                  </div>
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
