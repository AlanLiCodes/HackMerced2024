// import React from "react";
// import Routes from "./Routes";
// import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes />
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
    <h1>{message}</h1>
    </div>
     <Routes />
    </Router>
    
  );
}

export default App