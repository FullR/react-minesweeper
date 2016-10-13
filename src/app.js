import "babel-polyfill";
import "normalize-css/normalize.css";
import "index.html";
import ReactDOM from "react-dom";
import React from "react";
import ready from "util/ready";
import App from "components/App";;

function entry() {
  ReactDOM.render(<App/>, document.querySelector("#app"));
}

ready.then(entry);
