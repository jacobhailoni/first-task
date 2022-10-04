import React from "react";
import { useState } from "react";

function Main() {
  const [likes, setlikes] = useState(0);
  return (
    <div className="container">
      <div className="layer">
        <div className="centered-text">
          <h1>
            Welcome To <span>Subul</span>
          </h1>

          <h3>
            I'm Jacob Hailouny and I'm a Software Developer Intern at SUBUL
            <br />
            and this is my first task
          </h3>

          <h4>
            I've created this web page using React js with this steps:
            <ol className="steps">
              <li>I installed Node Package Manager(NPM)</li>
              <li>
                I used the create-react-app command in my command line (Bash)
              </li>
              <li>
                I created three components in components
                directory(Navbar,Main,Footer)
              </li>
              <li>
                I used React Functional Components that returns HTML elements
              </li>
              <li >
                Styling:
                <ol className="style-list">
                  <li>I used Sass to style the page</li>
                  <li>
                    I imported "Lato" font from google fonts to use it in my
                    page
                  </li>
                  <li>
                    I get the orange and green colors from SUBUL official
                    website and store them as variables in my Sass file
                  </li>
                  <li>
                    I got some help from StackOverFlow and W3School as any
                    developer should
                  </li>
                </ol>
              </li>
              <li>Last, I create a useState var to count the Likes and show it`</li>
            </ol>
          </h4>

          <h3>How many Likes can I get :)</h3>
          <button
            onClick={() => {
              setlikes(likes + 1);
            }}
          >
            Give me A LIKE!
          </button>
          <h1>Likes: {likes}</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
