import { AiFillGithub, AiFillYoutube, AiFillEye } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ name, githubUrl, image, youtube, deployed, youtubeUrl, projectUrl }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg"
    >
      <img src={image} alt={`${name} Image`} className="w-full h-auto mb-2 rounded" />
      <h3>{name}</h3>
      <div className="flex gap-2 items-center w-full">
        <a href={githubUrl} target="_blank" className="text-dark-blue p-1 rounded-full text-xl">
          <Image src="/assets/git.svg.png" width={20} height={20} alt="github" />
        </a>
        {youtube ? (
          <a href={youtubeUrl} target="_blank" className="text-dark-blue hover:underline text-2xl">
            <AiFillYoutube />
          </a>
        ) : null}
        {deployed ? (
          <a href={projectUrl} target="_blank" className="text-dark-blue hover:underline text-2xl">
            <AiFillEye />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
