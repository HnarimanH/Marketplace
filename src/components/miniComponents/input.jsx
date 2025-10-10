import React from "react";
import { LuSearch, LuMenu } from "react-icons/lu";


export default function Input({event, value, placeholder, isSearch, searchEvent, className}){
    return(
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
            
            <div className="max-w-[500px] w-full h-10 border-2 border-orng-md flex flex-row shadow-2xl rounded hover:scale-101 transform duration-300">
                  {isSearch ? <LuSearch 
                  onClick={searchEvent}
                  className="h-8 w-8 absolute mt-[2px] ml-[2px]" 
                  color="gray"/>  : <></>}
                  <input 
                    type="text" 
                    placeholder={placeholder}
                    className="w-full h-full text-center rounded"
                    value={value}
                    onChange={event}
                    />
            </div>
        </div>
    )
}