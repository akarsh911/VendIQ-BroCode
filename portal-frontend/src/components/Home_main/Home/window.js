import { useState } from "react";
import "./window.css";
// import "../../styles.css";
import {
  MdOutlineSwapHoriz,
  MdOutlineRemoveRedEye,
  MdOutlineVisibilityOff
} from "react-icons/md";

export default function () {
  const [LP, setLp] = useState(0);
  const [RP, setRp] = useState(-100);
  const [Blure, setBlure] = useState(false);

  return (
    <div className="window-container">
      {/* <div className="bottom-button">
        <button
          onClick={() => {
            if (LP < 100) setLp(LP + 100);
            else setLp(LP - 100);
          }}
        >
          1<MdOutlineSwapHoriz className="sm" />
        </button>
        {"\t"}
        <button
          onClick={() => {
            if (RP > -100) setRp(RP - 100);
            else setRp(RP + 100);
          }}
        >
          2<MdOutlineSwapHoriz className="sm" />
        </button>

        <button
          onClick={() => {
            setBlure(!Blure);
          }}
        >
          {Blure ? (
            <MdOutlineVisibilityOff className="sm" />
          ) : (
            <MdOutlineRemoveRedEye className="sm" />
          )}
        </button>
      </div> */}
      <br />
      <main className="Window">
        <div
          className="window-side-pannle-1"
          style={{
            transform: `translateX(${LP}%)`,
            backdropFilter: Blure ? `blur(5px)` : "blur(0px)",
            backgroundColor: Blure ? "#ffffff6e" : "#00000062"
          }}
        >
          <button
            onClick={() => {
              if (LP < 100) setLp(LP + 100);
              else setLp(LP - 100);
            }}
          >
            <MdOutlineSwapHoriz className="sm" />
          </button>
        </div>
        <div
          className="window-side-pannle-2"
          style={{
            transform: `translateX(${RP}%)`,
            backdropFilter: Blure ? `blur(5px)` : "blur(0px)",
            backgroundColor: Blure ? "#ffffff6e" : "#00000062"
          }}
        >
          <button
            onClick={() => {
              if (RP > -100) setRp(RP - 100);
              else setRp(RP + 100);
            }}
          >
            <MdOutlineSwapHoriz className="sm" />
          </button>
          <button
            classname="blure"
            onClick={() => {
              setBlure(!Blure);
            }}
          >
            {Blure ? (
              <MdOutlineVisibilityOff className="sm" />
            ) : (
              <MdOutlineRemoveRedEye className="sm" />
            )}
          </button>
        </div>
      </main>
    </div>
  );
}
