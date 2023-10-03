"use client";
import { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const TopButton = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolling ? "fixed bottom-[0.5rem] right-[0.7rem] z-50" : "hidden"}>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#d90429" offset="0%" />
          <stop stopColor="#ef233c" offset="100%" />
        </linearGradient>
      </svg>

      <a href="#home">
        <BsFillArrowUpSquareFill size={40} style={{ fill: "url(#gradient" }} />
      </a>
    </div>
  );
};

export default TopButton;
