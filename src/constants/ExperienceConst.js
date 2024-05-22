import expIconHku from "../assets/img/experience/hku.png";
import expIconSttss from "../assets/img/experience/sttss.png";
import expIconSth from "../assets/img/experience/sth.png";
import expIconMoveit from "../assets/img/experience/moveit.png";
import expIconPks from "../assets/img/experience/pks.png";

const experienceData = [
    {
        year: "2023 Aug - Current",
        shortName: "sth",
        iconUrl: expIconSth,
        title: "St. Teresa's Hospital",
        subtitle: "Programmer",
        description: [
            "React Native expertise for mobile app enhancement",
            "Skilled in MSSQL for accurate data management",
            "ASP.NET maintenance ensuring seamless patient experiences",
            "Proficient in VB programming for program optimization",
            "Provided effective technical support & played a key role in UAT testing"
        ]
    },
    {
        year: "2022 Jul - 2022 Sep",
        shortName: "moveit",
        iconUrl: expIconMoveit,
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
        iconUrl: expIconPks,
        title: "Peanut King Solution Limited",
        subtitle: "Software Engineer Intern",
        description: [
            "Collaborated cross-departmentally in software development",
            "Created interactive websites using Bootstrap",
            "Developed robotic codes for educational purposes"
        ]
    }
];

const educationData = [
    {
        year: "2018 - 2023",
        shortName: "hku",
        iconUrl: expIconHku,
        title: "The University of Hong Kong",
        subtitle: "Computer Science - Bachelor of Engineering",
        description: "The University of Hong Kong (HKU) offers a prestigious Bachelor of Engineering in Computer Science program, equipping students with a diverse skill set in software development, data science, machine learning, and more. Throughout the program, students delve into cutting-edge technologies and gain practical experience in problem-solving and innovation. With a strong emphasis on critical thinking and creativity, graduates emerge ready to tackle the challenges of the digital age, contributing to the advancement of technology and shaping the future of the industry."
    },
    {
        year: "2012 - 2018",
        shortName: "sttss",
        iconUrl: expIconSttss,
        title: "Shatin Tsung Tsin Secondary School",
        subtitle: "Secondary Education",
        description: "Shatin Tsung Tsin Secondary School is renowned for its commitment to academic excellence and holistic development. With a rich history and a dedicated faculty, the school provides a nurturing environment where students thrive academically, socially, and morally. Through a balanced curriculum and vibrant extracurricular activities, Shatin Tsung Tsin Secondary School prepares students to excel in all aspects of life, fostering leadership, compassion, and a lifelong love of learning."
    }
];

export { experienceData, educationData };