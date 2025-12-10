import React from "react";
import img from "../../assets/images/avataaars.svg";
import SectionHeader from "../SectionHeader/SectionHeader";
export default function Home() {
  return (
    <>
      <div className="h-full bg-secondary flex flex-col items-center justify-center">
        <img
          src={img}
          alt="Profile"
          className="mx-auto rounded-full h/52 w-52 my-16"
        />
        <SectionHeader title={"start Framework"} />
        <p className="text-base text-white my-4 mb-6">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
