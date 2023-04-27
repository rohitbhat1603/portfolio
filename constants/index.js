import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    vit,
    starbucks,
    fiitjee,
    shopify,
    swasthyam,
    mathematicia,
    collegepick,
    ecommerce,
    threejs,
    bootstrap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Cyber Security Student",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Vellore Institute of Technology, Bhopal",
      company_name: "B.Tech in CSE with specialization in Cyber Security and Digital Forensics",
      icon: vit,
      iconBg: "#383E56",
      date: "June 2020 - Present",
      points: [
        "Acquired knowledge of core computer topics like DBMS, OS, CN.",
        "Collaborating with team members for hackathons to create various applications.",
        "Gaining knowledge of cyber security and digital forensics.",
        "Creating various academic and individual projects.",
      ],
    },
    {
      title: "FIITJEE Junior College, Hyderabad",
      company_name: "Class 11th and 12th",
      icon: fiitjee,
      iconBg: "#E6DEDD",
      date: "June 2018 - May 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Basaveshwar International Public School, Bagalkot",
      company_name: "Class 10th",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2017 - May 2018",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mathematicia",
      description:
        "Designed to deliver all of the study materials for mathematics on a single platform to help students along their journey to a successful preparation, taking into account the time constraints of students.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: mathematicia,
      source_code_link: "https://github.com/rohitbhat1603/TA_Invictus",
      website_link: "https:google.com",
    },
    {
      name: "College Pick",
      description:
        "Helping High School Exams qualified students to find best private college across the country. Hand-scrapped data from thousands of websites helps students choose right courses.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: collegepick,
      source_code_link: "https://github.com/rohitbhat1603/DevFest2.O",
    },
    {
      name: "Swasthyam",
      description:
        "People in this busy world getting stressed out and depressed can go through a stress-free mind which can be achieved through mantras, online games, meditating exercises, stand-up comedy videos, and much more. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: swasthyam,
      source_code_link: "https://github.com/rohitbhat1603/Swasthyam",
    },
    {
      name: "RoStore",
      description:
        "An e-commerce website that is built for the buying of electronic goods like earphones, headsets and much more. Fully responsive site with individual product page, shopping cart functionality, stripe payment gateway.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "Strapi API",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/rohitbhat1603/strapi-deployment",
    },
    {
      name: "Slowloris DOS Prevention",
      description:
        "A Python script that detects and prevents Slowloris DDoS (Distributed Denial of Service) attack using IsolationForest and HTTP port blocking",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "IsolationForest",
          color: "green-text-gradient",
        },
        {
          name: "HTTP blocking",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/rohitbhat1603/DOS_Prevention---Project-Exhibition-1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };