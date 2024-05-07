import "boxicons/css/boxicons.min.css";

const TYPES = {
  FRONTEND: 1,
  BACKEND: 2,
  SMART_CONTRACT: 3,
  FRAMEWORK: 4,
  LIBRARY: 5,
  DATABASE: 6,
};

const TechConst = {
  JAVASCRIPT: {
    text: "JavaScript",
    iconUrl: "bx bxl-javascript",
    type: TYPES.FRONTEND,
  },
  HTML: {
    text: "HTML",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  CSS: {
    text: "CSS",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  NODEJS: {
    text: "Node.js",
    iconUrl: "",
    type: TYPES.BACKEND,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconUrl: "",
    type: TYPES.SMART_CONTRACT,
  },
  SOLIDITY: {
    text: "Solidity",
    iconUrl: "",
    type: TYPES.SMART_CONTRACT,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: "",
    type: TYPES.SMART_CONTRACT,
  },
  NPM: {
    text: "NPM",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: "",
    type: TYPES.SMART_CONTRACT,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  REACTBOOTSTRAP: {
    text: "React-Bootstrap",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  EXPRESS: {
    text: "Express",
    iconUrl: "",
    type: TYPES.BACKEND,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: "",
    type: TYPES.DATABASE,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: "",
    type: TYPES.DATABASE,
  },
  JQUERY: {
    text: "jQuery",
    iconUrl: "",
    type: TYPES.FRONTEND,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: "",
    type: TYPES.SMART_CONTRACT,
  },
}



export default TechConst