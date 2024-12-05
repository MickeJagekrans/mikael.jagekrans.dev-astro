const title = "Mikael Jagekrans | Polyglot Developer | DevOps Engineer | Freelancer";

const presentation = [
  "<h2>Who am I?</h2>",
  "<p>I am a versatile back-end developer with a passion for building robust systems and optimizing development processes. With extensive experience in DevOps- and platform technologies, I have a deep understanding of the entire software development lifecycle, from coding to deployment and maintenance.</p>",
  "<p>My technical repertoire spans multiple programming languages and tools, and I have successfully delivered scalable and reliable solutions to meet clients' needs. My ability to create streamlined development workflows and automate previously manual processes has resulted in faster deliveries with fewer bugs and more robust systems.</p>",
].join('');

const skills = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "C#",
      "F#",
      "Python",
      "Elixir",
      "Bash",
      "Ruby"
    ]
  },
  {
    title: "Frameworks",
    items: [
      "Node.js",
      "Express",
      "React",
      "AngularJS",
      "ASP.NET",
      "Ruby on Rails",
      "Sinatra"
    ]
  },
  {
    title: "Test automation tools",
    items: [
      "Jest",
      "Mocha",
      "Chai",
      "Sinon",
      "xUnit",
      "NUnit",
      "Selenium",
      "SpecFlow",
      "TestCafé",
      "Cucumber",
      "RSpec",
      "ESpec"
    ]
  },
  {
    title: "Cloud and DevOps",
    items: [
      "Azure",
      "AWS",
      "Azure DevOps",
      "GitHub Actions",
      "Terraform",
      "Azure ARM Templates",
      "Bicep",
      "Docker",
      "Jenkins"
    ]
  },
  {
    title: "Databases",
    items: [
      "Redis",
      "CosmosDB",
      "MongoDB",
      "PostgreSQL",
      "Neo4j",
      "SQL Server",
      "SQLite",
      "Elasticsearch"
    ]
  },
  {
    title: "Collaboration and Version Control",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jira",
      "Confluence",
      "Trello",
      "Slack"
    ]
  }
];

