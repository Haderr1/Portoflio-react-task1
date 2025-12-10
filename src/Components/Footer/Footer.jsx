import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="shadow-md">
        <div className="  bg-primary px-12 py-6 text-center text-white">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:w-1/3 sm:mb-12 lg:mb-0">
                <h5 className="uppercase font-semibold mb-4">Location</h5>
                <p className="mb-2">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="sm:w-full lg:w-1/3 sm:mb-12 lg:mb-0">
                <h5 className="uppercase font-semibold mb-4">Around the Web</h5>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="footerLink">
                    <i className="fa-brands fa-facebook text-xl text-center"></i>
                  </a>
                  <a href="#" className="footerLink">
                    <i className="fa-brands fa-twitter text-xl text-center"></i>
                  </a>
                  <a href="#" className="footerLink">
                    <i className="fa-brands fa-linkedin text-xl text-center"></i>
                  </a>
                  <a href="#" className="footerLink">
                    <i className="fa-solid fa-globe text-xl text-center"></i>
                  </a>
                </div>
              </div>
              <div className="sm:w-full lg:w-1/3 sm:mb-12 lg:mb-0">
                <h5 className="uppercase font-semibold mb-4">
                  About Freelancer
                </h5>
                <p>
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-primary-dark  py-4 text-center text-white">
          <div className="container">&copy; Copyright © Your Website 2021</div>
        </div>
      </footer>
    </div>
  );
}
