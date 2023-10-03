"use client";

import { projects } from "@/constants/projects";
import { useEffect } from "react";

const ProjectFilter = ({ setFiltered, activeCategory, setActiveCategory }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) => project.category?.includes(activeCategory));
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <>
      <div className="flex gap-5 my-10">
        <button
          className={activeCategory == "all" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : null}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          className={activeCategory == "fs" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : null}
          onClick={() => setActiveCategory("fs")}
        >
          Full Stack
        </button>
        <button
          className={activeCategory == "react" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : null}
          onClick={() => setActiveCategory("react")}
        >
          React
        </button>
        <button
          className={activeCategory == "vanilla" ? `bg-dark-blue py-1 px-3 text-white rounded-lg` : null}
          onClick={() => setActiveCategory("vanilla")}
        >
          HTML/CSS/JS
        </button>
      </div>
    </>
  );
};

export default ProjectFilter;
