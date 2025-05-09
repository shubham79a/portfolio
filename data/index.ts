export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "News", link: "#news" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Great products start with great communication. Let's bring your ideas to life, together.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I aspire to deliver solutions beyond time zones and borders.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by Technology and Innovation",
    description: "Building solutions with passion and purpose.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Campaign Management Site.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   title: "Devium - Interactive Code Editor",
  //   des: "Devium is a real-time code editor that lets users write, execute, and share code in up to 10 languages.",
  //   img: "/p1-devium.webp",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/c.svg"],
  //   link: "https://devium-nine.vercel.app/",
  // },
  {
    id: 1,
    title: "Job Portal",
    des: "This platform provides a smooth and efficient experience for both job seekers and employers. Easily browse job listings, submit applications, and manage postings with ease and confidence.",
    img: "/p1-job-portal.png",
    iconLists: ["/re.svg", "/tail.svg", "/ex.webp", "/mongo.svg", "/dock.svg"],
    link: "https://job-portal-opal-nu.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce",
    des: "E-commerce platform is a unified admin system for managing products and inventory with more 100 products ... ",
    img: "/p2-e-commerce.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/mongo.svg",
      "/ex.webp",
      "/cloud.svg",
    ],
    link: "https://soulstore-admin-ecommerce.vercel.app/",
  },
  {
    id: 3,
    title: "Imagify",
    des: "AI-powered image generator, allowing users to transform text prompts into high-quality visuals using an external AI API.",
    img: "/p3-imagify.png",
    iconLists: ["/re.svg", "/tail.svg", "/ex.webp", "/mongo.svg", "/cloud.svg"],
    link: "https://text-to-image-generator-dplc.vercel.app/",
  },
  {
    id: 4,
    title: "Image BG Removal",
    des: "Image Removal helps users remove backgrounds from images effortlessly. Users can upload an image, and the tool will automatically detect and remove the background, providing a clean and transparent result.",
    img: "/p4-bg-removal.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongo.svg", "/ex.webp", "/gemini.webp"],
    link: "https://referral-hub-alpha.vercel.app/",
  },
];

export const news = [
  {
    quote:
      "I actively participated in Smart India Hackathon (SIH) 2024, where I developed an innovative platform enabling farmers to directly sell their crops to retailers, effectively eliminating middlemen and ensuring better profitability for farmers.",
    name: "Shubham Kumar",
    title: "Author",
  },
  {
    quote:
      "I have also recently started learning Machine Learning and Deep Learning, expanding my technical skill set to explore cutting-edge technologies and their real-world applications.",
    name: "Shubham Kumar",
    title: "Author",
  },
  {
    quote:
      "I have solved 500+ coding problems on various competitive programming platforms, continuously honing my problem-solving abilities and enhancing my technical expertise.",
    name: "Shubham Kumar",
    title: "Author",
  },
  // {
  //   quote:
  //     "",
  //     name: "Shubham Kumar",
  //   title: "Author",
  // },
];

export const companies = [
  {
    id: 1,
    name: "nextjs",
    img: "/next.svg",
    nameImg: "/nextName.png",
  },
  {
    id: 2,
    name: "typescript",
    img: "/ts.svg",
    nameImg: "/tsName.webp",
  },
  {
    id: 3,
    name: "mongoDB",
    img: "/mongo.svg",
    nameImg: "/mongoName.jpg",
  },
  {
    id: 4,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const recentActivities = [
  {
    id: 1,
    title: "Gained proficiency in Docker",
    desc: "Enhancing my ability to build, deploy, and manage containerized applications efficiently.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Learned Next.js",
    desc: "Enabling me to create high-performance and scalable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mastered TypeScript",
    desc: "Improving code quality, maintainability, and developer productivity through strong typing and robust tooling.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Proficiency in creating WebSockets",
    desc: "Enhancing user experience with instant updates.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "github",
    img: "/git.svg",
  },
  {
    id: 2,
    name: "linkedin",
    img: "/link.svg",
  },
];
