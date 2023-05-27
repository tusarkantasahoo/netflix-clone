'use client'
import Input from "../../components/input";
import {useState} from "react";
const Auth = () => {
    const [email,setEmail] = useState("")
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
            <Input label="Email" onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" value={email} />
            <Input label="Password" onChange={(e)=>{setEmail(e.target.value)}} id="password" type="password" value=""/>
            <button className="bg-red-600 py-3 text-white rounded-md w-full font-600 mt-6 hover:bg-red-700">Login</button>
            <p className="text-neutral-500 text-lg mt-10">First time using Netflix? <span className="text-white text-bold hover:underline cursor-pointer">Signup</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
