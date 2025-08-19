import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rashedul Hasan",
  lastName: "Rijul",
  name: `Rashedul Hasan Rijul`,
  role: "Senior Software Engineer & Startup Founder",
  avatar: "/images/avatar.jpeg", // Replace with your photo if available
  email: "rashedulhasanrijul@gmail.com",
  location: "America/Vancouver", // IANA time zone for Vancouver
  languages: ["English", "Bengali"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, cloud, and AI.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Rijul1204/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rashedul-hasan-rijul-4335a170/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Vancouver, Canada`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Senior Software Engineer & Startup Founder with over 10 years of experience delivering scalable cloud solutions for global enterprises and startups, including Amazon, PayPal, and Samsung. Proven expertise in distributed systems, microservices, and cloud-native architectures across AWS and GCP. A national champion in algorithmic programming, recognized for strong leadership, mentoring, and driving high-impact product launches adopted by paying customers.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "GlaceIt",
        timeframe: "Jun 2025 - Present",
        role: "Co-founder",
        achievements: [
          <>DonorLog Platform: Designed and launched DonorLog, a CRA-compliant donation management SaaS adopted by multiple charities, including two paying customers. Automated tax receipt generation, e-transfer reconciliation, and bank/third-party payment integrations using Next.js, Neon Postgres, Drizzle ORM, and Plaid API, reducing administrative work by 40%.</>,
          <>Team Leadership and Operations: Led a growing team of 3 engineers through sprint-based development, delivering production-ready features on schedule. Oversaw architecture design, DevOps automation, and deployment pipelines, while also managing client onboarding, marketing strategy, and operational decisions enabling the platform to reach paying customer adoption within months of launch.</>,
        ],
        images: [],
      },
      {
        company: "Samsung Electronics",
        timeframe: "Jun 2024 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>Samsung Account B2B Authentication: Designed and deployed a secure, scalable flow-based authentication system for Samsung B2B accounts, improving login success rates and meeting enterprise-grade compliance requirements. Leveraged Spring Boot, AWS Lambda, DynamoDB, and other AWS services to ensure high availability and low latency.</>,
          <>Zero-ETL DynamoDB & OpenSearch Integration: Implemented a high-performance Zero-ETL pipeline for real-time synchronization between DynamoDB and OpenSearch, enabling advanced search and analytics with sub-second query times. Designed and executed extensive consistency and performance tests to ensure reliability at scale.</>,
          <>Core Flow Engine for B2B Account Management: Developed a modular core flow engine to streamline Samsung B2B account lifecycle operations, improving system extensibility and reducing integration time for new flows by 30%.</>,
        ],
        images: [],
      },
      {
        company: "Schrodinger Journey Labs, Inc. (Bagel)",
        timeframe: "Jan 2024 - Jun 2024",
        role: "Founding Software Engineer / Engineering Lead",
        achievements: [
          <>Managed Vector Store Solution: Built and launched a fully managed vector store platform with an intuitive console, REST API, and Python client library, enabling seamless vector data storage and retrieval for AI applications. Utilized Python, FastAPI, and Terraform to provision and manage AWS infrastructure (ELB, ASG, EC2, IAM, S3, DDB, OpenSearch). Authored comprehensive GitBook documentation and independently managed all domains via GoDaddy & Namecheap.</>,
          <>Team Leadership & Product Delivery: Led a cross-functional team to deliver key features for an AI datasets marketplace, achieving on-time launches and positive user feedback. Actively contributed to codebase while overseeing architecture, conducting technical interviews, and refining product design to align with strategic business goals.</>,
        ],
        images: [],
      },
      {
        company: "Amazon.com, Inc.",
        timeframe: "Dec 2020 - Jan 2024",
        role: "Software Development Engineer",
        achievements: [
          <>Cloud-based Reserve System: Led the design and development of a cloud-based reserve estimation service using Java, TypeScript, Spring and RESTful web services, NoSQL, utilizing AWS technologies such as SQS, SNS, Step Function, Lambda, API Gateway, DDB, CDK etc. This robust, scalable solution handles large data volumes with high availability and low latency. By automating reserve estimation, it eliminated 96 man-hours per month for the accounting team.</>,
          <>Data Compliance System: Designed and implemented a comprehensive data routing system using Java, Spring, DynamoDB, S3, CloudWatch, IAM etc. to ensure compliance with international data protection regulations. This solution secured data handling across multiple AWS regions, aligning with global standards and utilizing a range of AWS technologies.</>,
          <>Automated Reporting System (ARS): Led the development of an Automated Reporting System (ARS) using AWS Lambda, CloudWatch, and other AWS services to automate financial reporting for Amazon’s third-party negative sellers. This scalable and secure solution significantly enhanced reporting accuracy and enabled correct tracking of Amazon’s liability for negative sellers.</>,
          <>Mentorship and Recruitment Leadership: Mentored interns and played a key role in the recruitment process, enhancing the team’s skills and cohesion.</>,
        ],
        images: [],
      },
      {
        company: "PayPal Pte. Ltd.",
        timeframe: "May 2018 - Dec 2020",
        role: "Software Engineer",
        achievements: [
          <>Compliance Optimization: Enhanced customer identification processes at PayPal, benefiting both customers and agents through the introduction of simplified case management tools and an automated verification system, resulting in a 30% reduction in agent time per case. Leveraged a robust technology stack including Java, Spring Boot, Messaging, Spring Batch, and Oracle, facilitating seamless integration and project lifecycle management.</>,
        ],
        images: [],
      },
      {
        company: "Works Applications Singapore",
        timeframe: "Oct 2015 - May 2018",
        role: "Software Engineer",
        achievements: [
          <>Accounting automation: Designed and implemented a core module to provide simplified journal creation process for all accounting services developed by our company. Also implemented a Spark Batch job to process around 2 million application offline within an hour. Main technology used in this projects are: Java, Spring, Cassandra, Apache Spark.</>,
        ],
        images: [],
      },
      {
        company: "Ashta IT",
        timeframe: "Mar 2015 - Oct 2015",
        role: "Software Engineer",
        achievements: [
          <>Software development: Designed and developed back-end solution for a multi-tenant food ordering application. Technology used in this project are: ASP.NET, Entity Framework.</>,
        ],
        images: [],
      },

    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University Of Dhaka",
        description: <>Bachelor of Science in Computer Science, 2014 (GPA: 3.60/4.00)</>,
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements",
    items: [
      {
        title: "SRCA Outstanding Contributor Award 2024",
        description: <>Sole recipient from my team at Samsung for exceptional contributions.</>,
      },
      {
        title: "Supercon Tokyo 2016",
        description: <>Represented Works Applications as one of three members. Developed a genetic algorithm to find a minimum all-pair shortest path in a d-regular graph, utilizing the TSUBAME 2.5 supercomputer.</>,
      },
      {
        title: "Champion in Quazi Azher Ali International Programming Contest-2014",
        description: <>Team: Avengers</>,
      },
      {
        title: "Champion in 6th National IUT ICT FEST Programming Contest 2014",
        description: <>Team: DU Avengers</>,
      },
      {
        title: "6th Position in ACM ICPC Dhaka Regional 2014",
        description: <>Team: DU Avengers</>,
      },
      {
        title: "7th Position in ACM ICPC Dhaka Regional 2013",
        description: <>Team: DU Lebur Shorbot</>,
      },
      {
        title: "8th Position in ACM ICPC Dhaka Regional 2011",
        description: <>Team: DU Proxima Centauri</>,
      },
      {
        title: "Achieved max rating Master on Codeforces",
        description: <>ID: silent coder</>,
      },
      {
        title: "Publication: Prioritized Medium Access Control in Cognitive Radio Ad Hoc Networks",
        description: <>Second author on "Protocol and Analysis", Wireless Personal Communications, Springer US, Volume 79, Issue 3, pages 2383-2408, December 2014.</>,
      },
    ],
  },
  projects: {
    display: true,
    title: "Personal Projects",
    items: [
      {
        title: "Whiteboard Application",
        description: <>Engineered a web-based collaborative platform enabling users to draw simultaneously on a shared canvas, regardless of their location. This project demonstrates the use of Spring Boot for the backend, a messaging system for real-time data exchange, and WebSockets for maintaining persistent, live connections between clients and the server.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Java, Python, JavaScript (React), TypeScript, SQL, NoSQL</>,
        images: [],
      },
      {
        title: "Frameworks & Technologies",
        description: <>Spring, Docker, Kubernetes, AWS, Google Cloud, Vertex AI, AWS CDK, Terraform, FastAPI</>,
        images: [],
      },
      {
        title: "Software Development Practices",
        description: <>Scaling, Software Design and Architecting, RESTful APIs, Microservices, Refactoring</>,
        images: [],
      },
      {
        title: "Leadership & Team Management",
        description: <>Leadership of development teams, mentoring junior developers</>,
        images: [],
      },
    ],
  },
};

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Delivering scalable cloud solutions for global enterprises and startups</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">DonorLog SaaS Platform</strong>
      </>
    ),
    href: "/work/donorlog-saas-platform",
  },
  subline: (
    <>
      Senior Software Engineer & Startup Founder with over 10 years of experience delivering scalable cloud solutions for global enterprises and startups, including Amazon, PayPal, and Samsung. Proven expertise in distributed systems, microservices, and cloud-native architectures across AWS and GCP.
    </>
  ),
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software engineering, cloud, and AI...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering and product projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [], // You can add your own images here
};

export { person, social, newsletter, home, about, blog, work, gallery };
