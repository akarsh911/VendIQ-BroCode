import React, { useEffect, useState, useRef } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import axios from 'axios';

import './Dictaphone.css';

const Dictaphone = (props) => {
  const [count, setCount] = useState(0);
  const { updateSharedData } = props;
  const [fullTranscript, setFullTranscript] = useState('');
  const transcriptBoxRef = useRef(null);
  const {
    transcript,
    listening,
    finalTranscript,
    interimTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      // startListening();
      SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
    }
  }, [browserSupportsSpeechRecognition]);
useEffect(() => {
   if(listening)
   {
    console.log("listening");
   }
   else{
    // if(!fullTranscript.length||!transcript.length){
    //   SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
    //   return;
    // }
    console.log(transcript);
    setFullTranscript(prevTranscript => prevTranscript + ' ' + transcript);
    if(fullTranscript.length&&transcript.length){
      
      
    const sentences = fullTranscript.split('.').map(sentence => sentence.trim()).filter(Boolean);
    const dataToSend = {
      headlines: sentences.map(sentence => ({ headline: sentence }))
    };
    const geminiData={
      "prompts": [
         "You are a Telecaller Assistant for a bank and answer all the quries of the customer",
      ]
  }
  // if(geminiData.prompts.length<=count){
  //   SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
  //   return;
  // }
  // setCount(count+1);
    geminiData.prompts[1]="Hello! "
  if(sentences.length>0)
  geminiData.prompts[1]=sentences[sentences.length-1];
  
    // Make a POST request with the data
  
    // sentences.forEach(sentence => {
    //   geminiData.prompts.push(sentence);
    // })
    if(sentences.length>0)
    axios.post('https://kanii1.smartsavaari.in/analyze', dataToSend)
      .then(response => {
        // axios.post('https://kanii2.smartsavaari.in/generate', geminiData)
        axios.post('http://localhost:5002/process', geminiData)
        .then(response2 => {
          console.log('SENTIMENT request successful:', response.data);
          console.log('GEMINI request successful:', response2.data);
          const resp={
            "sentiment":response.data,
            "gemini":response2.data.response
          }
          console.log(response2.data.response);
          updateSharedData(resp);
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
    }
   
  

    resetTranscript(); 
    console.log("not listening");
    scrollToBottom();
    SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
   }
  
}, [listening]);
const scrollToBottom = () => {
  if (transcriptBoxRef.current) {
    transcriptBoxRef.current.scrollTop = transcriptBoxRef.current.scrollHeight;
  }
};
//   useEffect(() => {
//      console.log(finalTranscript);
//      resetTranscript();
//      SpeechRecognition.startListening({ continuous: false , language: 'en-IN'});
//   }, [finalTranscript]);
//   useEffect(() => {
//     console.log(interimTranscript);
    
//     // resetTranscript();
//     // SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
//  }, [interimTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='small' ref={transcriptBoxRef}>
      <h1 className='statusheading'>Status</h1>
      <h2>{listening ? 'Listening' : 'Observing'}</h2>
      <p className='transcript'>{fullTranscript}</p>
    </div>
  );
};

export default Dictaphone;