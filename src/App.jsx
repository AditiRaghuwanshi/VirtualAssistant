// import va from "./assets/ai.png";
// import './App.css';
// import { FaMicrophoneAlt } from "react-icons/fa";
// import { datacontext } from "./context/UserContext";
// import { useContext } from "react";
// function App() {
//   let {recognition} = useContext(datacontext)
 
//   const [isRecognitionActive, setIsRecognitionActive] = useState(false);

//   return (
//     <div className="main">

//         <img src={va} alt="" id="assistant" />
//         <span>Here your virtual assistant</span>
//         <button onClick = {() => 
//           recognition.start()
//         }>Click Here <FaMicrophoneAlt /></button>
//     </div>
//   )
// }

// export default App





import va from "./assets/ai.png";
import './App.css';
import { FaMicrophoneAlt } from "react-icons/fa";
import { datacontext } from "./context/UserContext";
import { useContext, useState } from "react";
import speakimg from "./assets/speak.gif";
import { DiBackbone } from "react-icons/di";

function App() {
  let { recognition,speaking,setSpeaking } = useContext(datacontext);

  // Track whether recognition is running
  const [isRecognitionActive, setIsRecognitionActive] = useState(false);

  const handleClick = () => {
    if (!isRecognitionActive) {
      try {
        recognition.start();
        setIsRecognitionActive(true); // Update state to reflect that recognition has started
        recognition.onend = () => {
          setIsRecognitionActive(false); // Reset state when recognition ends
        };
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    } else {
      console.log("Speech recognition is already running.");
    }
  };

  return (
    <div className="main">
      <img src={va} alt="Virtual Assistant" id="assistant" />
      <span>Here your virtual assistant</span>
      {!speaking ?
      <button onClick={()=>{
        setSpeaking(true)
        recognition.start()
        }} > Click Me<FaMicrophoneAlt />
        </button>
        : 
        <div>

          <img src={speakimg} alt="" />
          </div>



      }
     
    </div>
  );
}

export default App;
