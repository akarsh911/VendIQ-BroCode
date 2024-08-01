import "./navbar.css";
import "../Home/Home.css";
import {
  MdKeyboardArrowUp,
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function App() {
  const [active, setactive] = useState([1, 0, 0, 0]);
  const [show, hide] = useState(false);
  let temp = [0, 0, 0, 0];

  return (
    <div className="item-container">
      <div style={{ visibility: show ? "hidden" : "visible" }}>
        {[
          { name: "home", icon: <BiHome className="avatar" /> },
          {
            name: "About",
            icon: <MdOutlineAssignmentInd className="avatar" />
          },
          { name: "Skills", icon: <MdOutlineAssignment className="avatar" /> },
          { name: "Projects", icon: <MdTurnedInNot className="avatar" /> },
          { name: "Contact", icon: <MdOutlineContacts className="avatar" /> }
        ].map((i, index) =>
          active[index] ? (
            <div className="active" data-foo={i.name}>
              {i.icon}
            </div>
          ) : (
            <a href={`#${i.name}`}>
              <div
                className="inactive"
                data-foo={i.name}
                onClick={() => {
                  temp[index] = 1;
                  setactive(temp);
                }}
              >
                {i.icon}
              </div>
            </a>
          )
        )}
      </div>
      {/* <div className="boll">
        <MdKeyboardArrowUp
          style={{ height: "100%" }}
          onClick={() => {
            hide(!show);
          }}
        />
      </div> */}
    </div>
  );
}
