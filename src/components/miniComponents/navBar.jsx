import React from "react";
export default function NavBar({tags, isDropdown}){
    if (isDropdown === undefined){
        isDropdown = false
    }
    return(
    <div className={`w-full h-full flex ${isDropdown ? "flex-col":""} items-center justify-evenly text-sm`}>
        {tags.map((tagObj, index) => {
        const { type, content, props } = tagObj;
        return React.createElement(type, { key: index, ...props }, content);
        })}
    </div>
    )
}