// @ts-nocheck 
'use client'
import Input from "../../components/input";
import {useState} from "react";
import {
  facebookProvider,
  googleProvider,
} from "./config/authMethod.js";
import socialMediaAuth from "./service/auth.js";
import { useRouter } from 'next/navigation';
const Auth = () => {
  const router = useRouter()
    const [email,setEmail] = useState("")

    async function handelOnClick(provider) {
      const res = await socialMediaAuth(provider);
      console.log(res);
      if (res !== null && res !== undefined) {
        var userData = {
          name: res.displayName,
          email: res.email,
          phone: res.phoneNumber,
          image: res.photoURL,
          dataFrom: "google",
        };
  
        console.log("user data", userData);
        localStorage.setItem("STORING_AUTH_DATA",JSON.stringify(userData))
        router.push("/")
  
      }
    }
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
            <Input label="Email" onChange={(e:any)=>{setEmail(e.target.value)}} id="email" type="email" value={email} />
            <Input label="Password" onChange={(e:any)=>{setEmail(e.target.value)}} id="password" type="password" value=""/>
            <button className="bg-red-600 py-3 text-white rounded-md w-full font-600 mt-6 hover:bg-red-700">Login</button>
            <div className="d-flex jcc">
                    <img   onClick={() => handelOnClick(googleProvider)} className="h-10 w-10  ml-auto mr-auto cursor-pointer" src="./images/googlelogin.png"></img>
              </div>
            <p className="text-neutral-500 text-lg">First time using Netflix? <span className="text-white text-bold hover:underline cursor-pointer">Signup</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
