const IconFrom = {
  BOXICONS: 1,
  FORTAWESOME : 2,
}

const TechArea = {
  GENERAL: 0,
  FRONTEND: 1,
  BACKEND: 2,
  DATABASE: 3,
  SMART_CONTRACT: 4,
};

const TechType = {  
  LANGUAGE: 1,
  TOOL: 2,
};

const TechConst = {
  JAVASCRIPT: {
    text: "JavaScript",
    iconFrom: IconFrom.BOXICONS,
    iconUrl: "bx bxl-javascript",
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  HTML: {
    text: "HTML",
    iconFrom: IconFrom.BOXICONS,
    iconUrl: "bx bxs-file-html",
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  CSS: {
    text: "CSS",
    iconFrom: IconFrom.BOXICONS,
    iconUrl: "bx bxs-file-css",
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  NODEJS: {
    text: "Node.js",
    iconFrom: IconFrom.BOXICONS,
    iconUrl: "bx bxl-react",
    area: TechArea.BACKEND,
    type: TechType.TOOL,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconFrom: IconFrom.FORTAWESOME,
    iconUrl: "fa-brands fa-ethereum",
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  SOLIDITY: {
    text: "Solidity",
    iconUrl: "",
    area: TechArea.SMART_CONTRACT,
    type: TechType.LANGUAGE,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: "",
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  NPM: {
    text: "NPM",
    iconUrl: "",
    area: TechArea.GENERAL,
    type: TechType.TOOL,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: "",
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: "",
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: "",
    area: TechArea.FRONTEND,
    type: TechType.TOOL,
  },
  REACTBOOTSTRAP: {
    text: "React-Bootstrap",
    iconUrl: "",
    area: TechArea.FRONTEND,
    type: TechType.TOOL,
  },
  EXPRESS: {
    text: "Express",
    iconUrl: "",
    area: TechArea.BACKEND,
    type: TechType.TOOL,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: "",
    area: TechArea.DATABASE,
    type: TechType.TOOL,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: "",
    area: TechArea.DATABASE,
    type: TechType.TOOL,
  },
  JQUERY: {
    text: "jQuery",
    iconUrl: "",
    area: TechArea.FRONTEND,
    type: TechType.TOOL,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: "",
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
}



export { TechArea, TechConst, IconFrom }