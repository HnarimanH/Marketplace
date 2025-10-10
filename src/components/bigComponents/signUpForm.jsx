
import React, { useState } from "react";
import Input from "../miniComponents/input";
import Button from "../miniComponents/button";
import { LuUser } from "react-icons/lu";


export default function SignUpForm({setCurrentPage}){
    
    return(
        <div className="w-full h-full flex flex-col items-center justify-center">


            <div className= " relative w-[80%] md:max-w-1/2 lg:max-w-3/10 xl:max-w-2/5 h-full border-2 border-orng-md rounded flex flex-col items-center justify-center">
                <div className="w-full absolute h-36 flex items-center justify-center top-0">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-orng-md">
                        <LuUser className="w-13 h-13 text-orng-xlg"/>
                    </div>
                </div>
                <div className="w-[90%] max-w-64 xl-max-w-80  flex flex-col items-start justify-center">

                    <h1 className="text-xl text-orng-xlg text-shadow-2xs mb-2 ">Name</h1>
                    <Input 
                    className={'mb-10'}
                    placeholder={'Gholam Reza'}/>

                    <h1 className="text-xl text-orng-xlg text-shadow-2xs mb-2 ">Email</h1>
                    <Input 
                    className={'mb-10'}
                    placeholder={'example@email.com'}/>


                    <h1 className="text-xl text-orng-xlg text-shadow-2xs mb-2 ">Password</h1>
                    <Input 
                    className={'mb-10'}
                    placeholder={'passeword'}/>


                                 
                </div>
                <div className="w-full flex items-center justify-center h-24 absolute bottom-0">
                    <div className="w-40 sm:w-44 h-14 flex  ">
                        <Button 
                        onClick={()=>{
                            setCurrentPage('home')
                        }}
                        text={'Sign Up'} 
                        bg={"bg-orng-md "} 
                        />    
                    </div>
                </div>  
            </div>
        </div>
    )
}