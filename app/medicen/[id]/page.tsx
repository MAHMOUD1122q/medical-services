"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MedicenPage() {
  const { id } = useParams();
  const router = useRouter();
  const [medicen, setMedicen] = useState([] as any);

  useEffect(() => {
    fetch(`http://localhost:4000/api/medicen/single-medicen/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setMedicen(data.data);
        });
      }
    );
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center">
        <div className="block mt-36 mb-8">
          <img src={medicen.img} alt="" className="w-[500px]" />
          <div className="mt-10 font-bold text-3xl">{medicen.title}</div>
          <div className="my-3 font-bold text-xl text-gray-500">
            {" "}
            price: ({medicen.price}EGP)
          </div>
          <p className="text-lg font-semibold"> 
          click on the link to see description
          </p>
          <div
            className=" cursor-pointer text-sky-600 hover:text-sky-700 duration-500"
            onClick={() => router.push(`${medicen.link}`)}
          >
            {medicen.link}
          </div>
        </div>
      </div>
    </>
  );
}
