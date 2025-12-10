import React from 'react'
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Contact() {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="container p-12 px-24">
          <SectionHeader
            title={"Contact section"}
            color={"text-primary-dark"}
          />
          <div className="container px-52 flex flex-col mt-12">
            <input
              type="text"
              placeholder="username"
              className="mb-8 p-2 rounded-md w-full border-b border-primary-dark/20 "
            />
            <input
              type="text"
              placeholder="userEmail"
              className="mb-8 p-2 rounded-md w-full border-b border-primary-dark/20 "
            />
            <input
              type="text"
              placeholder="userAge"
              className="mb-8 p-2 rounded-md w-full border-b border-primary-dark/20"
            />
            <input
              type="text"
              placeholder="userPassword"
              className="mb-8 p-2 rounded-md w-full border-b border-primary-dark/20"
            />
            <button className="bg-secondary w-fit text-white px-6 py-2 rounded-lg hover:bg-secondary/80 hover:duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
