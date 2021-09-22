//import react and Jumbotron components
import React from "react";
import Jumbotron from "../components/Jumbotron";

//function in case there are matching issues
const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Cheese Gromit">
            🧀
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
