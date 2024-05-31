import projImgEthToDo from "../assets/img/projects/project_eth_to_do.jpg";
import projImgCRUD from "../assets/img/projects/project_crud.jpg";
import projImgPortfolio from "../assets/img/projects/project_portfolio.jpeg";
import projImg2 from "../assets/img/projects/project-img2.png";
import projImg3 from "../assets/img/projects/project-img3.png";
import { TechConst } from "./TechConst";

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
      "Smart Contract Development": [TechConst.ETHEREUM.text, TechConst.SOLIDITY.text, TechConst.TRUFFLE.text, TechConst.GANACHE.text],
      "Frontend Development": [TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
      "Backend Development": [TechConst.NODEJS.text],
    },
    githubUrl: "https://github.com/lingloktin/eth-todo-list",
    type: projectTypes.SIDE_PROJECT,
  },
  {
    title: "Simple CRUD API",
    description: "Learning MongoDB and ExpressJS",
    imgUrl: projImgCRUD,
    tech: {
      "Backend Development": [TechConst.NODEJS.text, TechConst.EXPRESS.text, TechConst.MONGOOSE.text],
      "Database": [TechConst.MONGODB.text]
    },
    githubUrl: "https://github.com/lingloktin/simple-crud",
    type: projectTypes.SIDE_PROJECT,
  },
  {
    title: "Personal Portfolio",
    description: "Utilizing ReactBootstrap",
    imgUrl: projImgPortfolio,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.BOOTSTRAP.text, TechConst.HTML.text, TechConst.CSS.text],
    },
    githubUrl: "https://github.com/lingloktin/portfolio",
    type: projectTypes.SIDE_PROJECT,
  },
  {
    title: "FYP Server",
    description: "Design & Development",
    imgUrl: projImgCRUD,
    tech: {
      "Smart Contract Development": [TechConst.ETHEREUM.text, TechConst.SOLIDITY.text, TechConst.TRUFFLE.text, TechConst.GANACHE.text],
      "Backend Development": [TechConst.NODEJS.text, TechConst.EXPRESS.text, TechConst.WEB3JS.text],
      "Database": [TechConst.POSTGRES.text]
    },
    githubUrl: "https://bitbucket.org/derek_szehoyin/fyp_server/src/main/",
    type: projectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "FYP React App",
    description: "Design & Development",
    imgUrl: projImg2,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
    },
    githubUrl: "https://bitbucket.org/derek_szehoyin/reactapp/src/master/",
    type: projectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "Doctor Portal",
    description: "Maintenance & Development",
    imgUrl: projImg3,
    tech: {
      "Mobile App Development": [TechConst.REACT_NATIVE],
    },
    githubUrl: "",
    type: projectTypes.COMPANY_PROJECT,
  },
  {
    title: "STH Website",
    description: "Maintenance & Development",
    imgUrl: projImg3,
    tech: {
      "Frontend Development": [TechConst.ASP.text],
    },
    githubUrl: "",
    type: projectTypes.COMPANY_PROJECT,
  },
];

export { projectTypes, projectsData };