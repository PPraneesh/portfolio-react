import PropTypes from "prop-types";
import { useState } from "react";
export default function Projects(props) {
  let projectDetails = [
    {
      name: "dot-matrix-display",
      description: "An NPM package that provides a React component for creating a dot matrix display effect with smooth text transitions. Ideal for retro-style animated displays and digital information boards.",
      gifLink: "dot-matrix-display.gif",
      linkFiles: "https://github.com/PPraneesh/dot-matrix-display",
      linkProject: "https://www.npmjs.com/package/dot-matrix-display"
    },
    {
      name:"cpflashNoter",
      description:"A platform for competitive coders to save problems and innovative approaches, with AI-powered note-taking and detailed solution breakdowns for improved understanding and efficient interview preparation.",
      gifLink:"cpflashNoter.gif",
      linkFiles:"https://github.com/PPraneesh/cpflashnoter",
      linkProject:"https://cpflashnoter.vercel.app/"
    },
    {
      name:"sports-fest registrations",
      description:"A webapp that allows teams to register and pay for the sports fest online, with features like payment gateway integration, email confirmation, and easy registration management, secure payment processing, and user-friendly interface.",
      gifLink:"sports-fest-registrations.gif",
      linkFiles:"https://github.com/PPraneesh/sports-fest",
      linkProject:"https://sports-fest.vercel.app/"
    },
    {
      name:"AI-waiter",
      description:"This is a simple AI waiter who can book a table for you at the restaurant and it will answer everything about restaurant.. actually it's based on baratie (a restaurant from the anime 'one piece')",
      gifLink:"AI-waiter.gif",
      linkFiles:"https://github.com/PPraneesh/AI_assistant-waiter",
      linkProject:"#",
    },
    {
      name: "The Coder Companion",
      description:
        "The Coder Companion: Your gateway to intuitive programming mastery. With AI assistance and a user-friendly interface, embark on an efficient journey to tackle coding challenges with confidence.",
      gifLink: "theCoderCompanion.gif",
      linkFiles: "https://github.com/PPraneesh/theCoderCompanion",
      linkProject: "https://the-coder-companion.vercel.app/",
    },
    {
      name: "NextPad",
      description:
        "NextPad revolutionizes the writing experience, empowering authors with unprecedented control to edit, adjust visibility, and unleash their creativity seamlessly. Welcome to the future of writing, where freedom and flexibility reign supreme.",
      gifLink: "nextpad.gif",
      linkFiles: "https://github.com/PPraneesh/NextPad",
      linkProject: "https://nextpad.vercel.app/",
    },
    {
      name: "The A-Z Proj",
      description:
        "Explore my Amazon replica, a Node.js and Express.js marvel with EJS, CSS, and HTML. Unveil diverse e-commerce functionalities in this concise showcase of innovation. Welcome to an immersive online shopping experience!",
      gifLink: "the-a-z.gif",
      linkFiles: "https://github.com/PPraneesh/The_A-Z_Proj",
      linkProject: "https://a-z-project.glitch.me/",
    },
    {
      name: "EXPENSE TRACKER",
      description:
        "Effortlessly manage expenses with my user-friendly Expense Tracker. Track income, expenses, and balance, and delete entries seamlessly for a streamlined financial overview.",
      linkFiles: "https://github.com/PPraneesh/expenseTracker",
      gifLink: "expenseTracker.gif",
      linkProject: "https://ppraneesh.github.io/expenseTracker/",
    },
    {
      name: "CYBER-SECURITY CHATBOT",
      description:
        "This is a simple web-based chatbot for providing cybersecurity guidance and answering security-related questions in real-time. It uses the GPT-3.5 Turbo model from OpenAI to generate responses to user inputs.",
      gifLink: "theChatBot.gif",
      linkFiles: "https://github.com/PPraneesh/ChatBot",
      linkProject: "https://parshipraneesh.pythonanywhere.com/",
    },
    {
      name: "Spotify Duplicates",
      description:
        "The JavaScript file powers a web-based music player application, offering an interactive interface for users to play, pause, skip, and queue songs. It manages a collection of songs stored in a database, enabling users to search for specific tracks and create a queue for continuous playback.",
      gifLink: "spotifyDuplicates.gif",
      linkFiles: "https://github.com/PPraneesh/SpotifyDuplicates",
      linkProject: "https://ppraneesh.github.io/SpotifyDuplicates/",
    },
  ];

  const [SMToggler, setSMToggler] = useState(false);
  let projects = SMToggler ? projectDetails : projectDetails.slice(0, 3);
  const showMoreHandler = () => {
    setSMToggler(!SMToggler);
  };
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>My Projects</h2>
        <p className={`${props.route.theme}_color`}>Parshi :: 3 min read</p>
      
      <div className="proj-1">
        <p>{"'"}An idiot admires complexity, {"\n"}a genius admires simplicity{"'"}<span style={{display:"block", textAlign:"right"}} >-Fireship</span></p>
      </div>
      <div >
        <p>As I am no genius all my simple projects are complexly coded.. {"\n"} It took a lot of pain and effort to make them, take a look and critize me..</p>
      </div>
      {projects.map((projectDetails, i) => {
        return (
          <div className="project" key={i}>
              <h2 className="<%=theme%>_color">{projectDetails.name}</h2>
              
            <div className="project-cont">
              <div className="project-gif">
                <img src={`GIFs/${projectDetails.gifLink}`} />
              </div>
              <div className="project-info">
                <p>{projectDetails.description}</p>
              </div>
            </div>
                <div className="proj-buttons">
                  <button className={`buttons ${props.route.theme}_Bcolor`}>
                    <a href={projectDetails.linkProject} target="_blank">View Project</a>
                  </button>{" "}
                  <button className={`buttons ${props.route.theme}_Bcolor`}>
                    <a href={projectDetails.linkFiles} target="_blank">View Files</a>
                  </button>
                </div>
          </div>
        );
      })}
      <button className={`SM-button`} onClick={showMoreHandler}>
        {SMToggler ? "Show less" : "Show More"}
      </button>
    </>
  );
}

Projects.propTypes = {
  route: PropTypes.object.isRequired,
};
