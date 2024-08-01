import "../Home/Home.css";
// import "../../styles.css";
import { MdOutlineAssignmentInd } from "react-icons/md";
export default () => {
  return (
    <div className="box-center-row" id="Skills">
      <div className="subTitle">
        <h2>
          {" "}
          <MdOutlineAssignmentInd className="avatar" />
          Skills
        </h2>
      </div>
      <div className="Skills">
        <div class="grid-container">
          {[
            {
              content:
                "Basic understanding about functions ,loops , arrays and object oriented programming concepts ",
              Title: "Python",
              per: "40%"
            },
            {
              content:
                "Basic understanding about functions ,loops , arrays and hashing",
              Title: "java",
              per: "50%"
            },
            {
              content:
                "export in designing better understanding about ui/ux,css animations,javascript-arrays,objects..ect",
              Title: "html/css/js",
              per: "80%"
            },
            {
              content:
                "knowledge about  recat js and recat native can impliment website and android app",
              Title: "React",
              per: "85%"
            },
            {
              content:
                " can design illustriator for website and apps , background img for cards ",
              Title: "Adobe Xd",
              per: "70%"
            }
          ].map((i) => (
            <div class="grid-item">
              <div className="Cards">
                <div className="Card-header">
                  <h2>
                    {i.Title} {/* <span>subTitle</span> */}
                  </h2>
                  <div className="card-avatar">
                    <h2>{i.per}</h2>
                  </div>
                </div>
                <h2 className="content">{i.content}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
