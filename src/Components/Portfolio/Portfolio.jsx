import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

export default function Portfolio() {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="container p-12 px-24">
          <SectionHeader title={"portfolio component"} color={"text-primary-dark"} />
          <div className="flex flex-col gap-8 mt-12">
            <div className="flex justify-between items-center gap-4">
              {[img1, img2, img3].map((img, idx)=>(
                <div key={idx} className="relative cursor-pointer">
                  <img src={img} alt="Portfolio Item" className="portImg" />
                  <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <i className="fa-solid fa-plus text-white text-3xl"></i>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center gap-4">
              {[img1, img2, img3].map((img, idx) => (
                <div key={idx} className="relative cursor-pointer">
                  <img src={img} alt="Portfolio Item" className="portImg" />
                  <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <i className="fa-solid fa-plus text-white text-3xl"></i>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center gap-4">
              {[img1, img2, img3].map((img, idx) => (
                <div key={idx} className="relative cursor-pointer">
                  <img src={img} alt="Portfolio Item" className="portImg" />
                  <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <i className="fa-solid fa-plus text-white text-3xl"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
