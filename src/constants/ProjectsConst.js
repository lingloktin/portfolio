import projImgEthToDo from "../assets/img/project_eth_to_do.jpg";
import projImgCRUD from "../assets/img/project_crud.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import techTools from "./techTools";

const projectTypes = {
  SIDE_PROJECT: 1,
  ACADEMIC_PROJECT: 2,
  COMPANY_PROJECT: 3,
};


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
    type: projectTypes.SIDE_PROJECT,
  },
  {
    title: "Simple CRUD API",
    description: "Learning MongoDB and ExpressJS",
    imgUrl: projImgCRUD,
    tech: {
      "Backend Development": [techTools.NODEJS, techTools.EXPRESS, techTools.MONGOOSE],
      "Database": [techTools.MONGODB]
    },
    githubUrl: "https://github.com/lingloktin/simple-crud",
    type: projectTypes.SIDE_PROJECT,
  },
  {
    title: "Personal Portfolio",
    description: "Design & Development",
    imgUrl: projImg3,
    tech: {
      "Frontend Development": [techTools.REACTJS, techTools.REACTBOOTSTRAP, techTools.HTML, techTools.CSS],
    },
    githubUrl: "https://github.com/lingloktin/portfolio",
    type: projectTypes.SIDE_PROJECT,
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
    type: projectTypes.ACADEMIC_PROJECT,
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
    type: projectTypes.ACADEMIC_PROJECT,
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
    type: projectTypes.COMPANY_PROJECT,
  },
];

export { projectTypes, projectsData };