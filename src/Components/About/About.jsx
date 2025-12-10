import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function About() {
  return (
    <>
      <div className="h-full bg-secondary flex flex-col items-center justify-center">
        <div className="container p-12 px-24">
          <SectionHeader title={"about component"} />
          <div className="flex">
            <p className="text-base text-white my-4 mb-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.{" "}
            </p>
            <p className="text-base text-white my-4 mb-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
