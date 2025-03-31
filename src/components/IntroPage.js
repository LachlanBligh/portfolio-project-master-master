import React from "react";
import "./IntroPage.css";
import JSIcon from "../images/JS.png";
import PyIcon from "../images/py.png";
import SQLIcon from "../images/SQL.png";
import backgroundImage from "../images/background.jpg"; // Import the background image

function IntroPage() {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Ensures the image covers the entire screen
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    minHeight: "100vh", // Ensures the background covers the full viewport height
    width: "100%", // Ensures the background covers the full width
  };
  return (
    <div style={pageStyle} className="retro-background">
      <div className="intro-container">
        {/* Left Section */}
        <div className="intro-left">
          <h1 className="intro-name">Lachlan Bligh</h1>
          <h2 className="intro-title">Full Stack Developer</h2>
          <div className="contact-card">
            <p className="contact-info">Email: lachlanbligh03@gmail.com</p>
            <p className="contact-info">Phone: 0438999293</p>

          {/* Resume Section */}
          <div className="resume-card">
            <p>Click below to download my resume:</p>
            <a
              href={`${process.env.PUBLIC_URL}/Lachlan Bligh Resume.pdf`}
              download="Lachlan Bligh Resume.pdf"
              className="resume-button"
            >
              Download Resume
            </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="intro-right">
          <p>
            I’m a passionate full stack developer specializing in building modern, elegant, and high-performing applications. My favorite work lies at the intersection of creativity and engineering, crafting exceptional experiences for the web.
          </p>
          <p>
            Currently, I’m exploring opportunities to contribute to exciting projects and collaborate with amazing teams worldwide. In my free time, I enjoy gaming, experimenting with new tech, and solving challenging problems.
          </p>

          {/* Language Experience Section */}
          <div className="language-experience">
            {/* JavaScript Card */}
            <div className="language-card">
              <img src={JSIcon} alt="JavaScript Icon" />
              <h3>JavaScript</h3>
              <p>
                Experience building dynamic web applications, integrating APIs, and using frameworks like React and Node.js.
              </p>
            </div>
            {/* Python Card */}
            <div className="language-card">
              <img src={PyIcon} alt="Python Icon" />
              <h3>Python</h3>
              <p>
                Proficient in scripting, data analysis, and creating REST APIs with frameworks like Flask and Django.
              </p>
            </div>
            {/* SQL Card */}
            <div className="language-card">
              <img src={SQLIcon} alt="SQL Icon" />
              <h3>SQL</h3>
              <p>
                Experienced in designing and querying databases with PostgreSQL, MySQL, and SQLite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;