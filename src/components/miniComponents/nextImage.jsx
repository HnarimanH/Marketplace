import React from "react";
import { LuTriangle } from "react-icons/lu";


export default function NextImage({index ,setIndex, images, setImage, maxIndex}){

    const nextImage = ()=>{
        if (index < maxIndex){
            setIndex(index+1)
            setImage(images[index])

        }else{
            setIndex(1)
            setImage(images[index])
            
        }
        

    }
    const prevImage = ()=>{
        if (index > 1){
            setIndex(index - 1)
            setImage(images[index])
        }else{
            setIndex(maxIndex)
            setImage(images[index])
        }
        
    }
    return(
        <div className="w-full h-full items-center justify-center flex z-40 ">
            <div onClick={prevImage}>
                <LuTriangle className="w-10 h-10 transform rotate-30" />
            </div>
            
            <div className="w-10 h-10 flex items-center justify-center text-2xl ">{index}</div>
            <div onClick={nextImage}>
                 <LuTriangle className="w-10 h-10 transform rotate-330"  />
            </div>
        </div>
    )
}