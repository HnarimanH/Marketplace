import React, { useState } from "react";
import { LuCross } from "react-icons/lu";
import Button from "../miniComponents/button";
export default function({productClicked, setPurchasePage}){
    const [shownImage, setShownImage] = useState(productClicked.img)
    return(
        <div className="relative w-full h-full  flex justify-center items-center overflow-y-scroll scroll-hidden ">
            <div className="relative w-1/3 h-auto min-h-full flex flex-col items-start justify-start ">
                <div className="w-full h-fit sm:mt-40 flex items-center justify-center">
                    <img src={shownImage ? shownImage : productClicked.img} alt="img" className="border-[1px] shadow-2xl rounded" />
                </div>
                <div className="w-full h-fit mt-10">
                    <div className="flex w-30 h-30 ">
                  {productClicked.img && productClicked.img.map((img, index) => (
                        <img onClick={()=>{setShownImage(img)}} key={index} src={img} alt={`${productClicked.name} ${index}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-40 fixed bottom-0 left-0 flex items-center justify-center">
                <div className="w-auto max-w-[500px] rounded-xl h-25 flex items-center justify-center bg-orng-xsm border-2 border-orng-sm shadow-2xl">
                    <div className=" w-[250px] flex items-center justify-center">
                        <div className="w-[200px] h-14 hidden flex-none lg:flex flex-row items-center justify-center  ">
                            <Button text={"Add to cart"} bg={"bg-orng-md"} event={()=>{}}/>
                        </div>
                    </div>
                    <div className=" w-auto flex items-center justify-center ">
                        <div className="w-[150px] h-14 hidden flex-none lg:flex flex-row items-center justify-center text-orng-xlg text-2xl">
                            ${productClicked.price}
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={()=>{setPurchasePage(false)}} className="absolute top-25 left-5 text-2xl cursor-pointer">
                <LuCross className="w-10 h-10 rotate-45 "/>
            </div>
            <div className="w-1/3 h-auto min-h-full pt-40 flex flex-col items-start justify-start   ">
                <div className="w-full text-5xl pl-20 text-orng-xlg">
                    {productClicked.name}
                </div>
                <div className="w-full h-60 flex items-center text-2xl pl-20 text-orng-xlg">
                    {productClicked.description}
                </div>
                <div className="flex flex-row items-end justify-center  w-full h-2/5">
                    <div className="w-full pl-20 text-orng-xlg">
                        <h3 className="text-orng-xlg"> {productClicked.location}</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}