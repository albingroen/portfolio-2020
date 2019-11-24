import * as React from "react";
import axios from "axios";
import Hero from "./components/hero";
import TextBlock from "../../components/text-block";

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

export default class Start extends React.Component<{}, { projects: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("https://albingroen.tech/data")
      .then((res: any) => this.setState({ projects: res.data.projects }));
  }

  render() {
    const { projects } = this.state;

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
                  }`}
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
                    <h3
                      className={`text-white text-xl font-mono ${
                        i % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-gray-600 mt-4 ${
                        i % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </div>
    );
  }
}