const previousRoles = [
  {
    company: "Handelsbanken",
    title: "DevOps Engineer | Consultant",
    period: "May 23 - Oct 23",
    description: "<p>Development, maintenance, and improvement of CI/CD pipelines in Azure DevOps for their customer meeting places.</p><p>Evaluation and implementation of different versioning approaches for internal packages and pipeline templates.</p><p>Designed and built a solution for code owner approvals with everything-as-code to allow for granular control over code changes. The code owner approvals solution was built in Node.js and vanilla JavaScript to avoid having to set up unnecessary build chains and -pipelines.</p>"
  },
  {
    company: "Scrive / Esignatur",
    title: "DevOps Engineer | Consultant",
    period: "Nov 22 - Mar 23",
    description: "<p>Was responsible for Esignatur's entire CI/CD setup in Azure DevOps.</p><p>Refactored and split their existing pipeline into multiple smaller pipelines each deploying a part of the system instead of one big bang deployment. Implemented automated build validations on PRs for all active repositories.</p><p>Designed and implemented an automated release strategy complete with semantic versioning and automatic updates for their Electron desktop app.</p><p>Set up Mac app code signing and notarization in the desktop app deployment pipeline.</p><p>Introduced automated UI-testing with Selenium and SpecFlow written in C#/.NET.</p>"
  },
  {
    company: "H&M Group",
    title: "Software Engineer | Consultant",
    period: "Oct 18 - Jun 22",
    description: "<p>Worked with building tools and services for automating tasks such as DNS configuration, Azure AD identity management, TLS/SSL certificate issuance, and app service authentication configuration via CI/CD pipeline tasks/actions and via REST APIs.</p><p>Designed and built an internal URL shortener system in F# in .NET 5-7 using as purely functional programming techniques as possible. The system was deployed as a few Azure Functions backed by a CosmosDB database.</p><p>Designed, built, and maintained an event-driven Azure subscription creation automation system written in TypeScript and Node.js as a cluster of microservices.</p><p>Supported teams in following DevOps best practices such as writing and running automated tests, implementing everything-as-code, configuring automated deployments via CI/CD pipelines, and setting up comprehensive monitoring.</p>"
  },
  {
    company: "Telenor Connexion",
    title: "Software Engineer | Consultant",
    period: "May 18 - Sep 18",
    description: "<p>Worked on an IoT device management system written in JavaScript/Node.js, mainly focusing on CI/CD pipeline optimization and test suite feedback loop improvement. Project build time was successfully shortened from 20 minutes to 5 minutes.</p>"
  },
  {
    company: "Magine AB",
    title: "Back-end Engineer",
    period: "Sep 16 - May 18",
    description: "<p>Development and maintenance of the audio/video transcoder stack and automated perceptual quality tests, as well as the transcoder support systems and subtitle pipeline. The systems were built in Elixir utilizing purely functional programming techniques.</p><p>Worked on a smart TV application for Tizen and Orsay (Samsung TV OSs) including a buffered real-time subtitle decoder due to a lack of support for modern subtitle formats in Orsay.</p>"
  },
  {
    company: "Board Intelligence Ltd.",
    title: "Full-stack Engineer",
    period: "Mar 16 - Sep 16",
    description: "<p>Developed and maintained a board reporting tool written in Ruby-on-Rails, mainly focusing on the backend API and the PDF generation pipeline. Migrated the system from a single server to a self-hosted UK-wide distributed server cluster.</p><p>Planned and executed a migration of the web frontend from AngularJS to React w/ Redux.</p>"
  },
  {
    company: "Flow XO LLC",
    title: "Back-end Engineer | Consultant",
    period: "Jan 16 - Mar 16",
    description: "<p>Developed a tool for automating integrations between different external services and APIs in JavaScript/Node.js, leading to a big reduction in time needed to configure a new integration in the pre-existing integration automation system.</p>"
  },
  {
    company: "Tuzame AB",
    title: "Full-stack Engineer",
    period: "Mar 14 - Nov 15",
    description: "<p>Designed and implemented a large-scale centralized multi-vendor product database backed by a graph database and a Redis cache, complete with a web UI for administration. All systems were written in JavaScript and Node.js with the frontend built in AngularJS.</p><p>Built a white-label cross-platform mobile application solution and built several mobile apps on top of it.</p>"
  },
  {
    company: "Vendre AB",
    title: "Back-end Engineer | Consultant",
    period: "Dec 13 - Feb 14",
    description: "<p>Analyzed and evaluated if their e-commerce platform could be migrated from PHP to Node.js in a cost- and time efficient manner.</p><p>Majorly improved the query performance for one of their client’s online store by reconfiguring their Solr search engine instance.</p>"
  },
  {
    company: "Hogia Terminal Systems AB",
    title: "Lead Web Developer",
    period: "Dec 12 - Dec 13",
    description: "<p>Designed, built, and maintained a web-based terminal management system and helped out with maintaining their old application server written in VB6. The new web platform was built in C# .NET.</p>"
  },
  {
    company: "Svensk Lånemarknad AB",
    title: "Software Developer",
    period: "Sep 12 - Nov 12",
    description: "<p>Migrated and refactored a pre-existing loan application system and peripheral support systems to a more modern, performant, and fault-tolerant solution written in Ruby.</p>"
  },
  {
    company: "ComAround AB",
    title: "Software Engineer",
    period: "Mar 11 - Sep 12",
    description: "<p>Maintenance of an older self-service support platform and design, development and maintenance of a new version of the platform built from the ground-up using modern web techniques. The original system was built in ASP.NET Web Forms (C#) and the new system was built in ASP.NET MVC (C#) with an AngularJS frontend.</p><p>Responsible for designing, implementing, and configuring a search engine solution based on Apache Solr.</p>"
  },
  {
    company: "Sphinxly AB",
    title: "Web Developer",
    period: "Dec 09 - Sep 10",
    description: "<p>Implementation of websites from designs on top of an in-house built Content Management System (CMS) in parallel with some development and maintenance of the CMS itself. Everything was built in C# and ASP.NET Web Forms.</p>"
  }
];

export default {
  title,
  presentation,
  skills,
  previousRoles
};
