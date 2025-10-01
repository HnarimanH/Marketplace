import React, { useState } from "react";
import { LuCross } from "react-icons/lu";
import Button from "../miniComponents/button";
export default function({productClicked, setPurchasePage}){
    const Colors = ['black','gray','white','red','green','blue',]
    const [shownImage, setShownImage] = useState(productClicked.img)
    const [whatImageClicked, setWhatImageClicked] = useState()
    const [whatColorClicked, setWhatColorClicked] = useState()
    
    return(
        <div className="relative w-full h-full  flex flex-col sm:flex-row justify-center items-center overflow-y-scroll scroll-hidden ">
            <div onClick={()=>{
                setShownImage()
                setPurchasePage(false)}} 
            className="fixed top-25 left-5 text-2xl cursor-pointer">
                <LuCross className="w-10 h-10 rotate-45 "/>
            </div>
            <div className=" w-full sm:w-1/3 h-auto min-h-full flex flex-col items-start justify-start">
                <div className="w-full h-[500px] sm:mt-40 flex items-center justify-center">
                    <img src={shownImage ? shownImage : productClicked.img} alt="img" className="border-[1px] shadow-2xl rounded h-full object-cover" />
                </div>
                <div className="w-full h-fit mt-10 flex overflow-x-scroll scroll-hidden scroll-smooth">
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
                <div className="w-full flex flex-row items-center justify-center gap-2 mt-10">
                    {Colors.map((color)=>(
                        <div className={` w-10 h-10 rounded-full brightness-75 border-2`}
                        style={{ backgroundColor: color }}>

                        </div>
                    ))}
                </div>

            </div>
            <div className="w-full h-40 fixed bottom-0 left-0 flex items-center justify-center">
                <div className="w-auto max-w-[500px] rounded-xl h-25 flex items-center justify-center bg-orng-xsm border-2 border-orng-sm shadow-2xl">
                    <div className=" w-[400px] flex items-center justify-center">
                        <div className="w-[200px] h-14  flex items-center justify-center  ">
                            <Button text={"Add to cart"} bg={"bg-orng-md"} event={()=>{}}/>
                        </div>
                    </div>
                    <div className=" w-auto flex items-center justify-center ">
                        <div className="w-[150px] h-14  flex items-center justify-center text-orng-xlg text-2xl">
                            ${productClicked.price}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full sm:w-1/3 h-auto min-h-full flex flex-col items-start justify-start gap-20  ">
                
                <div className="w-full  flex items-center justify-center flex-col gap-20">
                    <div className="w-full flex items-center justify-center text-5xl  text-orng-xlg">
                    {productClicked.name}
                    </div>
                <div className="w-full h-auto flex items-center text-2xl pl-20 text-orng-xlg">
                    {productClicked.description}
                </div>
                <div className="flex flex-row items-end justify-center  w-full h-auto">
                    <div className="w-full pl-20 text-orng-xlg">
                        <h3 className="text-orng-xlg"> {productClicked.location}</h3>
                    </div>
                    <div className="w-full pl-20 text-orng-xlg">
                        <h3 className="text-orng-xlg"> ${productClicked.price}</h3>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}