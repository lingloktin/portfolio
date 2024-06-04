import ProjImgEthToDo from "../assets/img/projects/project_eth_to_do.jpg";
import ProjImgCRUD from "../assets/img/projects/project_crud.jpg";
import ProjImgPortfolio from "../assets/img/projects/project_portfolio.jpeg";
import ProjImgSTH from "../assets/img/projects/project_sth.jpeg";
import ProjImgFypReactApp from "../assets/img/projects/project_fyp_reactapp.jpeg";
import ProjImgDoctorPortal from "../assets/img/projects/project_doctor_portal.jpg";
import { TechConst } from "./TechConst";

const ProjectTypes = {
  SIDE_PROJECT: 1,
  ACADEMIC_PROJECT: 2,
  COMPANY_PROJECT: 3,
};


const ProjectsData = [
  {
    title: "Personal Portfolio",
    description: "Utilizing ReactBootstrap",
    imgUrl: ProjImgPortfolio,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.BOOTSTRAP.text, TechConst.HTML.text, TechConst.CSS.text],
    },
    hasGitLink: true,
    githubUrl: "https://github.com/lingloktin/portfolio",
    hasExternalLink: false,
    externalUrl: "",
    type: ProjectTypes.SIDE_PROJECT,
  },
  {
    title: "BlockChain To-Do List",
    description: "Learning Blockchain",
    imgUrl: ProjImgEthToDo,
    tech: {
      "Smart Contract Development": [TechConst.ETHEREUM.text, TechConst.SOLIDITY.text, TechConst.TRUFFLE.text, TechConst.GANACHE.text],
      "Frontend Development": [TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
      "Backend Development": [TechConst.NODEJS.text],
    },
    hasGitLink: true,
    githubUrl: "https://github.com/lingloktin/eth-todo-list",
    hasExternalLink: false,
    externalUrl: "",
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
    hasGitLink: true,
    githubUrl: "https://github.com/lingloktin/simple-crud",
    hasExternalLink: false,
    externalUrl: "",
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
    hasGitLink: true,
    githubUrl: "https://bitbucket.org/derek_szehoyin/fyp_server/src/main/",
    hasExternalLink: false,
    externalUrl: "",
    type: ProjectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "FYP React App",
    description: "Design & Development",
    imgUrl: ProjImgFypReactApp,
    tech: {
      "Frontend Development": [TechConst.REACTJS.text, TechConst.HTML.text, TechConst.CSS.text, TechConst.JAVASCRIPT.text],
    },
    hasGitLink: true,
    githubUrl: "https://bitbucket.org/derek_szehoyin/reactapp/src/master/",
    hasExternalLink: false,
    externalUrl: "",
    type: ProjectTypes.ACADEMIC_PROJECT,
  },
  {
    title: "Doctor Portal",
    description: "Maintenance & Development",
    imgUrl: ProjImgDoctorPortal,
    tech: {
      "Mobile App Development": [TechConst.REACT_NATIVE.text],
    },
    hasGitLink: false,
    githubUrl: "",
    hasExternalLink: false,
    externalUrl: "",
    type: ProjectTypes.COMPANY_PROJECT,
  },
  {
    title: "STH Website",
    description: "Maintenance & Development",
    imgUrl: ProjImgSTH,
    tech: {
      "Frontend Development": [TechConst.ASP.text],
    },
    hasGitLink: false,
    githubUrl: "",
    hasExternalLink: true,
    externalUrl: "https://www.sth.org.hk/index.asp?lang_code=en",
    type: ProjectTypes.COMPANY_PROJECT,
  },
];

export { ProjectTypes, ProjectsData };