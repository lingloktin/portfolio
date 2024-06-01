import TechIconJavascript from "../assets/img/skills/javascript.png";
import TechIconHtml from "../assets/img/skills/html.png";
import TechIconCss from "../assets/img/skills/css.png";
import TechIconReact from "../assets/img/skills/react.png";
import TechIconBootstrap from "../assets/img/skills/bootstrap.png";
import TechIconNode from "../assets/img/skills/node.png";
import TechIconEthereum from "../assets/img/skills/ethereum.png";
import TechIconWeb3 from "../assets/img/skills/web3.png";
import TechIconNpm from "../assets/img/skills/npm.png";
import TechIconGanache from "../assets/img/skills/ganache.png";
import TechIconMetamask from "../assets/img/skills/metamask.png";
import TechIconTruffle from "../assets/img/skills/truffle.png";
import TechIconMongodb from "../assets/img/skills/mongodb.png";
import TechIconMongoose from "../assets/img/skills/mongoose.png";
import TechIconPostgres from "../assets/img/skills/postgres.png";
import TechIconSql from "../assets/img/skills/sql.png";
import TechIconSolidity from "../assets/img/skills/solidity.png";
import TechIconExpress from "../assets/img/skills/express.png";
import TechIconFlutter from "../assets/img/skills/flutter.png";
import TechIconPython from "../assets/img/skills/python.png";
import TechIconJava from "../assets/img/skills/java.png";
import TechIconVb from "../assets/img/skills/vb.png";

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
    iconUrl: TechIconJavascript,
    area: TechArea.LANGUAGE,
  },
  PYTHON: {
    text: "Python",
    iconUrl: TechIconPython,
    area: TechArea.LANGUAGE,
  },
  JAVA: {
    text: "Java",
    iconUrl: TechIconJava,
    area: TechArea.LANGUAGE,
  },
  VB: {
    text: "Visual Basic",
    iconUrl: TechIconVb,
    area: TechArea.LANGUAGE,
  },
  REACT_NATIVE: {
    text: "React Native",
    iconUrl: TechIconReact,
    area: TechArea.MOBILE_APP,
  },
  FLUTTER: {
    text: "flutter",
    iconUrl: TechIconFlutter,
    area: TechArea.MOBILE_APP,
  },
  HTML: {
    text: "HTML",
    iconUrl: TechIconHtml,
    area: TechArea.FRONTEND,
  },
  CSS: {
    text: "CSS",
    iconUrl: TechIconCss,
    area: TechArea.FRONTEND,
  },
  NODEJS: {
    text: "Node.js",
    iconUrl: TechIconNode,
    area: TechArea.BACKEND,
  },
  SOLIDITY: {
    text: "Solidity",
    shortName: "solidity",
    iconUrl: TechIconSolidity,
    area: TechArea.SMART_CONTRACT,
  },
  ETHEREUM: {
    text: "Ethereum",
    iconUrl: TechIconEthereum,
    area: TechArea.SMART_CONTRACT,
  },
  WEB3JS: {
    text: "Web3.js",
    iconUrl: TechIconWeb3,
    area: TechArea.GENERAL,
  },
  NPM: {
    text: "NPM",
    iconUrl: TechIconNpm,
    area: TechArea.GENERAL,
  },
  GANACHE: {
    text: "Ganache",
    iconUrl: TechIconGanache,
    area: TechArea.SMART_CONTRACT,
  },
  METAMASK: {
    text: "MetaMask",
    iconUrl: TechIconMetamask,
    area: TechArea.SMART_CONTRACT,
  },
  REACTJS: {
    text: "React.js",
    iconUrl: TechIconReact,
    area: TechArea.FRONTEND,
  },
  BOOTSTRAP: {
    text: "Bootstrap",
    iconUrl: TechIconBootstrap,
    area: TechArea.FRONTEND,
  },
  EXPRESS: {
    text: "Express.js",
    iconUrl: TechIconExpress,
    area: TechArea.BACKEND,
  },
  SQL: {
    text: "SQL",
    iconUrl: TechIconSql,
    area: TechArea.DATABASE,
  },
  POSTGRES: {
    text: "PostgreSQL",
    iconUrl: TechIconPostgres,
    area: TechArea.DATABASE,
  },
  MONGODB: {
    text: "MongoDB",
    iconUrl: TechIconMongodb,
    area: TechArea.DATABASE,
  },
  MONGOOSE: {
    text: "Mongoose",
    iconUrl: TechIconMongoose,
    area: TechArea.GENERAL,
  },
  TRUFFLE: {
    text: "Truffle",
    iconUrl: TechIconTruffle,
    area: TechArea.SMART_CONTRACT,
  },
  ASP: {
    text: "ASP.NET",
    iconUrl: "",
    area: TechArea.GENERAL,
  },
}



export { TechArea, TechConst }