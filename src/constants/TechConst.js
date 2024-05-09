import javascript from "../assets/img/skills/javascript.png";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import react from "../assets/img/skills/react.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import node from "../assets/img/skills/node.png";
import ethereum from "../assets/img/skills/ethereum.png";
import web3 from "../assets/img/skills/web3.png";
import npm from "../assets/img/skills/npm.png";
import ganache from "../assets/img/skills/ganache.png";
import metamask from "../assets/img/skills/metamask.png";
import truffle from "../assets/img/skills/truffle.png";
import mongodb from "../assets/img/skills/mongodb.png";
import mongoose from "../assets/img/skills/mongoose.png";
import postgres from "../assets/img/skills/postgres.png";
import sql from "../assets/img/skills/sql.png";

import solidity from "../assets/img/skills/solidity.png";
import express from "../assets/img/skills/express.png";


const IconFrom = {
  LOCAL_FILE: 0,
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
    shortName: "js",    
    iconUrl: javascript,
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  HTML: {
    text: "HTML",    
    iconUrl: html,
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  CSS: {
    text: "CSS",    
    iconUrl: css,
    area: TechArea.FRONTEND,
    type: TechType.LANGUAGE,
  },
  NODEJS: {
    text: "Node.js",    
    iconUrl: node,
    area: TechArea.BACKEND,
    type: TechType.TOOL,
  },
  ETHEREUM: {
    text: "Ethereum",    
    iconUrl: ethereum,
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  SOLIDITY: {
    text: "Solidity",
    shortName: "solidity",    
    iconUrl: solidity,
    area: TechArea.SMART_CONTRACT,
    type: TechType.LANGUAGE,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: web3,
    area: TechArea.GENERAL,
    type: TechType.TOOL,
  },
  NPM: {
    text: "NPM",
    iconUrl: npm,
    area: TechArea.GENERAL,
    type: TechType.TOOL,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: ganache,
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: metamask,
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
  REACTJS: {
    text: "React.js",    
    iconUrl: react,
    area: TechArea.FRONTEND,
    type: TechType.TOOL,
  },
  BOOTSTRAP: {
    text: "Bootstrap",    
    iconUrl: bootstrap,
    area: TechArea.FRONTEND,
    type: TechType.TOOL,
  },
  EXPRESS: {
    text: "Express.js",    
    iconUrl: express,
    area: TechArea.BACKEND,
    type: TechType.TOOL,
  },
  MONGODB: {
    text: "MongoDB",    
    iconUrl: mongodb,
    area: TechArea.DATABASE,
    type: TechType.TOOL,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: mongoose,
    area: TechArea.GENERAL,
    type: TechType.TOOL,
  },
  POSTGRES: {
    text: "PostgreSQL",    
    iconUrl: postgres,
    area: TechArea.DATABASE,
    type: TechType.TOOL,
  },
  SQL: {
    text: "SQL",    
    iconUrl: sql,
    area: TechArea.DATABASE,
    type: TechType.TOOL,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: truffle,
    area: TechArea.SMART_CONTRACT,
    type: TechType.TOOL,
  },
}



export { TechArea, TechConst, IconFrom }