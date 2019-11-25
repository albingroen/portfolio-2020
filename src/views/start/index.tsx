import * as React from "react";
import axios from "axios";
import Hero from "./components/hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
import TextBlock from "../../components/text-block";
import Footer from "./components/footer";

const jobs = [
  {
    company: "Dooer",
    role: "Web development",
    period: ["Aug 2019", "Ongoing"],
    description:
      "At Dooer I work as a web developer mangaing the development of the marketing website as well as improve the products reaching the end users. The technologies I work with include JavaScript, React, Typeacript and GraphQL."
  },
  {
    company: "Wopify",
    role: "Fullstack development",
    period: ["Jan 2018", "Jul 2019"],
    description:
      "At Wopify I worked as a full stack web developer with JavaScript, React, Node and MongoDB. I worked on redesigning and rebuilding the entire Wopify for Business recruiting platform from the ground up and enhancing the product."
  },
  {
    company: "Albin Groen",
    role: "Freelance design",
    period: ["Jun 2017", "Dec 2017"],
    description:
      "As a freelance product designer I worked on building a design for a up and coming app called Loovia. I worked on everything from the wireframing to the brand design and prototyping and manage to deliver a complete package."
  }
];

export default class Start extends React.Component<
  {},
  { projects: any; ghProjects: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: [],
      ghProjects: []
    };
  }

  componentDidMount() {
    axios
      .get("https://albingroen.tech/data")
      .then((res: any) => this.setState({ projects: res.data.projects }));

    axios
      .get("https://api.github.com/users/albingroen/repos")
      .then(res => this.setState({ ghProjects: res.data }));
  }

  render() {
    const { projects, ghProjects } = this.state;

    return (
      <div>
        <Hero />
        <TextBlock
          number="01."
          heading="About me"
          lede="My name is Albin. I'm passionate about the web and design. I work at a company called <a href='https://dooer.com' className='text-blue-600' target='_blank' rel='noopener noreferrer'>Dooer</a> as a web developer. On my spare time I work on side projects, work out and attend conferences and meetups."
          parseHTML
        />
        <TextBlock
          number="02."
          heading="Where I've worked"
          lede="I've worked as everything from a freelance product designer to a full stack web developer. I've worked as a freelancer, startup and scaleup learning many different area of software development and in building a business."
          parseHTML
          extra={
            <div className="mt-16 max-w-4xl border-b-2 border-gray-700 border-dashed">
              {jobs.map(job => (
                <div className="p-8 border-dashed border-2 border-gray-700 border-b-0">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl">
                      <span className="font-light">{job.role}</span> @
                      {job.company}
                    </h3>

                    <h3 className="text-white">
                      {job.period[0]} - {job.period[1]}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-4">{job.description}</p>
                </div>
              ))}
            </div>
          }
        />
        <TextBlock
          number="03."
          heading="Projects"
          lede="I've worked on quite a lof of different projects and products. I've been working a whole lot with frontend development and been managing the frontend part of many different projects."
          parseHTML
          extra={
            <div className="mt-16 max-w-4xl">
              {projects.map((project: any, i: number) => (
                <div
                  className={`mt-32 flex justify-between flex-col sm:${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } text-center sm:${
                    i % 2 === 0 ? "text-right" : "text-left"
                  } md`}
                >
                  <img
                    className="rounded mb-8 sm:mb-0 max-w-xs sm:max-w-md"
                    src={project.imageURL}
                    alt="Project"
                  />
                  <div
                    className={`w-full sm:w-1/2 sm:${
                      i % 2 === 0 ? "pl-12" : "pr-12"
                    }`}
                  >
                    <h4 className="text-white font-mono mb-2 uppercase text-xs tracking-widest">
                      {project.type}
                    </h4>
                    <h3 className="text-white text-2xl">{project.title}</h3>
                    <p className="text-gray-600 mt-4">{project.description}</p>
                    <div className="mt-8 opacity-75">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="text-white text-2xl mr-6">
                          <FontAwesomeIcon icon={faGithub} />
                        </i>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="text-white text-2xl">
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        />
        <TextBlock
          number="04."
          heading="Other projects"
          parseHTML
          variant="center"
          extra={
            <div className="mt-16 projects">
              {ghProjects
                .filter((project: any) => !project.fork)
                .map((project: any) => (
                  <div className="bg-gray-800 rounded p-6 relative w-auto">
                    <i className="text-white mb-2 block text-2xl">
                      <FontAwesomeIcon icon={faFolderOpen} />
                    </i>
                    <h3 className="text-white text-xl">{project.name}</h3>
                    <p className="text-white opacity-75 mt-2 mb-12 font-light tracking-wider">
                      {project.description}
                    </p>
                    <div className="absolute w-full bottom-0 left-0 p-6 flex justify-between items-center">
                      <h3 className="text-white text-sm opacity-50">
                        {project.language}
                      </h3>
                      <div>
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="text-lg text-white opacity-50 hover:opacity-100 transition">
                            <FontAwesomeIcon icon={faGithub} />
                          </i>
                        </a>
                        {project.homepage && (
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="text-lg opacity-50 text-white hover:opacity-100 transition ml-4">
                              <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          }
        />
        <Footer />
      </div>
    );
  }
}
