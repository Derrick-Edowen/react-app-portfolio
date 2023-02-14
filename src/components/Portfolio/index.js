import React from "react";
import workdayScheduler from "../../assets/small/workday.PNG";
import passwordGenImage from "../../assets/small/passgen.PNG";
import textEditorImage from "../../assets/small/App screen.PNG";
import noteTakerImage from "../../assets/small/notetaker.PNG";
import codeQuiz from "../../assets/small/codequiz.PNG";
import techImage from "../../assets/small/techblog.PNG";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Previous Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ttech.herokuapp.com/">
                {" "}
                <img
                  src={techImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tech-blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
                A MVC application that lets the user publish articles,  blog posts,
                as well  as their  own thoughts and opinions on anything tech related.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Code-Quiz/">
                {" "}
                <img
                  src={codeQuiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Code Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Quiz</h4>
              <p>
                A HTMl, CSS, and Javascript application that tests the user on their knowledge 
                of coding facts. Questions  mostly focus on  the use  of javascript and the syntax related to
                javascript.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://quiet-shore-46614.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                Application used by users to take and save notes.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Password-Generator/">
                {" "}
                <img
                  src={passwordGenImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PassGen"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
                Application that generators a random password for the user based on specific requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://arcane-bastion-17633.herokuapp.com/">
                {" "}
                <img
                  src={textEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
                Application that allows user to edit text. Can be installed fromthe browser. PWA application that can function offline.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Work-Day-Scheduler/">
                {" "}
                <img
                  src={workdayScheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="workdaySch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Workday Scheduler</h4>
              <p>
                Application that  allows a user to organize their day based on thecurrent time. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
