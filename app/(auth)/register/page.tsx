"use client";
import Image from "next/image";
import { User,Mail,Key } from "lucide-react";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { GlobalContext } from "@/context";

export default function Register() {
  const { toast } = useToast()
  const {pageLevelLoader, setPageLevelLoader} = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const register = async (e: any) => {
    setPageLevelLoader(true);
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
        setPageLevelLoader(false);
    }else {
      setPageLevelLoader(false);
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
                className="px-8 border-[1px] w-[345px] h-10 rounded-lg"
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
                placeholder="Password"
                className="px-8 border-[1px] w-[345px] h-10 rounded-lg"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className=" text-white py-2 px-[148px] mt-8 rounded-lg duration-700 button-grediant max-w-[350px] w-full">
            {pageLevelLoader ? (
                      <ComponentLevelLoader
                        text={"Registering"}
                        color={"#ffffff"}
                        loading={pageLevelLoader}
                        size="10px"
                      />
                    ) : (
                      "Register"
                    )}
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
          <Image src='/Mobile-login-Cristina.jpg' alt="" width={800} height={100}  />
        </div>
      </div>
    </>
  );
}
