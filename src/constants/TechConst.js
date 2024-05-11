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
import flutter from "../assets/img/skills/flutter.png";
import python from "../assets/img/skills/python.png";
import java from "../assets/img/skills/java.png";
import vb from "../assets/img/skills/vb.png";

const TechArea = {
  LANGUAGE: 0,
  FRONTEND: 1,
  BACKEND: 2,
  DATABASE: 3,
  SMART_CONTRACT: 4,
  MOBILE_APP: 5,
  GENERAL: 6,
};

const TechConst = {
  JAVASCRIPT: {
    text: "JavaScript",
    iconUrl: javascript,
    area: TechArea.LANGUAGE,
  },
  PYTHON: {
    text: "Python",
    iconUrl: python,
    area: TechArea.LANGUAGE,
  },
  JAVA: {
    text: "Java",
    iconUrl: java,
    area: TechArea.LANGUAGE,
  },
  VB: {
    text: "Visual Basic",
    iconUrl: vb,
    area: TechArea.LANGUAGE,
  },
  REACT_NATIVE: {
    text: "React Native",
    iconUrl: react,
    area: TechArea.MOBILE_APP,
  },
  FLUTTER: {
    text: "flutter",
    iconUrl: flutter,
    area: TechArea.MOBILE_APP,
  },
  HTML: {
    text: "HTML",
    iconUrl: html,
    area: TechArea.FRONTEND,
  },
  CSS: {
    text: "CSS",
    iconUrl: css,
    area: TechArea.FRONTEND,
  },
  NODEJS: {
    text: "Node.js",
    iconUrl: node,
    area: TechArea.BACKEND,
  },
  SOLIDITY: {
    text: "Solidity",
    shortName: "solidity",
    iconUrl: solidity,
    area: TechArea.SMART_CONTRACT,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconUrl: ethereum,
    area: TechArea.SMART_CONTRACT,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: web3,
    area: TechArea.GENERAL,
  },
  NPM: {
    text: "NPM",
    iconUrl: npm,
    area: TechArea.GENERAL,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: ganache,
    area: TechArea.SMART_CONTRACT,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: metamask,
    area: TechArea.SMART_CONTRACT,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: react,
    area: TechArea.FRONTEND,
  },
  BOOTSTRAP: {
    text: "Bootstrap",
    iconUrl: bootstrap,
    area: TechArea.FRONTEND,
  },
  EXPRESS: {
    text: "Express.js",
    iconUrl: express,
    area: TechArea.BACKEND,
  },
  SQL: {
    text: "SQL",
    iconUrl: sql,
    area: TechArea.DATABASE,
  },
  POSTGRES: {
    text: "PostgreSQL",
    iconUrl: postgres,
    area: TechArea.DATABASE,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: mongodb,
    area: TechArea.DATABASE,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: mongoose,
    area: TechArea.GENERAL,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: truffle,
    area: TechArea.SMART_CONTRACT,
  },
}



export { TechArea, TechConst }