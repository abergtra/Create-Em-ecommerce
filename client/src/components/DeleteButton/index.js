//import react
import React from "react";

//Function using props to include all passed props in this element
function DeleteBtn(props) {
    return (
      <span {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  export default DeleteBtn;
  