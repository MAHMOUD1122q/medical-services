"use client";

import { GlobalContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect} from "react";

export default function SideBar() {
  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:4000/api/auth/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        setIsAuthUser(data);
      });
    });
  }, []);

  const admin = isAuthUser?.role === "admin";
  return (
    <div className=" w-56 pl-8 mr-32">
      {admin ? (
        <>
          <ul className=" border-b-[1px]">
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/add-doctor") ? "text-sky-600" : ""
              } `}
              onClick={() => router.push("/my-profile/add-doctor")}
            >
              Add Doctor <span className=" text-sky-700">(admin)</span>{" "}
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/add-blog") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/add-blog")}
            >
              Add blog <span className=" text-sky-600">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/add-medicen") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/add-medicen")}
            >
              Add medicen <span className=" text-sky-600">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/all-doctors") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/all-doctors")}
            >
              All doctors <span className=" text-sky-700">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/all-blog") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/all-blog")}
            >
              All blog <span className=" text-sky-700">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/all-medicen") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/all-medicen")}
            >
              All medicen <span className=" text-sky-700">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/all-appointment") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/all-appointment")}
            >
              All appointments <span className=" text-sky-700">(admin)</span>
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/all-users") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push("/my-profile/all-users")}
            >
              All Users <span className=" text-sky-700">(admin)</span>
            </li>
          </ul>
          <ul className=" mt-2">
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/my-profile") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push(`/my-profile/${isAuthUser.id}`)}
            >
              My profile
            </li>
            <li
              className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
                pathname.endsWith("/update-password") ? "text-sky-600" : ""
              }`}
              onClick={() => router.push(`/my-profile/update-password/${isAuthUser.id}`)}
            >
              Update password
            </li>
          </ul>
        </>
      ) : (
        <ul className=" mt-2">
          <li
            className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
              pathname.endsWith("/my-profile") ? "text-sky-600" : ""
            }`}
            onClick={() => router.push(`/my-profile/${isAuthUser.id}`)}
          >
            My profile
          </li>
          <li
            className={`mb-2 cursor-pointer hover:text-sky-600 duration-300 ${
              pathname.endsWith("/update-password") ? "text-sky-600" : ""
            }`}
            onClick={() => router.push(`/my-profile/update-password/${isAuthUser.id}`)}
          >
            Update password
          </li>
        </ul>
      )}
    </div>
  );
}
