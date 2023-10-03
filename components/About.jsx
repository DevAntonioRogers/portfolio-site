const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            About Me
          </p>
        </div>

        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-[20px] leadiing-10">
            I'm a dedicated Full Stack Developer with a real passion for coding. Since writing my first line of code in
            2022, I've been diving deeper every day. I've shared my journey on YouTube with over 250 videos and have
            completed more than 50 projects. I'm always eager to learn more and improve my skills.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-full">
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">900+</h3>
                <span className="uppercase">Youtube Subscribers</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">50+</h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">2+</h3>
                <span className="uppercase">Years of Experience</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
