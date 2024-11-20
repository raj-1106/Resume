import React from "react";
import "../App.css";

const Projects = () => {
  const projectList = [
    {
      name: "Decentralized File Storage",
      description:
        "Integrated Web3 storage solutions for reliable and tamper-proof data storage in a decentralized network.",
      link: "https://github.com/raj-1106/Decentralized_FileStorage",
    },
    {
      name: "PINFT",
      description:
        "Enabled users to represent verified attributes, like qualifications, personal achievements, and social media profiles within their NFTs.",
      link: "https://github.com/raj-1106/PINfts",
    },
    {
      name: "DEX",
      description:
        "Implemented secure token swaps and liquidity provision, ensuring seamless transactions for end-users.",
      link: "https://github.com/raj-1106/DEX",
    },
    {
      name: "Recipe.AI",
      description:
        "Integrated natural language processing (NLP) to interpret ingredient lists and suggest relevant recipes.",
      link: "https://github.com/raj-1106/Food_bot",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <p className="description">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;