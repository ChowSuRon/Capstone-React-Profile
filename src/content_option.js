const logotext = "{CSR}";
const meta = {
    title: "{Chow Su Ron}",
    description: "I'm {Your name}, a technologist and cybersecurity enthuist.",
};
import picture from "../src/assets/images/240z.jpeg";
const introdata = {
    title: "Hi, I'm Chow Su Ron",
    animated: {
        first: "Student",
        second: "Friend",
        third: "Graduate",
        fourth: "Gamer",
        fifth: "Banker",
        sixth: "Application consultant",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Looking for a place and trying to fit into society.",
    your_img_url: "https://lh3.googleusercontent.com/pw/ADCreHcuprPF-_ZLHl6zsx4ZL_vxrQetN77AHtq7UtQfau0OZYWVlP3N8g1yGS9oylCc--C7fZhn3E99zNmwqXm_P8Tlhq9dX2mvOHksG0EgTmnAS96Mbw71MQ0128xRYvWa0anI7_ZhHg_RUtVpyx30AAWpEA=w495-h743-s-no?authuser=0",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Hello, my name is Chow Su Ron, and I recently graduated with a degree in Business Information Systems. I'm enthusiastic about leveraging technology to drive business success and streamline operations. During my academic journey, I developed a strong foundation in various aspects of information systems, including database management, data analysis, and software development.",
};
const worktimeline = [{
        jobtitle: "Staff/Cashier",
        where: "7-Eleven",
        date: "2016",
    },
    {
        jobtitle: "Mortgage Banker",
        where: "Public Bank",
        date: "2022",
    },
    {
        jobtitle: "Application Consultant",
        where: "Tricor Orisoft",
        date: "2023",
    },
];

const skills = [{
        name: "Web Development",
    },
    
    {
        name: "C#",
    },
    
    {
        name: "Javascript",
    },
    
    {
        name: "AWS Cloud",
    },

    {
        name: "MySQL",
    },

    {
        name: "Git Essentials",
    },

    {
        name: "Sales & Marketing",
    },

    {
        name: "Social Networking",
    },
];

const dataportfolio = [{
        img: "https://media.licdn.com/dms/image/C4E03AQFeCeBjm3Tsrw/profile-displayphoto-shrink_800_800/0/1622863778128?e=2147483647&v=beta&t=Lz6zDubUVN_TdstSKKgKz_eYBvcrSij3LgSBq2D51aI",
        description: "My Linkedin profile.",
        link: "https://www.linkedin.com/in/ron-chow-428293214/",
    },
    {
        img: "https://scontent.fkul4-4.fna.fbcdn.net/v/t39.30808-6/251883191_5077265945620968_4875059350739687229_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=CqBcruMtFY4AX98i5gQ&_nc_ht=scontent.fkul4-4.fna&oh=00_AfBMJ-tX3TH97tltFyMd6IeP3SZIy5KCR9JfSKDiufoItw&oe=652D386B",
        description: "My Facebook picture.",
        link: "https://www.facebook.com/photo/?fbid=5077265958954300&set=a.157055970975348",
    },
    {
        img: "https://scontent.fkul4-4.fna.fbcdn.net/v/t1.6435-9/84069414_1536586143157648_2794108600958582784_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nA1kjKeFF-AAX8TVUl1&_nc_ht=scontent.fkul4-4.fna&oh=00_AfAWrcZ4KUTx63fq9jNw6TipQ36NnySkiCTByUfgc-JhTg&oe=654DCE90",
        description: "A trip to Japan.",
        link: "#",
    },
    {
        img: "https://scontent.fkul4-3.fna.fbcdn.net/v/t31.18172-8/11025216_1031964973484439_1516067039388814320_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=Ich7H11l2F0AX-4LI0G&_nc_ht=scontent.fkul4-3.fna&oh=00_AfBUtJB3eEz-7bi5-hg9cFFsXVtj3xWUfxGuj6wQI3dP_Q&oe=654F7DDE",
        description: "Archery days.",
        link: "#",
    },
    {
        img: picture,
        description: "Datsun 240z",
        link: "https://www.youtube.com/watch?v=5X9s7L0t-Mo",
    },
    {
        img: require("./assets/images/Satria.jpg") ,
        description: "Satria",
        link: require("file:///C:/Users/chows/Pictures/Saved%20Pictures/Me/IMG_1090-2.jpg"),
    },
    {
        img: "https://lh3.googleusercontent.com/pw/ADCreHetvXHGPU49TnZ22EtxZhvnD3CZMN213lj14ETAuLO7fzBnoTIW7mU_k79_Qk8I6L_e9LU92Q8YUZAPd0m_LIAEA8P5Tzoogfoyn5tm5OLlpe2FNPw0gRmSmnmKw50tgzmuVzVLyDYoSd7kvLEopvzG-g=w495-h743-s-no?authuser=0",
        description: "Photo taken by my firend",
        link: "https://photos.google.com/share/AF1QipML18yC0ubxX8fHPOYccnrdkVIYGQs_iopdWIG3TX6MD0z4ALssLBCryyny02tEWw/photo/AF1QipOM_V5P9FEWS1803Ymm1wPUl5Ku86EL5bLFldHH?key=WDI4amxEZDJzM1J3bWRUZmdNdWtCXzFIUmkxbXBR",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Random generated photo by Lorem Picsum in grayscale.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400",
        description: "Random generated photo by Lorem Picsum.",
        link: "#",
    },
    {
        img: "https://picsum.photos/seed/picsum/400/400",
        description: "Static Random Image by Lorem Picsum.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?blur",
        description: "Blur image by Lorem Picsum.",
        link: "#",
    }
  
];

const contactConfig = {
    YOUR_EMAIL: "chowsuron21@gmail.com",
    description: "Thank you for reaching out to me in advance.",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/ChowSuRon",
    linkedin: "https://www.linkedin.com/in/ron-chow-428293214/",
    facebook: "https://www.facebook.com/chow.suron",
    youtube: "https://www.youtube.com/channel/UCmlFH0VE88MsplGJO_z3vZQ"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};