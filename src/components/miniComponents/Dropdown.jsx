import React from "react";
import { useState } from "react";



function Dropdown({ setLocation, Locations, placeHolder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeHolder);

  const handleSelect = (value) => {
    setSelected(value);
    setLocation(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 bg-orng-xsm shadow cursor-pointer flex justify-between items-center`}
      >
        {selected}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full h-[400px] bg-orng-xsm overflow-scroll scroll-hidden   shadow z-30">
          <li
              onClick={() => handleSelect('All')}
              className="p-2 hover:bg-orng-sm cursor-pointer transform duration-300 "
            >
              All
            </li>
          {Locations.map((cat) => (
            <li
              key={cat}
              onClick={() => handleSelect(cat)}
              className="p-2 hover:bg-orng-sm cursor-pointer transform duration-300"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;