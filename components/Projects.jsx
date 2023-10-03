"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectFilter from "../components/ProjectFilter";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <div className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="projects">
      <div className="max-w-[1250px] m-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Projects
          </p>
        </div>
        <ProjectFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
                youtube={project.youtube}
                deployed={project.deployed}
                youtubeUrl={project.youtubeUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button
              className="bg-dark-blue hover:bg-dark-blue/75 py-2 px-4 text-white rounded-lg"
              onClick={loadMoreProjects}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
