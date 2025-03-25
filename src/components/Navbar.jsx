import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-cetner navbar">
      <img src={logo} alt="logo image" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex list-none justify-end items-center flex-1">
        {navLinks.map((navLink, i) => (
          <li
            key={navLink.id}
            className={`font-poppins text-[16px] cursor-pointer text-white ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((t) => !t)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex list-none justify-center items-start flex-1 flex-col w-[200px]">
            {navLinks.map((navLink, i) => (
              <li
                key={navLink.id}
                className={`font-poppins text-[16px] cursor-pointer text-white ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
