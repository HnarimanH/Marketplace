import React from "react";
import { LuMessageCircle, LuUser, LuCompass, LuSearch } from "react-icons/lu";

export default function Button({ text = "", onClick, icon, bg }) {
    const BG = bg || ""
  const icons = {
    message: <LuMessageCircle className="w-5 h-5" />,
    user: <LuUser className="w-5 h-5" />,
    compass: <LuCompass className="w-5 h-5" />,
    search: <LuSearch className="w-5 h-5"/>  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 flex-1 h-full flex ${BG} ${icon ? "" : "rounded shadow-2xl"} items-center justify-center  transform duration-300 cursor-pointer text-shadow-2xs focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 hover:scale-105 `}
      aria-label={text || icon}
    >
      {icons[icon] || null}
      {text && <span className="ml-2">{text}</span>}
    </button>
  );
}