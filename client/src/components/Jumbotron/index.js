//import react
import React from "react";

//Function to display Jumbotron HTML
function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      >
        {children}
      </div>
    );
  }
  
  export default Jumbotron;
  