module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://justincostenbader.netlify.app/`,
    // Your Name
    name: 'Justin Costenbader',
    // Main Site Title
    title: `Justin Costenbader | Computer Science Student`,
    // Description that goes under your name in main bio
    description: `Computer Science Student from Pennsylvania.`,
    // Optional: Github account URL
    github: `https://github.com/justincostenbader`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/justincostenbader`,
    // Content of the About Me section
    about: `I'm a first year computer science student at Kutztown University of Pennsylvania. After college, I'd like to have a career as a full-stack or web developer.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'RoverCore Documentation',
        description:
          'RoverCore is designed for beginner to intermediate ASP.NET core developers to learn how to develop ASP.NET SaaS applications. I contributed predominantly on the DTOs (Data Transfer Objects) page.',
        link: 'https://rovercore.github.io/Documentation/docs/concepts/dto/',
      },
      {
        name: 'LawnHolder',
        description:
          'LawnHolder was a school startup using the RoverCore boilerplate in attempt to create a SaaS application. You can check out my commits in the github source code. I was the team Scrum Master and integrated many of the .NET UI components.',
        link: 'https://github.com/JustinCostenbader/LawnHolder',
      },
     
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'AP Computer Science Principles (High School)',
        description: 'Learned JavaScript and the basics of computer science, 2019',
        link: '',
      },
      {
        name: 'Computer Science A (High School)',
        description: 'Introduced Java, classes, and inheritance, 2020',
        link: '',
      },
      {
        name: 'Advanced Data Structures and Algorithms (High School)',
        description: 'Introduced C#, Big O notation, frameworks, etc. , 2021',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'JavaScript, Java, C#, HTML, CSS',
      },
      {
        name: 'Frameworks',
        description: 'ASP.NET Core',
      },
      {
        name: 'Project Management',
        description:
          'Agile / Scrum',
      },
      {
        name: 'Ongoing',
        description:
          'C++ and the Unix Environment',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
