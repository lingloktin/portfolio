import projImgEthToDo from "../assets/img/project_eth_to_do.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import techTools from "./techTools";


const projectsData = [
  {
    title: "BlockChain To-Do List",
    description: "Learning Blockchain",
    imgUrl: projImgEthToDo,
    tech: {
      "Smart Contract Development": [techTools.ETHEREUM, techTools.SOLIDITY, techTools.TRUFFLE, techTools.GANACHE],
      "Frontend Development": [techTools.HTML, techTools.CSS, techTools.JAVASCRIPT],
      "Backend Development": [techTools.NODEJS],
    },
    githubUrl: "https://github.com/lingloktin/eth-todo-list",
  },
  {
    title: "Simple Backend Project",
    description: "Learning MongoDB and ExpressJS",
    imgUrl: projImg2,
    tech: {
      "Backend Development": [techTools.NODEJS, techTools.EXPRESS, techTools.MONGOOSE],
      "Database": [techTools.MONGODB]
    },
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    tech: {
      "Smart Contract Development": [techTools.ETHEREUM, techTools.SOLIDITY, techTools.TRUFFLE, techTools.GANACHE],
      "Frontend Development": [techTools.HTML, techTools.CSS, techTools.JAVASCRIPT],
      "Backend Development": [techTools.NODEJS],
    },
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImgEthToDo,
    tech: {
      "Smart Contract Development": [techTools.ETHEREUM, techTools.SOLIDITY, techTools.TRUFFLE, techTools.GANACHE],
      "Frontend Development": [techTools.HTML, techTools.CSS, techTools.JAVASCRIPT],
      "Backend Development": [techTools.NODEJS],
    },
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    tech: {
      "Smart Contract Development": [techTools.ETHEREUM, techTools.SOLIDITY, techTools.TRUFFLE, techTools.GANACHE],
      "Frontend Development": [techTools.HTML, techTools.CSS, techTools.JAVASCRIPT],
      "Backend Development": [techTools.NODEJS],
    },
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    tech: {
      "Smart Contract Development": [techTools.ETHEREUM, techTools.SOLIDITY, techTools.TRUFFLE, techTools.GANACHE],
      "Frontend Development": [techTools.HTML, techTools.CSS, techTools.JAVASCRIPT],
      "Backend Development": [techTools.NODEJS],
    },
    githubUrl: "",
  },
];

export default projectsData;