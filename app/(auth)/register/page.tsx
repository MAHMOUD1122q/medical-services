"use client";
import Image from "next/image";
import { User,Mail,Key } from "lucide-react";
import img from "@/assets/Mobile-login-Cristina.jpg";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

export default function Register() {
  const { toast } = useToast()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const register = async (e: any) => {
    e.preventDefault();
    const data = await fetch("http://localhost:4000/api/auth/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        username,
        email,
        password,
      }),
    })
    const finalData = await data.json();
    if(finalData.success) {
        toast({
          variant:"success",
          title: finalData.message,
        })
        router.push("/login")
    }else {
        toast({
          variant:"destructive",
          title: finalData.message,
        })
    }
  };

  return (
    <>
      <title> Register </title>
      <div className="flex pt-44 pb-20 mx-4 md:mx-64">
        <div className={` duration-700`}>
          <div>
            <button
              className={`px-16 py-2 bg-[#43cea2] mr-2 text-white duration-300 border-[1px]`}
            >
              Register
            </button>
            <button
              className=" px-[54px] py-2 bg-gray-100 hover:bg-[#43cea2] hover:text-white duration-300 border-[1px]"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
          <form   onSubmit={register}  >
            <div className=" relative mt-4">
              <span className=" absolute top-1/2 translate-y-[-50%] pl-1">
                <User className=" text-slate-600" />
              </span>
              <input
                type="text"
                placeholder=" Username "
                className="px-8 border-[1px] w-[345px] h-10"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* ============================ */}
            <div className=" relative mt-4">
              <span className=" absolute top-1/2 translate-y-[-50%] pl-1">
                <Mail className=" text-slate-600" />
              </span>
              <input
                type="email"
                placeholder=" Email "
                className="px-8 border-[1px] w-[345px] h-10"
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
                placeholder="Password"
                className="px-8 border-[1px] w-[345px] h-10"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className=" text-white py-2 px-[148px] mt-8 rounded-lg duration-700 button-grediant">
              Register
            </button>
          </form>
          <a
            onClick={() => router.push("/")}
            className=" mt-4 block text-[#185a9d]"
          >
            Return to home page &rarr;
          </a>
        </div>
        <div className={` ml-24 duration-700 fadeInRight`}>
          <Image src={img} alt="" width={800} height={100}  />
        </div>
      </div>
    </>
  );
}
