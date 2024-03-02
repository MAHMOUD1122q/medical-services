"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import CommenSection from "@/components/commenSection";
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


export default function Specialties() {
  const [Blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `http://localhost:4000/api/blog/all-blog?page=${page}&limit=9`,
      {}
    ).then((response) => {
      response.json().then((data) => {
        setBlogs(data.data);
        setPageCount(data.pageCount);
      });
    });
  }, [page]);
  return (
    <>
      <title> Our Blog </title>
      <CommenSection title=" Read Our" sub="Blog" subtitle="" />
      <div className="py-16">
        <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          {Blogs.length === 0 ? (
            <p className=" text-3xl font-bold text-center w-full mb-5">
              No blogs
            </p>
          ) : (
            Blogs.map((blog: any) => (
              <>
                <div
                  className=" mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn cursor-pointer"
                  onClick={() => router.push(`/blog/${blog._id}`)}
                >
                  <img
                    loading="lazy"
                    src={blog.img}
                    alt="image"
                    className=" w-full h-56"
                  />
                  <div className=" flex justify-between px-6 pt-4 pb-2">
                    <span className="logo-grediant"> Admin </span>
                    <span className="text-[#666666]"> {blog.createdAt} </span>
                  </div>
                  <div className=" px-6">
                    <h3 className=" font-semibold text-2xl mt-2 mb-6">
                      {blog.title}
                    </h3>
                    <div
                      className={` text-[#666666] mb-4 h-10 overflow-hidden`}
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                    <button className=" flex mb-12 logo-grediant items-center text-lg">
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
