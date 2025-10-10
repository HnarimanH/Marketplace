import React, { useState } from "react";
import { LuCross } from "react-icons/lu";
import Button from "../miniComponents/button";
import { LuTriangle } from "react-icons/lu";
export default function({productClicked, setPurchasePage}){
    const Colors = ['black','gray','white','red','green','blue',]
    const [shownImage, setShownImage] = useState(productClicked.img)
    const [whatImageClicked, setWhatImageClicked] = useState()
    const [whatColorClicked, setWhatColorClicked] = useState()
    
    return(
        <div className="relative w-full h-full  flex flex-col md:flex-row justify-center items-start overflow-y-scroll scroll-hidden  mt-20">
            <div onClick={()=>{
                setShownImage()
                setPurchasePage(false)}} 
            className="fixed top-5 left-5 text-2xl cursor-pointer">
                <LuCross className="w-10 h-10 rotate-45 "/>
            </div>
            <div className=" w-[80%] md:w-1/3 h-auto flex flex-col items-start justify-start ">
                <div className="w-full h-[500px]  flex items-center justify-center">
                    <img src={shownImage ? shownImage : productClicked.img} alt="img" className="border-[1px] shadow-2xl rounded h-full object-cover" />
                </div>
                <div className="w-full h-40  flex items-center justify-center overflow-x-scroll scroll-hidden scroll-smooth ">
                    {productClicked.img && productClicked.img.map((img, index) => (
                        <img
                        onClick={() => {
                            setShownImage(img);
                            setWhatImageClicked(index);
                        }}
                        key={index}
                        src={img}
                        alt={`${productClicked.name} ${index}`}
                        className={`h-32 min-w-[120px] object-cover cursor-pointer mx-1 ${
                            whatImageClicked === index ? "brightness-100" : "brightness-50"
                        }`}
                        />
                    ))}
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-2  md:hidden">
                    {Colors.map((color)=>(
                        <div 
                        onClick={()=>{
                            setWhatColorClicked(color)
                        }}
                        className={` w-10 h-10 rounded-full brightness-75 border-2 hover:brightness-100 transform ${whatColorClicked === color ? "scale-120" : "scale-100" } duration-300`}
                        style={{ backgroundColor: color }}>

                        </div>
                    ))}
                </div>

            </div>
            <div className=" w-full h-36 md:h-40 fixed bottom-5 left-0 flex flex-col items-center justify-center transform duration-300 ">
                
                <div className="w-auto max-w-[300px] md:max-w-[400px] rounded-xl h-25 flex items-center justify-center bg-orng-xsm border-2 border-orng-sm shadow-2xl">
                    <div className=" w-[200px] md:w-[300px] flex items-center justify-center">
                        <div className="w-[130px] md:w-[200px]  h-14  flex items-center justify-center  ">
                            <Button text={"Add to cart"} bg={"bg-orng-md"} event={()=>{}}/>
                        </div>
                    </div>
                    <div className=" w-auto flex items-center justify-center ">
                        
                        <div className=" h-14  flex items-center justify-center text-orng-xlg text-2xl mr-10">
                            ${productClicked.price}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full md:w-1/3 h-auto  flex flex-col sm:items-start sm:justify-start  items-center justify-center gap-20    ">
                
            
                <div className="w-full h-full flex  flex-col gap-20">
                    <div className="w-full flex mt-10 text-5xl md:pl-10 text-orng-xlg">
                        {productClicked.name}
                    </div>
                    <div className="w-full h-auto flex mt-10 text-2xl md:pl-10 text-orng-xlg">
                        {productClicked.description}
                    </div>
                    <div className="flex flex-row items-end justify-center  w-full h-auto">
                        <div className="w-full md:pl-10 flex sm:items-start sm:justify-start items-end justify-center text-orng-xlg">
                            <h3 className="text-orng-xlg"> {productClicked.location}</h3>
                        </div>
                        <div className="w-full md:pl-10 flex sm:items-start sm:justify-start items-end justify-center text-orng-xlg">
                            <h3 className="text-orng-xlg"> ${productClicked.price}</h3>
                        </div>

                    </div>
                </div>
                <div className="w-full md:flex flex-row  md:pl-10 gap-2 mt-10 hidden">
                    {Colors.map((color) => (
                    <div 
                        onClick={()=>{
                            setWhatColorClicked(color)
                        }}
                        className={` w-10 h-10 rounded-full brightness-75 border-2 hover:brightness-100 transform ${whatColorClicked === color ? "scale-120" : "scale-100" } duration-300`}
                        style={{ backgroundColor: color }}>

                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}