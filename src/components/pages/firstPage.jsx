import React from "react";
import { useState } from "react";
import NavBar from "../miniComponents/navBar";
import Input from "../miniComponents/input";
import { LuSearch, LuMenu } from "react-icons/lu";
import Button from "../miniComponents/button";
export default function FirstPage({selectedProduct, setSelectedProduct, setIsHomePage}){
    const [isDropdown, setIsDropdown] = useState(false)
    
    const triggerDropdown = () =>{
      setIsDropdown(!isDropdown)
    }
    const topNavContent = [
    { 
      type: "h1", 
      content: "Mobile", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },
    { 
      type: "h1", 
      content: "PC", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },
    { 
      type: "h1", 
      content: "Laptop", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },
    
    
    
    
    
  ];
  const bottomNavContent = [
    { 
      type: "h1", 
      content: "About", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },
    { 
      type: "h1", 
      content: "Contact", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },
    { 
      type: "h1", 
      content: "Home", 
      props: { 
        className: "text-lg cursor-pointer hover:scale-105 transform duration-300  " 
      } 
    },];
    return(
        <div className="w-screen h-screen bg-orng-2xsm flex flex-col items-center justify-between text-lg ">
            <div className="w-full bg-orng-xsm h-20 flex items-center justify-center">
                <div className="sm:w-1/2 w-fit h-full flex items-center justify-start ">
                    <div className="w-[250px] h-14 flex items-center justify-center shadow ml-10">
                      <Button text={'Login / Create account'} bg={"bg-orng-md "} />
                    </div>
                </div>
                <div className="w-1/2 h-full hidden sm:flex items-center justify-end ">
                    <NavBar tags={topNavContent} isDropdown={isDropdown}/>
                </div>
                <div 
                onClick={triggerDropdown}
                className="w-1/2 h-full sm:hidden flex items-center justify-end " >
                    <LuMenu className="sm:hidden flex h-[90%] w-14 mr-5"/>
                </div>
                <div className={`w-1/2 h-[700px] ${isDropdown ? "flex":"hidden"} sm:hidden flex-col items-center justify-center absolute bg-white left-1/2 top-20`}>
                    <NavBar tags={topNavContent} isDropdown={isDropdown}/>
                </div>
            </div>
            <div className="w-[90%] h-max flex flex-col items-center justify-center gap-5 mb-[10%]">
                <div className="w-[300px]"><img src="/carrot.png" alt="" className="w-full"/></div>
                  <h1 className="text-5xl font-bold text-shadow-2xs text-orng-xmd font-varela">HAVIJ</h1>
                <Input 
                  placeholder={"Enter Product Name"}
                  event={(e) => setSelectedProduct(e.target.value)} 
                  isSearch={true}
                  searchEvent = {()=>{setIsHomePage(true)}}
                  value={selectedProduct}/> 
            </div>
            <div className="w-full bg-orng-xsm sm:h-14 h-20 flex">
                <div className="w-full h-full flex items-center justify-center">
                    <NavBar tags={bottomNavContent}/>
                </div>
            </div>
        </div>
    );
}