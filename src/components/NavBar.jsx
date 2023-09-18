import React, { useEffect, useState } from "react";
import logo from '/logo2.svg';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-bgcolor  text-accent" : "text-accent"
        }`}
    >
      <div className="flex items-center justify-between bg-white">
        <div className="mx-7">
          <div>
            <img src={logo} />
          </div>
        </div>
        <div
          className={` ${sticky ? "" : ""
            } text-txtcolor md:block hidden px-100 py-4 font-medium`}
        >
          <ul className="flex items-center gap-4 py-4 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-primary">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${open ? "text-txtcolor" : "text-accent"
            } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-txtcolor absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
            }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-primary"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;