import "../Home/Home.css";
// import "../../styles.css";
import "./project.css";
import {
  MdOutlineAssignmentInd,
  MdOutlineLabel,
  MdLaunch,
  MdLink
} from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
export default () => {
  return (
    <>
      <section className="box-center-row" id="Projects">
        <div className="subTitle">
          <h2>
            {" "}
            <MdOutlineAssignmentInd className="avatar" />
            Projects
          </h2>
        </div>
        <strong> Mega Project</strong> <hr />
        <div className="megaprojects">
          <div class="grid-item">
            <div className="Cards">
              <div className="Card-header">
                {/* <div className="card-avatar" /> */}

                <h2>class-360</h2>

                <h2>
                  {" "}
                  <MdOutlineLabel className="icon" />
                  {"\t"} final year Project
                </h2>
              </div>

              <h2 className="content">
                Android App which deals with the maintenance of the student's
                attendance, notices and class time-table. It automatically
                calculates the attendance percentage of students without any
                manual- paper based work
              </h2>
              <div className="bottom-button-export">
                {" "}
                <div className="text">
                  <b>Lang - React native</b>
                </div>
                <a
                  className="explorebtn"
                  href="https://docs.google.com/document/d/1ceKJlsidtzayzkLIDJIm-9Jag0rtBMr205f-gP-1cO8/edit?usp=sharing"
                >
                  <div className="text">
                    <h2>explore</h2>
                    <FiExternalLink className="icon" />
                  </div>
                </a>
              </div>
              <br />
            </div>
          </div>
          <div class="grid-item">
            <div className="Cards">
              <div className="Card-header">
                {/* <div className="card-avatar" /> */}
                <h2>Attendance </h2>
                <h2>
                  {" "}
                  <MdOutlineLabel className="icon" />
                  {"\t"} real world Project
                </h2>
              </div>
              <h2 className="content">
                android application that allows teachers to take attendance of
                the students registered in their class. after taking attendance
                we can download data in csv file into our device
              </h2>
              <div className="bottom-button-export">
                {" "}
                <div className="text">
                  <b>Lang - React native</b>
                </div>
                <a
                  className="explorebtn"
                  href="https://docs.google.com/document/d/1ceKJlsidtzayzkLIDJIm-9Jag0rtBMr205f-gP-1cO8/edit?usp=sharing"
                >
                  <div className="text">
                    <h2>explore</h2>
                    <FiExternalLink className="icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-head">
          <strong> Mini Project</strong> <hr />
        </div>
      </section>

      <div className="Skills">
        <div class="grid-container">
          {[
            {
              Title: "Personal Portfolio",
              link: "https://gksjfg.csb.app/",
              Lang: "React js",
              content:
                "Personal information about myself , just like different projects information about resuming and more.."
            },
            {
              Title: "Resume/cv",
              link: "https://stellular-cucurucho-1e21ec.netlify.app/",
              Lang: "React js",
              content:
                "This project contence resume/cv made using react js and we can download resume in pdf"
            },
            {
              Title: "wedding card",
              link: "https://reverent-golick-04598a.netlify.app",
              Lang: "React js",
              content:
                "brothers wedding card hosted in website fully resposive works in diffrent size of screen"
            },
            {
              Title: "authontication using javascript",
              link: "https://ju7i18.csb.app/Login",
              Lang: "React js",
              content:
                "In this project user can sign in and sign up Features (responsive , attractive ui and ux, animations, authontication using regex)"
            },
            {
              Title: "blog(web dev)",
              link: "https://lucky0011198.github.io/web-development-blog/",
              Lang: "React js",
              content: "blog  about web development basics "
            },
            {
              Title: "blog(android device managment)",
              link:
                "https://lucky0011198.github.io/android-device-managment-blog/",
              Lang: "html/css/js",
              content: "blog about how to manage android device "
            }
          ].map((i) => (
            <div class="grid-item">
              <div className="Cards">
                <div className="Card-header">
                  {/* <div className="card-avatar">
                   
                  </div> */}
                  <div>
                    <h2> {i.Title}</h2>
                  </div>
                </div>
                <h2 className="content">{i.content}</h2>
                <div className="bottom-button-export">
                  {" "}
                  <div className="text">
                    <b>React Js</b>
                  </div>
                  <a href={i.link} className="explorebtn">
                    <div className="text ">
                      <h2>explore</h2>
                      <FiExternalLink className="icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
