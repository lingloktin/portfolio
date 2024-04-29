import projImgEthToDo from "../assets/img/project_eth_to_do.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import techTools from "./techTools";

const projectsData = [
  {
    title: "BlockChain To-Do List",
    description: "Learning Blockchain",
    imgUrl: projImgEthToDo,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity, techTools.web3js, techTools.nodejs, techTools.javascript],
    githubUrl: "https://github.com/lingloktin/eth-todo-list",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity,],
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity,],
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImgEthToDo,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity,],
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity,],
    githubUrl: "",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    tech: [techTools.ethereum, techTools.truffle, techTools.solidity,],
    githubUrl: "",
  },
];

export default projectsData;