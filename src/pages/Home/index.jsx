import { useState, useEffect, useRef } from "react";
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
  const [renderSpline, setRenderSpline] = useState(false);

  const robotRef = useRef(null);

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

  // Spline loaded handler
  const handleSplineLoad = () => {
    setSplineLoaded(true);
    setTimeout(() => setShowContent(true), 800);
  };

  // Fallback if Spline takes too long
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver để render Spline khi scroll tới robotRef
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRenderSpline(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (robotRef.current) {
      observer.observe(robotRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* introduce */}
      <section className="introduce min-h-screen flex flex-col md:flex-row md:grid md:grid-cols-2 gap-4 items-center">
        <div
          className={`text-content order-2 md:order-1 w-full transition-all duration-1000 ease-out ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-[Libertinus] mb-2">
            Nguyễn Duy
          </h1>
          <h2 className="text-xl md:text-2xl font-medium font-[Regular] mb-4">
            Intern Frontend Developer
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            " Coding is my medium to shape better digital worlds — practical,
            beautiful, and built to make a difference."
          </p>
          <div className="nav grid grid-rows-3 gap-3 mb-6 max-w-xs">
            <a href="#about" className="hover:text-purple-400 transition-colors">
              <span>About</span>
            </a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">
              <span>Experience</span>
            </a>
            <a href="#project" className="hover:text-purple-400 transition-colors">
              <span>Project</span>
            </a>
          </div>
          <div className="social flex gap-4 mb-6">
            <a href="" className="text-3xl md:text-4xl hover:text-blue-400 transition-colors duration-300">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className="text-3xl md:text-4xl hover:text-blue-400 transition-colors duration-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div>
            <button
              type="button"
              className="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-300"
            >
              Link to CV
            </button>
          </div>
        </div>

        {/* Robot - Spline chỉ render khi scroll đến */}
        {/* <div
          ref={robotRef}
          className="robot order-1 md:order-2 relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {!splineLoaded && renderSpline && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 md:h-20 md:w-20 border-4 border-purple-200 border-t-purple-500 mb-4"></div>
                <p className="text-gray-400 text-sm">Loading 3D Model...</p>
              </div>
            </div>
          )}

          {renderSpline && (
            <Spline
              scene="https://prod.spline.design/qVNs0lRbz-VZQMn6/scene.splinecode"
              onLoad={handleSplineLoad}
              className={`w-full h-full transition-all duration-1000 ${
                splineLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          )}

          {renderSpline && (
            <button
              className={`absolute bottom-4 right-4 md:bottom-5 md:right-5 text-sm md:text-base text-white rounded-2xl z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 md:px-6 md:py-3 transition-all duration-1000 hover:scale-105 hover:shadow-xl ${
                splineLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              type="button"
            >
              Hi, I am developer.
            </button>
          )}
        </div> */}
      </section>

      {/* Background image */}
      <div className="bg-image fixed inset-0 -z-30"></div>

      {/* Content sau khi Spline đã render */}
      <div
        className={`transition-all duration-1500 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* About section */}
        <FadeInOnScroll delay={showContent ? 0.2 : 999}>
          <section id="about" className="about py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center my-8">About Me</h2>
            <p className="text-base md:text-lg text-center mx-auto max-w-2xl leading-relaxed">
               I am a passionate Frontend Developer with a keen interest in
              creating dynamic and responsive web applications. My journey in
              coding has equipped me with the skills to build user-friendly
              interfaces and enhance user experiences.
            </p>
          </section>
        </FadeInOnScroll>

        {/* Experience section */}
        <FadeInOnScroll delay={showContent ? 0.4 : 999}>
          <section id="experience" className="experience py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center my-8">Experience</h2>
            <p className="text-base md:text-lg text-center mx-auto max-w-2xl mb-8 leading-relaxed">
               I have worked on various projects that have honed my skills in HTML,
              CSS, and JavaScript. My experience includes collaborating with teams
              to deliver high-quality web solutions.
            </p>
            <div>
              <Experience />
            </div>
          </section>
        </FadeInOnScroll>

        {/* Projects section */}
        <FadeInOnScroll delay={showContent ? 0.6 : 999}>
          <section id="project" className="projects md:px-16 pb-6 px-4 text-white">
            <h2 className="text-[rgb(2,124,224)] title text-3xl md:text-4xl font-bold text-center my-8">
              Projects
            </h2>
            <p className="text-base md:text-lg text-center mx-auto max-w-2xl mb-12 leading-relaxed">
              Here are some of the projects I've worked on recently, showcasing my
              frontend skills in React, TailwindCSS, and JavaScript.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-4 px-2 justify-center">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>
        </FadeInOnScroll>
      </div>
    </>
  );
}
