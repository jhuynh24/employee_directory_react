import React from "react";
import Router from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" style={{color: 'indigo', fontSize: 'xx-large'}}>Julian Huynh</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="like_button_container" />
          {/* Code for navbar links */}
          <section className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">About Me<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </section>
        </nav>
        {/* Code for main container */}
        <main className="container">
          <section className="row" style={{height: '60px'}}>
          </section>
          <section className="row p-auto">
            {/* Code for about me section */}
            <section className="col-sm-8 content" id="bigContainer">
              <h2>
                About Me
              </h2>
              <hr />
              <img src="./profilePicture.jpeg" alt="Julian Huynh Profile Picture" width={300} height={300} className="img-fluid float-left mr-3" />
              <p>
                My name is Julian Huynh.
                I am a student in the KU Coding Bootcamp Full-Stack Web Development program.
                I currently work in the seafood department at whole foods market.
                Some of my interests include hiking, fishing, traveling, and cryptocurrency.
                Being outdoors and exploring new places is one of my favorite things to do in my free time.
                I also have a passion for building and learning about technology.
                After completing my boot camp program I hope to find a web developer career that will let me enjoy
                working in a field I am passionate about as well as giving me the ability and resources to travel to
                new places.
              </p>
              <p>
                I am working toward a career in software development because of the challenges it brings.
                Growing up in the technology age we currently live in has shown me how vital and important it is to
                keep innovating the current systems we have in place.
                It still amazes me to look back at cell phones and track their evolution over the past few decades.
                They are living proof that our advances in technology are vital to our growth as a society.
                I want to inspire people to look ahead of just themselves and work together with others in order to
                create solutions for the future that can only be achieved by working along side each other.
                Software development is such a great field because it allows your individuality to flourish within
                your own unique code and thought process. But, it also goes so much farther as a product when it is
                combined with the passion and dedication of a well meshing team of developers.
                I want to keep pushing the limits of our current technological capabilities so we can experience
                more extraordinary breakthroughs to help the world create a more sustainable and prosperous
                lifestyle.
              </p>
            </section>
          </section>
          <section className="row" style={{height: '60px'}}>
          </section>
        </main>
        <footer>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" id="footerText" href="#" style={{color: 'indigo', fontSize: 'large'}}>
            </a><ul><a className="navbar-brand" id="footerText" href="#" style={{color: 'indigo', fontSize: 'large'}}>
                <li>
                  <h3>Contact Information:</h3>
                  <p>E-mail: jhuynh1735@gmail.com -------- Phone: (913)-653-2258</p>
                </li>
              </a><li><a className="navbar-brand" id="footerText" href="#" style={{color: 'indigo', fontSize: 'large'}}>
                </a><a href="https://drive.google.com/file/d/1It80FncJJkO-N3AHDmyKvaS5LBxmtCWO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
              <li>
                <a href="https://github.com/jhuynh24"><i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/julianhuynh1735/">Linkedin</a>
              </li>
            </ul>
          </nav>
        </footer>
        {/* Load our React component. */}
      </div>
    </Router>
  );
}

export default App;