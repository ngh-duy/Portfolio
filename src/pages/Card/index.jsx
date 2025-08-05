
export default function ProjectCard({
  image,
  title,
  description,
  demoLink,
  codeLink,
  technologies,
}) {
  return (
    <a href={codeLink} target="_blank" rel="noopener noreferrer">
       <div  className="max-w-sm h-[450px] hover:cursor-pointer hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)]  hover:shadow-[#9929EA] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-48  object-center object-fill" src={image} alt={title} />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>

        {technologies && (
          <div className="mb-4">
            <ul className="flex flex-wrap gap-2 mt-1">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="px-2 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* <div className="flex space-x-2">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white"
          >
            <img src={eye} width={"25px"} alt="" />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded "
          >
           <img src={github} width={"25px"} alt="" />
          </a>
        </div> */}
      </div>
    </div>
    </a>
  );
}
