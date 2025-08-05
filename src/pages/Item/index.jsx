import React from "react";

export default function Item(sprop) {
  return (
    <div>
     <button className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
       <img
        className="w-12 h-12 p-1 "
        src={sprop.icon}
        alt="Bordered avatar"
      />
     </button>
    </div>
  );
}
