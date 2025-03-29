import ExpIconHku from "../assets/img/experience/hku.png";
import ExpIconSttss from "../assets/img/experience/sttss.png";
import ExpIconSth from "../assets/img/experience/sth.png";
import ExpIconMoveit from "../assets/img/experience/moveit.png";
import ExpIconPks from "../assets/img/experience/pks.png";

const ExperienceConst = [
    {
        year: "2023 Aug - Current",
        shortName: "sth",
        iconUrl: ExpIconSth,
        title: "St. Teresa's Hospital",
        subtitle: "Programmer",
        description: [
            "Maintained and enhanced React.js web apps and a React Native mobile app, using Redux for state management and ensuring responsive design",
            "Developed and supported C# ASP.NET Core APIs, delivering robust backend services and ensuring seamless integration with frontend systems",
            "Sustained legacy VB systems, identifying and resolving bugs to maintain operational stability",
            "Managed SQL databases, performing data patching, insertions, and schema updates to support system enhancements",
            "Collaborated with users to gather requirements and optimize workflows"
        ]
    },
    {
        year: "2022 Jul - 2022 Sep",
        shortName: "moveit",
        iconUrl: ExpIconMoveit,
        title: "Move It Move It Limited",
        subtitle: "Full Stack Engineer Intern",
        description: [
            "Developed full-stack web and mobile apps using Flutter",
            "Contributed to designing and implementing new tech features",
            "Collaborated with cross-functional teams to deliver high-quality software solutions"
        ]
    },
    {
        year: "2021 May - 2021 Sep",
        shortName: "pks",
        iconUrl: ExpIconPks,
        title: "Peanut King Solution Limited",
        subtitle: "Software Engineer Intern",
        description: [
            "Programmed Arduino-based robots, integrating sensors and motor control for autonomous functionality",
            " Delivered Arduino and robotics workshops to secondary school students, fostering STEM engagement",
            "Created interactive websites using Bootstrap"
        ]
    }
];

const EducationConst = [
    {
        year: "2018 - 2023",
        shortName: "hku",
        iconUrl: ExpIconHku,
        title: "The University of Hong Kong",
        subtitle: "Computer Science - Bachelor of Engineering",
        description: [
            "Final Year Project: Blockchain-Based Contract and Resume Verification Platform",
            "Designed smart contracts on the Polygon network to tokenize certifications and employment records, ensuring authenticity and tamper-proof verification",
            "Built a full-stack application with React.js for the frontend and Node.js/Express.js for the backend, integrating with a PostgreSQL database"
        ]
    },
    {
        year: "2012 - 2018",
        shortName: "sttss",
        iconUrl: ExpIconSttss,
        title: "Shatin Tsung Tsin Secondary School",
        subtitle: "Secondary Education",
        description: "Shatin Tsung Tsin Secondary School is renowned for its commitment to academic excellence and holistic development. With a rich history and a dedicated faculty, the school provides a nurturing environment where students thrive academically, socially, and morally. Through a balanced curriculum and vibrant extracurricular activities, Shatin Tsung Tsin Secondary School prepares students to excel in all aspects of life, fostering leadership, compassion, and a lifelong love of learning."
    }
];

export { ExperienceConst, EducationConst };