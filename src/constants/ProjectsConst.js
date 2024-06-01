import ProjImgEthToDo from "../assets/img/projects/project_eth_to_do.jpg";
import ProjImgCRUD from "../assets/img/projects/project_crud.jpg";
import ProjImgPortfolio from "../assets/img/projects/project_portfolio.jpeg";
import ProjImg2 from "../assets/img/projects/project-img2.png";
import ProjImg3 from "../assets/img/projects/project-img3.png";
import { TechConst } from "./TechConst";

const ProjectTypes = {
  SIDE_PROJECT: 1,
  ACADEMIC_PROJECT: 2,
  COMPANY_PROJECT: 3,
};


const ProjectsData = [
  {
    title: "BlockChain To-Do List",
    description: "Learning Blockchain",
    imgUrl: ProjImgEthToDo,
    tech: {
      "Smart Contract Development": [TechConst.ETHEREUM.text, TechConst.SOLIDITY.text, TechConst.TRUFFLE.text, TechConst.GANACHE.text],
      "Frontend Development": [TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
      "Backend Development": [TechConst.NODEJS.text],
    },
    githubUrl: "https://github.com/lingloktin/eth-todo-list",
    type: ProjectTypes.SIDE_PROJECT,
  },
  {
    title: "Simple CRUD API",
    description: "Learning MongoDB and ExpressJS",
    imgUrl: ProjImgCRUD,
    tech: {
      "Backend Development": [TechConst.NODEJS.text, TechConst.EXPRESS.text, TechConst.MONGOOSE.text],
      "Database": [TechConst.MONGODB.text]
    },
    githubUrl: "https://github.com/lingloktin/simple-crud",
    type: ProjectTypes.SIDE_PROJECT,
  },
  {
    title: "Personal Portfolio",
    description: "Utilizing ReactBootstrap",
    imgUrl: ProjImgPortfolio,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.BOOTSTRAP.text, TechConst.HTML.text, TechConst.CSS.text],
    },
    githubUrl: "https://github.com/lingloktin/portfolio",
    type: ProjectTypes.SIDE_PROJECT,
  },
  {
    title: "FYP Server",
    description: "Design & Development",
    imgUrl: ProjImgCRUD,
    tech: {
      "Smart Contract Development": [TechConst.ETHEREUM.text, TechConst.SOLIDITY.text, TechConst.TRUFFLE.text, TechConst.GANACHE.text],
      "Backend Development": [TechConst.NODEJS.text, TechConst.EXPRESS.text, TechConst.WEB3JS.text],
      "Database": [TechConst.POSTGRES.text]
    },
    githubUrl: "https://bitbucket.org/derek_szehoyin/fyp_server/src/main/",
    type: ProjectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "FYP React App",
    description: "Design & Development",
    imgUrl: ProjImg2,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
    },
    githubUrl: "https://bitbucket.org/derek_szehoyin/reactapp/src/master/",
    type: ProjectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "Doctor Portal",
    description: "Maintenance & Development",
    imgUrl: ProjImg3,
    tech: {
      "Mobile App Development": [TechConst.REACT_NATIVE],
    },
    githubUrl: "",
    type: ProjectTypes.COMPANY_PROJECT,
  },
  {
    title: "STH Website",
    description: "Maintenance & Development",
    imgUrl: ProjImg3,
    tech: {
      "Frontend Development": [TechConst.ASP.text],
    },
    githubUrl: "",
    type: ProjectTypes.COMPANY_PROJECT,
  },
];

export { ProjectTypes, ProjectsData };