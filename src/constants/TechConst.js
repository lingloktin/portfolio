import techIconJavascript from "../assets/img/skills/javascript.png";
import techIconHtml from "../assets/img/skills/html.png";
import techIconCss from "../assets/img/skills/css.png";
import techIconReact from "../assets/img/skills/react.png";
import techIconBootstrap from "../assets/img/skills/bootstrap.png";
import techIconNode from "../assets/img/skills/node.png";
import techIconEthereum from "../assets/img/skills/ethereum.png";
import techIconWeb3 from "../assets/img/skills/web3.png";
import techIconNpm from "../assets/img/skills/npm.png";
import techIconGanache from "../assets/img/skills/ganache.png";
import techIconMetamask from "../assets/img/skills/metamask.png";
import techIconTruffle from "../assets/img/skills/truffle.png";
import techIconMongodb from "../assets/img/skills/mongodb.png";
import techIconMongoose from "../assets/img/skills/mongoose.png";
import techIconPostgres from "../assets/img/skills/postgres.png";
import techIconSql from "../assets/img/skills/sql.png";
import techIconSolidity from "../assets/img/skills/solidity.png";
import techIconExpress from "../assets/img/skills/express.png";
import techIconFlutter from "../assets/img/skills/flutter.png";
import techIconPython from "../assets/img/skills/python.png";
import techIconJava from "../assets/img/skills/java.png";
import techIconVb from "../assets/img/skills/vb.png";

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
    iconUrl: techIconJavascript,
    area: TechArea.LANGUAGE,
  },
  PYTHON: {
    text: "Python",
    iconUrl: techIconPython,
    area: TechArea.LANGUAGE,
  },
  JAVA: {
    text: "Java",
    iconUrl: techIconJava,
    area: TechArea.LANGUAGE,
  },
  VB: {
    text: "Visual Basic",
    iconUrl: techIconVb,
    area: TechArea.LANGUAGE,
  },
  REACT_NATIVE: {
    text: "React Native",
    iconUrl: techIconReact,
    area: TechArea.MOBILE_APP,
  },
  FLUTTER: {
    text: "flutter",
    iconUrl: techIconFlutter,
    area: TechArea.MOBILE_APP,
  },
  HTML: {
    text: "HTML",
    iconUrl: techIconHtml,
    area: TechArea.FRONTEND,
  },
  CSS: {
    text: "CSS",
    iconUrl: techIconCss,
    area: TechArea.FRONTEND,
  },
  NODEJS: {
    text: "Node.js",
    iconUrl: techIconNode,
    area: TechArea.BACKEND,
  },
  SOLIDITY: {
    text: "Solidity",
    shortName: "solidity",
    iconUrl: techIconSolidity,
    area: TechArea.SMART_CONTRACT,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconUrl: techIconEthereum,
    area: TechArea.SMART_CONTRACT,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: techIconWeb3,
    area: TechArea.GENERAL,
  },
  NPM: {
    text: "NPM",
    iconUrl: techIconNpm,
    area: TechArea.GENERAL,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: techIconGanache,
    area: TechArea.SMART_CONTRACT,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: techIconMetamask,
    area: TechArea.SMART_CONTRACT,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: techIconReact,
    area: TechArea.FRONTEND,
  },
  BOOTSTRAP: {
    text: "Bootstrap",
    iconUrl: techIconBootstrap,
    area: TechArea.FRONTEND,
  },
  EXPRESS: {
    text: "Express.js",
    iconUrl: techIconExpress,
    area: TechArea.BACKEND,
  },
  SQL: {
    text: "SQL",
    iconUrl: techIconSql,
    area: TechArea.DATABASE,
  },
  POSTGRES: {
    text: "PostgreSQL",
    iconUrl: techIconPostgres,
    area: TechArea.DATABASE,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: techIconMongodb,
    area: TechArea.DATABASE,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: techIconMongoose,
    area: TechArea.GENERAL,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: techIconTruffle,
    area: TechArea.SMART_CONTRACT,
  },
  ASP: {
    text: "ASP.NET",
    iconUrl: "",
    area: TechArea.GENERAL,
  },
}



export { TechArea, TechConst }