import { useState, useEffect } from "react";
import "./index.scss";
import Spline from "@splinetool/react-spline";
import Experience from "../Experience";
import ProjectCard from "../Card";
import sharingLink from "../../assets/sharingLink.png";
import portfolio from "../../assets/portfolio.png";
import FadeInOnScroll from "../component/FadeInOnScroll";

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const projectList = [
    {
      image: sharingLink,
      title: "Sharing Link",
      description:
        "A web application that allows users to generate and share shortened URLs. Built with React and TailwindCSS for a sleek and responsive design.",
      technologies: ["Html", "TailwindCSS", "Css", "JavaScript"],
      demoLink: "https://your-portfolio.vercel.app",
      codeLink: "https://github.com/ngh-duy/sharing-link",
    },
    {
      image: portfolio,
      title: "Portfolio",
      description:
        "My personal portfolio website showcasing my projects, skills, and experience. Designed with React, TailwindCSS, and SCSS for a modern developer profile.",
      technologies: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Scss",
      ],
      demoLink: "https://your-todo.vercel.app",
      codeLink: "https://github.com/ngh-duy/Portfolio",
    },
  ];

  // Handle Spline loading
  const handleSplineLoad = () => {
    setSplineLoaded(true);
    // Delay showing other content after Spline loads
    setTimeout(() => {
      setShowContent(true);
    }, 500); // 500ms delay after Spline loads
  };

  // Alternative: Auto show content after a timeout if Spline takes too long
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Show content after 3 seconds regardless

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      {/* introduce */}
      <section className="introduce grid md:grid-cols-2 grid-cols-1 gap-4">
        <div 
          className={`text-content transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl font-bold font-[Libertinus]">Nguyễn Duy</h1>
          <h2 className="text-2xl font-medium font-[Regular]">
            Intern Frontend Developer
          </h2>
          <p>
            " Coding is my medium to shape better digital worlds — practical,
            beautiful, and built to make a difference."
          </p>
          <div className="nav grid grid-rows-3 gap-4">
            <a href="#about">
              <span>About</span>
            </a>
            <a href="#experience">
              <span>Experience</span>
            </a>
            <a href="#project">
              <span>Project</span>
            </a>
          </div>
          <div className="social flex gap-4 mt-4">
            <a href="" className="text-4xl hover:text-blue-800">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className="text-4xl hover:text-blue-800">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="pt-6">
            <button 
              type="button" 
              className="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Link to CV
            </button>
          </div>
        </div>

        {/* Robot - Always visible, loads first */}
        <div className="robot md:relative absolute top-78 left-1/2  md:top-0 md:left-0 ">
          {/* Loading spinner while Spline loads */}
          {!splineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
            </div>
          )}
          
          <Spline 
            scene="https://prod.spline.design/qVNs0lRbz-VZQMn6/scene.splinecode"
            onLoad={handleSplineLoad}
            className={`transition-opacity duration-1000 ${
              splineLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <button
            className={`absolute bottom-5 text-md text-white rounded-4xl right-5 z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 transition-all duration-1000 ${
              splineLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            type="button"
          >
            Hi, I am developer.
          </button>
        </div>
      </section>

      <div className="bg-image fixed inset-0 -z-30"></div>

      {/* Rest of content - Shows after Spline loads */}
      <div 
        className={`transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* about */}
        <FadeInOnScroll delay={showContent ? 0.2 : 999}>
          <section id='about' className="about py-16">
            <br />
            <h2 className="text-4xl font-bold text-center my-8">About Me</h2>
            <p className="text-lg text-center mx-auto max-w-2xl">
              I am a passionate Frontend Developer with a keen interest in
              creating dynamic and responsive web applications. My journey in
              coding has equipped me with the skills to build user-friendly
              interfaces and enhance user experiences.
            </p>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll delay={showContent ? 0.3 : 999}>
          <section id='experience' className="experience py-16">
            <h2 className="text-4xl font-bold text-center my-8">Experience</h2>
            <p className="text-lg text-center mx-auto max-w-2xl">
              I have worked on various projects that have honed my skills in HTML,
              CSS, and JavaScript. My experience includes collaborating with teams
              to deliver high-quality web solutions.
            </p>
            <div>
              <Experience />
            </div>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll delay={showContent ? 0.4 : 999}>
          <section id='project' className="projects md:px-16 pb-6 text-white">
            <h2 className="text-[rgb(2,124,224)] title text-4xl font-bold text-center my-8">Projects</h2>
            <p className="text-lg text-center mx-auto max-w-2xl mb-12">
              Here are some of the projects I've worked on recently, showcasing my
              frontend skills in React, TailwindCSS, and JavaScript.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-4 px-2 justify-center">
              {projectList.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </FadeInOnScroll>
      </div>
    </>
  );
}