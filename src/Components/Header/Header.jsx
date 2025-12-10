import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [expand, setExpand] = useState(false);
  return (
    <nav className="bg-primary py-6 px-18 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center ">
          <Link
            className="text-4xl text-white uppercase font-semibold"
            to={"/"}
          >
            Start Framework
          </Link>
          <div className="lg:flex hidden gap-6">
            <NavLink className="navItem" to={"about"}>
              ABOUT
            </NavLink>
            <NavLink className="navItem" to={"portfolio"}>
              PORTFOLIO
            </NavLink>
            <NavLink className="navItem" to={"contact"}>
              CONTACT
            </NavLink>
          </div>
          <div className="lg:hidden">
            <i
              className="fa-solid fa-bars text-white text-xl"
              onClick={() => setExpand(!expand)}
            ></i>
          </div>
        </div>
        {expand ? (
          <div className="flex flex-col items-end mt-4 lg:hidden gap-4">
            <NavLink className="navItem" to={"about"}>
              ABOUT
            </NavLink>
            <NavLink className="navItem" to={"portfolio"}>
              PORTFOLIO
            </NavLink>
            <NavLink className="navItem" to={"contact"}>
              CONTACT
            </NavLink>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
