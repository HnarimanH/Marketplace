import React from "react";


export default function Product({img, name, description, price, location, product, productClicked}){
    return(
        <div onClick={() => productClicked(product)} className=" cursor-pointer bg-orng-xsm w-full max-w-[400px] min-w-[300px] h-[200px] flex flex-row items-center justify-center hover:scale-105 transform duration-300 font-varela" >
            <div className=" w-3/5 h-full  border-orng-md p-4">
                <div className="w-full  h-2/5">
                    <h1 className="text-2xl text-shadow-2xs top-10 left-0">{name}</h1>
                </div>
                <div className="w-full h-2/5 flex items-center text-orng-xlg">
                    <p>{description}</p>
                </div>
                <div className="flex flex-row items-end justify-center  w-full h-1/5">
                    <div className="flex flex-col items-start justify-start  w-1/2">
                        <h3 className="text-orng-xlg"> {location}</h3>
                        
                    </div>
                    <div className="flex items-center justify-end  w-1/2">
                        <h2 className="text-orng-xlg hover:bg-orng-sm transform duration-300 w-10  text-center cursor-pointer">${price}</h2>
                    </div>
                </div>

            
            </div>



            <div className="flex items-center justify-center w-full h-[132px] max-w-[132px] min-w-[132px] overflow-hidden">
                <div className="flex items-center justify-center w-full min-w-[132px] h-full bg-orng-md  rounded ml-4 mr-4">
                    <img 
                    src={img} 
                    alt="image" 
                    className=" w-full h-[128px] max-w-[128px] object-cover  rounded " 
                />
                </div>
            </div>
        </div>
    )
}