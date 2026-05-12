import { useState } from "react";
import "./App.css";
import Madal from "./Components/Madal/Madal";
import Twitter from "./Components/Twitter/Twitter";
import Madal2 from "./Components/Madal2/Madal2";

function App() {
  const [showMadal, setShowMadal] = useState(false);
  const [showMadal2, setShowMadal2] = useState(false);
  
  return (
    <div>
      <Twitter setShowMadal={setShowMadal} setShowMadal2={setShowMadal2} />
      {showMadal && <Madal setShowMadal={setShowMadal} />}
      {showMadal2 && <Madal2 setShowMadal2={setShowMadal2}/>}
    </div>
  );
}

export default App;
