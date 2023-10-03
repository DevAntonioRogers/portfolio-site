"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { useMenuStore } from "@/store/useMenuStore";
import { sidebarMenuLinks } from "@/constants";
import path from "path";
import { set } from "zod";

const SideMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const { isOpen, closeMobileMenu } = useMenuStore();

  const handleLinkClick = (link) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = sidebarMenuLinks.map((link) => document.getElementById(link.sectionId));

    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 100) {
          setActiveLink(sidebarMenuLinks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, "");

    const matchedLink = sidebarMenuLinks.find(
      (link) => cleanedPathname === link.route || (link.route === "/" && cleanedPathname === "")
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <section className={`side-menu border-r ${isOpen ? "max-lg:block" : "max-md:hidden"}`}>
        <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/assets/sidemenu.png" width={100} height={100} alt="antonio" />
            <p className="font-bold text-dark-blue">Antonio Rogers</p>
          </div>

          <div>
            {sidebarMenuLinks.map((link) => {
              const isActive = activeLink === link;

              return (
                <a
                  href={`${link.route}`}
                  key={link.label}
                  className={`relative flex justify-center items-center rounded-lg p-3 ${
                    isActive ? "bg-dark-red text-white" : ""
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <div className="flex items-center flex-col justify-center text-center">
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
              <a href="/" target="_blank" className="social-icon text-white">
                <BsYoutube />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillLinkedin />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillGithub />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <FaDev />
              </a>
            </div>
            <p className="max-lg:hidden">Copyright © 2023 Antonio Rogers. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideMenu;
