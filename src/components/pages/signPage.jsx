import React, { useState } from "react";
import SignUpForm from "../bigComponents/signUpForm";
import LogInForm from "../bigComponents/logInForm";
import { LuCross } from "react-icons/lu";
export default function SignPage({setCurrentPage}){
    const [haveAnAccount, setHaveAnAccount] = useState(false)
    return(
        <div className="w-full h-full flex flex-col items-center justify-center bg-orng-2xsm">
            <LuCross 
                onClick={()=>{
                    setCurrentPage('first')
                }}
                className=" cursor-pointer w-13 h-13 text-orng-xlg fixed top-5 left-5 rotate-45"  />
            <div className="flex w-full items-center justify-center gap-15 mb-10 ">
                <div 
                onClick={()=>{setHaveAnAccount(true)}}
                className={`hover:cursor-pointer ${haveAnAccount ? "border-b-2 border-orng-md" : ""}`}>
                    <h1 className={`text-2xl text-orng-xlg text-shadow-2xs   `}>Log In </h1>
                </div>
                <div 
                onClick={()=>{setHaveAnAccount(false)}}
                className={`hover:cursor-pointer ${haveAnAccount ? "" : "border-b-2 border-orng-md"}`}>
                    <h1 className={`text-2xl text-orng-xlg text-shadow-2xs   `}>Sign Up </h1>
                </div>
            </div>
            <div className={`w-full ${haveAnAccount ? "h-[500px]" : "h-[600px]"}`}>
                {haveAnAccount ? <LogInForm setCurrentPage={setCurrentPage}/> : <SignUpForm setCurrentPage={setCurrentPage}/>}
            </div>
        </div>
    )
}