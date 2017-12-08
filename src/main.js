import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

/**
 * Add event listener to attach React component into the DOM.
 */
document.addEventListener(
    "DOMContentLoaded", 
    () => {
        ReactDOM.render(
            <Counter />,
            document.getElementById("mount")
        );
    }
);