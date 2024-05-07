import "boxicons/css/boxicons.min.css";

const TechType = {
  FRONTEND: 1,
  BACKEND: 2,
  DATABASE: 3,
  SMART_CONTRACT: 4,
  FRAMEWORK: 5,
  LIBRARY: 6,
};

const TechConst = {
  JAVASCRIPT: {
    text: "JavaScript",
    iconUrl: "bx bxl-javascript",
    type: TechType.FRONTEND,
  },
  HTML: {
    text: "HTML",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  CSS: {
    text: "CSS",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  NODEJS: {
    text: "Node.js",
    iconUrl: "",
    type: TechType.BACKEND,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconUrl: "",
    type: TechType.SMART_CONTRACT,
  },
  SOLIDITY: {
    text: "Solidity",
    iconUrl: "",
    type: TechType.SMART_CONTRACT,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: "",
    type: TechType.SMART_CONTRACT,
  },
  NPM: {
    text: "NPM",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: "",
    type: TechType.SMART_CONTRACT,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  REACTBOOTSTRAP: {
    text: "React-Bootstrap",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  EXPRESS: {
    text: "Express",
    iconUrl: "",
    type: TechType.BACKEND,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: "",
    type: TechType.DATABASE,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: "",
    type: TechType.DATABASE,
  },
  JQUERY: {
    text: "jQuery",
    iconUrl: "",
    type: TechType.FRONTEND,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: "",
    type: TechType.SMART_CONTRACT,
  },
}



export { TechType, TechConst }