"use client";

import {
  Home,
  Phone,
  HelpCircle,
  User2,
  Menu,
  Settings,
  Pill,
  CreativeCommons,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { GlobalContext } from "@/context";

export default function Navbar() {
  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);

  const pathname = usePathname();

  const [nav, setNav] = useState("h-[100px]");
  const [shadow, setShadow] = useState("shadow-user");
  const router = useRouter();
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        setNav("h-[120px] bg-foot text-white");
        setShadow("");
      } else {
        setNav("h-[100px]");
        setShadow("shadow-user");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/auth/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        setIsAuthUser(data);
      });
    });
  }, []);

  const logout = async (e: any) => {
    fetch("http://localhost:4000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      setIsAuthUser(null);
      router.push("/");
    });
  };

  const auth = isAuthUser?.email;
  return (
    <header className={` bg-white fixed w-full z-20 top-0 ${shadow} z-50`}>
      <div
        className={`flex justify-between items-center ${nav} pl-20 duration-300  max-md:px-2 pt-4 `}
      >
        <div className="logo">
          <Image src="/logo.png" alt=" logo" width={180} height={180} />
        </div>
        <ul className=" hidden lg:flex">
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/")}
          >
            Home <Home className=" ml-1" />
          </li>
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/doctors") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/doctors")}
          >
            Doctors
            <User2 className=" ml-1" />
          </li>
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/services") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/services")}
          >
            Services
            <Settings className=" ml-1" />
          </li>
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/blog") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/blog")}
          >
            Blog
            <HelpCircle className=" ml-1" />
          </li>
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/medicen") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/medicen")}
          >
            Medicen <Pill className=" ml-1" />
          </li>
          <li
            className={` py-2 px-4 cursor-pointer duration-300 ${
              pathname.endsWith("/tips") ? "text-[#185a9d]" : ""
            } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
            onClick={() => router.push("/tips")}
          >
            Tips <CreativeCommons className=" ml-1" />
          </li>
        </ul>
        <Popover>
          <PopoverTrigger>
            {auth ? (
              <Image src="/default.png" alt="avatar" height={40} width={40} />
            ) : (
              <Image
                src="/default_avatar.png"
                alt="avatar"
                height={40}
                width={40}
              />
            )}
          </PopoverTrigger>
          <PopoverContent>
            {auth ? (
              <>
                <button
                  className={` py-2 pl-4 cursor-pointer duration-300 hover:text-sky-700 hover:pl-5 block w-full text-left font-bold border-b-[1px]`}
                  onClick={() => router.push(`/my-profile/${isAuthUser.id}`)}
                >
                  My profile
                </button>
                <button
                  className={`py-2 pl-4 cursor-pointer duration-300 hover:text-sky-700 hover:pl-5  block w-full  text-left   font-bold `}
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className={` py-2 pl-4 cursor-pointer duration-300 hover:text-sky-700 hover:pl-5 block w-full text-left font-bold border-b-[1px]`}
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
                <button
                  className={` py-2 pl-4 cursor-pointer duration-300 hover:text-sky-700 hover:pl-5  block w-full  text-left   font-bold `}
                  onClick={() => router.push("/register")}
                >
                  Register
                </button>
              </>
            )}
          </PopoverContent>
        </Popover>
        <Sheet>
          <SheetTrigger>
            <Menu className="lg:hidden mx-1" />
          </SheetTrigger>
          <SheetContent className="bg-white text-white">
            <SheetHeader>
              <SheetTitle>
                <div className="logo">
                  <h3 className="logo-grediant text-3xl"> AL JAZEERA </h3>
                </div>
              </SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col">
                  <li
                    className={` py-2  cursor-pointer duration-300 ${
                      pathname.endsWith("/") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
                    onClick={() => router.push("/")}
                  >
                    <Home className=" mr-1" /> Home
                  </li>
                  <li
                    className={` py-2  cursor-pointer duration-300 ${
                      pathname.endsWith("/doctors") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center ml-1 font-bold `}
                    onClick={() => router.push("/doctors")}
                  >
                    <User2 className=" mr-1" /> Doctors
                  </li>
                  <li
                    className={` py-2  cursor-pointer duration-300 ${
                      pathname.endsWith("/services") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center ml-1 font-bold `}
                    onClick={() => router.push("/services")}
                  >
                    <Settings className=" mr-1" /> Services
                  </li>
                  <li
                    className={` py-2  cursor-pointer duration-300 ${
                      pathname.endsWith("/blog") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center ml-1 font-bold `}
                    onClick={() => router.push("/blog")}
                  >
                    <HelpCircle className=" mr-1" /> Blog
                  </li>
                  <li
                    className={` py-2 px-4 cursor-pointer duration-300 ${
                      pathname.endsWith("/contact") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center  ml-1 font-bold `}
                    onClick={() => router.push("/contact")}
                  >
                    Medicen <Pill className=" ml-1" />
                  </li>
                  <li
                    className={` py-2  cursor-pointer duration-300 ${
                      pathname.endsWith("/contact") ? "text-[#185a9d]" : ""
                    } hover:text-[#185a9d] flex items-center ml-1 font-bold `}
                    onClick={() => router.push("/contact")}
                  >
                    <Phone className=" mr-1" /> Contact
                  </li>
                  <div>
                    {auth ? null : (
                      <div className=" flex items-center">
                        <button
                          className={` lg:hidden logo-grediant text-xl py-2 px-4 duration-300 font-bold `}
                          onClick={() => router.push("/login")}
                        >
                          Login
                        </button>
                        <p>|</p>
                        <button
                          className={` lg:hidden logo-grediant text-xl py-2 px-4 duration-300 font-bold `}
                          onClick={() => router.push("/register")}
                        >
                          Register
                        </button>
                      </div>
                    )}
                  </div>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
