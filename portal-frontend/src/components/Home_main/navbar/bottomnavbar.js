import "./navbar.css";
import "../Home/Home.css";
import {
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function App() {
  const [Index, setIndex] = useState(0);

  return (
    <>
      {[
        { name: "home", icon: <BiHome /> },
        {
          name: "About",
          icon: <MdOutlineAssignmentInd />
        },
        { name: "Skills", icon: <MdOutlineAssignment /> },
        { name: "Projects", icon: <MdTurnedInNot /> },
        { name: "Contact", icon: <MdOutlineContacts /> }
      ].map((i, index) => (
        <>
          <a
            style={{ color: Index === index ? "black" : "#b3b3b3" }}
            href={`#${i.name}`}
            onClick={() => {
              setIndex(index);
            }}
          >
            {i.icon}
            <b>{i.name}</b>
          </a>
        </>
      ))}
    </>
  );
}
