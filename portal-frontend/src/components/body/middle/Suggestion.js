import React from 'react';
import './Suggestion.css'; // Import the CSS file for styles

const Suggestions = (props) => {
  const { recieveData  } = props;
  // console.log("hello: ",recieveData );
  // if (!recieveData  || !recieveData .generated_content) {
  //   return null; // Handle the case where data is undefined
  // }

  // Regular expressions to match the title and points
  const titleRegex = /\*\*(.*?)\*\*/g;
  const pointsRegex = /\* (.*?)\n/g;

  // Match the title and points
  let match;
  let titles = [];
  let points = [];
  while ((match = titleRegex.exec(recieveData .generated_content)) !== null) {
    titles.push(match[1]);
  }
  while ((match = pointsRegex.exec(recieveData .generated_content)) !== null) {
    points.push(match[1]);
  }

  return (
    <div  className='suggestions-container' >
      <h1 style={{
        marginBottom:"20px"
      }}>
        AI suggestions
      </h1>
        <h3>
          {JSON.stringify(recieveData)}
          </h3>
      {/* {titles.map((title, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
         
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default Suggestions;
