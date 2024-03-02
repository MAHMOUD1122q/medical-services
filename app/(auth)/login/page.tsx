"use client";

import Image from "next/image";
import { User, Key } from "lucide-react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { GlobalContext } from "@/context";
import ComponentLevelLoader from "@/components/Loader/componentlevel";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthUser, componentLevelLoader, setComponentLevelLoader } =
    useContext(GlobalContext);

  const router = useRouter();
  const login = async (e: any) => {
    setComponentLevelLoader({ loading: true, id: "" });
    e.preventDefault();
    const data = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const finalData = await data.json();
    if (finalData.success) {
      toast({
        variant: "success",
        title: finalData.message,
      });
      setIsAuthUser(finalData);
      router.push("/");
      setComponentLevelLoader({ loading: false, id: "" });
    } else {
      setComponentLevelLoader({ loading: false, id: "" });
      toast({
        variant: "destructive",
        title: finalData.message,
      });
    }
  };

  return (
    <>
      <title> Login </title>
      <div className="flex pt-44 pb-20 mx-4 md:mx-64">
        <div className={` duration-700 bounceIn`}>
          <div>
            <button
              className={`px-16 py-2 hover:bg-[#43cea2] hover:text-white mr-2 duration-300 border-[1px]`}
              onClick={() => router.push("/register")}
            >
              Register
            </button>
            <button className=" px-[54px] py-2 bg-[#43cea2] text-white duration-300 border-[1px]">
              Login
            </button>
          </div>
          <form onSubmit={login}>
            <div className=" relative mt-4">
              <span className=" absolute top-1/2 translate-y-[-50%] pl-1">
                <User className=" text-slate-600" />
              </span>
              <input
                type="email"
                placeholder=" Email "
                className="px-8 border-[1px] w-[345px] h-10 rounded-lg"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* ============================ */}
            <div className=" relative mt-4">
              <span className=" absolute top-1/2 translate-y-[-50%] pl-1">
                <Key className=" text-slate-600" />
              </span>
              <input
                type="password"
                placeholder=" Password "
                className="px-8 border-[1px] w-[345px] h-10 rounded-lg"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className=" text-white py-2 px-[100px] mt-8 rounded-lg duration-300 button-grediant max-w-[350px] w-full">
              {componentLevelLoader && componentLevelLoader.loading ? (
                <ComponentLevelLoader
                  text={"Logging In"}
                  color={"#ffffff"}
                  loading={componentLevelLoader && componentLevelLoader.loading}
                  size="10px"
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
          <a
            className=" mt-4 block text-[#185a9d]"
            onClick={() => router.push("/")}
          >
            Return to home page &rarr;{" "}
          </a>
          <a
            className=" mt-4 block text-[#185a9d]"
            onClick={() => router.push("/")}
          >
            
          </a>
        </div>
        <div className={` ml-24 duration-700 fadeInRight`}>
          <Image src='/Mobile-login-Cristina.jpg' alt="" width={800} height={100} />
        </div>
      </div>
    </>
  );
}
