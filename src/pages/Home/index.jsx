import "./index.scss"; // Đảm bảo file SCSS nằm cùng thư mục
import Spline from "@splinetool/react-spline";
import Experience from "../Experience";
import ProjectCard from "../Card";
import sharingLink from "../../assets/sharingLink.png";
import portfolio from "../../assets/portfolio.png";
import FadeInOnScroll from "../component/FadeInOnScroll";

export default function Home() {
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
      codeLink: "https://github.com/ngh-duy/sharing-link",
    },
  ];

  return (
    <>
      {/* introduce  */}
      <FadeInOnScroll>
        <section className="introduce grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="text-content">
            <h1 className="text-6xl font-bold font-[Libertinus]">Nguyễn Duy</h1>
            <h2 className="text-2xl font-medium font-[Regular]">
              Intern Forntend Developer
            </h2>
            <p>
              " Coding is my medium to shape better digital worlds — practical,
              beautiful, and built to make a difference."
            </p>
            <div className=" nav grid grid-rows-3 gap-4">
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
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="" className="text-4xl hover:text-blue-800 ">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="pt-6"><button type="button" class="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Link to CV</button></div>
          </div>
          <div className="robot relative">
            <Spline scene="https://prod.spline.design/qVNs0lRbz-VZQMn6/scene.splinecode" />
            <button
              className="absolute bottom-5 text-md text-white rounded-4xl right-5 z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4"
              type="button"
            >
              Hi,I am developer.
            </button>
          </div>
          {/* background  */}
        
        </section>
      </FadeInOnScroll>
  <div className="bg-image fixed inset-0 -z-30"></div>
      {/* about  */}
      <FadeInOnScroll delay={0.2}>
    
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

      <FadeInOnScroll delay={0.3}>
        <section id= 'experience' className="experience py-16">
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
      {/* experience  */}

      <FadeInOnScroll delay={0.3}>
        <section id='project' className="projects md:px-16 pb-6 text-white">
          <h2 className="text-[rgb(2,124,224)] title text-4xl font-bold text-center my-8">Projects</h2>
          <p className="text-lg text-center mx-auto max-w-2xl mb-12">
            Here are some of the projects I’ve worked on recently, showcasing my
            frontend skills in React, TailwindCSS, and JavaScript.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-4 px-2 justify-center">
            {projectList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>{" "}
      </FadeInOnScroll>
      {/* project  */}
    </>
  );
}
