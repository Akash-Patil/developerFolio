/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Akash Patil",
  title: "Hi all, I'm Akash",
  subTitle: emoji(
    "A full-time Software Engineer🚀 passionate about full-stack development but would also love to engage with other fields of software engineering like Machine learning and Data science."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dPT3ERVnnX4i2s-S1v0zdrokoaEa7w8B/view?usp=sharingg", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Akash-Patil",
  linkedin: "https://www.linkedin.com/in/akash-patil-100/",
  gmail: "skypat26@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Enthusiastic Developer always looking for opportunities to grow my skillset and network in the software engineering ecosystem.",
  skills: [
    emoji(
      "⚡ Experienced in a wide range of languages and technologies pertaining to different layers of the stack like React(frontend) and Express.js(backend)."
    ),
    emoji("⚡ Having co-led projects, have industry experience in collaborating between different teams to develop solutions to achieve a particular target."),
    emoji(
      "⚡ Knowledgeable in Machine learning and Data science."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fas fa-angle-right"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-angle-right"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
   
   
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BITS Pilani, Hyderabad campus",
      logo: require("./assets/images/bitsLogo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2016 - May 2020",
      desc: "",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "LoginRadius Inc.",
      companylogo: require("./assets/images/loginradius.png"),
      date: "Aug 2020 – Present",
      desc: "Mainly worked on the following projects as part of the Product and Growth team.",
      descBullets: [
        "Developed a plugin for integrating Mailazy Email service with LoginRadius Developer Dashboard (Project Co-lead). Worked on the backend APIs and User interface.",
        "Open source projects like LoginRadius Command Line Interface and LoginRadius React Software Development Kit.",
        "Tech used: Golang, React, Express.js"  
      ]
    },
    {
      role: "Intern, Software and Product",
      company: "Blue Yonder",
      companylogo: require("./assets/images/blueYonder.jpg"),
      date: "July 2019 – Dec 2019",
      descBullets: [
        "Contributed to the research and development of Machine learning solutions to effectively predict the time required to solve different company related tasks.",
        "Assisted in automation of developer on-boarding and software setup process using scripting.", 
        "Tech used: Python, scikit-learn"
      ]
      
    },
    {
      role: "Intern",
      company: "Deshpande Foundation",
      companylogo: require("./assets/images/deshpande.webp"),
      date: "May 2018 – July 2018",
      desc: "Member of the New Initiative Program, worked on the Early Childhood education project. Assisted in the creation of technical content for courses in Deshpande Educational Trust. Also helped in identifying problems and creating solutions for them in rural schools through field visits."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OPEN-SOURCE PROJECTS THAT I HAVE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/asyncBlog.png"),
      projectName: "Async Blog Portal",
      projectDesc: "Contributing as a technical blog reviewer and contributor. Also assisting in revamp of the UI to include blogs accross various domains.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.loginradius.com/blog/async/"
        },
        {
          name: "Github",
          url: "https://github.com/LoginRadius/engineering-portal"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cli.png"),
      projectName: "LoginRaidus Command Line Interface ",
      projectDesc: "Core contributer to development. The tool allows users to perform actions of the LoginRadius Dashboard (eg: login, register, domain whitelisting etc. ) via the command line quickly and efficiently.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/LoginRadius/lr-cli"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Activities and Interests 🚀 "),
  subtitle:
    "Achievements, extracurriculars and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Abacus Mental Math Grandmaster",
      subtitle:
        "Completed 8 mandatory levels + 3 Grandmaster levels in Abacus mental math. 3rd place Runner-up in Regional SIP Abacus Mental Arithmetic competition.",
      image: require("./assets/images/abacus.jpg"),
      footerLink: [
      ]
    },
    {
      title: "Basketball Team member",
      subtitle:
        "Participated and won awards in several tournaments at the collegiate and school level.",
      image: require("./assets/images/basketball.png"),
      footerLink: [
      ]
    },

    {
      title: "Taekwon-Do Black belt",
      subtitle: "Achieved a black belt in Taekwon-DO martial arts.",
      image: require("./assets/images/taeKwonDo.webp"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I started blogging recently. Would love to write more blogs on the new stuff that I have learnt (hopefully soon 😅).  ",

  blogs: [
    {
      url: "https://www.loginradius.com/blog/async/implement-authentication-in-react-using-loginradius-cli/",
      title: "Implement Authentication in React Applications using LoginRadius CLI",
      description:
        "Learn how to implement authentication for React applications using LoginRadius in under 5 mins."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Sections

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Hit me up if you want to discuss new projects or oppurtunities. My Inbox is open for all.",
  //  number: "+91 9686563235",
  email_address: "skypat26@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
