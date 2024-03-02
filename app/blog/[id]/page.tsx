/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function blogPage() {
  const { id } = useParams();

  const [blog, setBlog] = useState([] as any);

  useEffect(() => {
    fetch(`http://localhost:4000/api/blog/single-blog/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setBlog(data.data);
        });
      }
    );
  }, [id]);
  return (
    <>
      <div className=" flex flex-col mx-32 items-center">
        <div className="block mt-36">
          <div className="my-10 font-bold text-3xl">{blog.title}</div>
          <img src={blog.img} alt="" className=" w-[500px]" />
          <div
            dangerouslySetInnerHTML={{ __html: blog.description }}
            className="my-5"
          />
        </div>
      </div>
    </>
  );
}
