import React from "react";

export default function SectionHeader({ title, color }) {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`text-4xl font-bold uppercase ${
          color ? color : "text-white"
        }`}
      >
        {title}
      </h1>
      <div className="flex items-center space-x-4 mt-4">
        <hr className={`w-24 border-t-2 ${color ? color : "text-white"}`} />
        <i className={`fa-solid fa-star  ${color ? color : "text-white"}`}></i>
        <hr className={`w-24 border-t-2 ${color ? color : "text-white"}`} />
      </div>
    </div>
  );
}
