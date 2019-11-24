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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, delectus beatae soluta facere ut amet quam! Quas recusandae maiores nostrum deserunt molestiae facere! Iusto numquam quos officia ipsam officiis."
  },
  {
    company: "Wopify",
    role: "Fullstack development",
    period: ["Jan 2018", "Jul 2019"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, delectus beatae soluta facere ut amet quam! Quas recusandae maiores nostrum deserunt molestiae facere! Iusto numquam quos officia ipsam officiis."
  },
  {
    company: "Albin Groen",
    role: "Freelance design",
    period: ["Jun 2017", "Dec 2017"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et, delectus beatae soluta facere ut amet quam! Quas recusandae maiores nostrum deserunt molestiae facere! Iusto numquam quos officia ipsam officiis."
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
          lede="My name is Albin. I'm passionate about the web and design. I work at a company called <a href='https://dooer.com' className='text-blue-600' target='_blank' rel='noopener noreferrer'>Dooer</a> as a web developer. On my spare time I work on side projects, work out and attend conferences and meetups."
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
          lede="My name is Albin. I'm passionate about the web and design. I work at a company called <a href='https://dooer.com' className='text-blue-600' target='_blank' rel='noopener noreferrer'>Dooer</a> as a web developer. On my spare time I work on side projects, work out and attend conferences and meetups."
          parseHTML
          extra={
            <div className="mt-16 max-w-4xl">
              {projects.map((project: any, i: number) => (
                <div
                  className={`my-32 flex justify-between ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div
                    className="bg-center bg-cover rounded"
                    style={{
                      backgroundImage: `url(${project.imageURL})`,
                      height: "300px",
                      width: "600px"
                    }}
                  />
                  <div className={`w-1/2 ${i % 2 === 0 ? "pl-12" : "pr-12"}`}>
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
