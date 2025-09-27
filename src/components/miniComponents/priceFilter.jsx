import React from "react";


export default function PriceFilter({event, value, max, min}){

    return(
        <div className="w-full flex flex-col items-start justify-center">
            <h1>Price range:{value}</h1>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => event(e.target.value)}
                className="w-full  accent-orng-sm"
                    />

        </div>
    )
}