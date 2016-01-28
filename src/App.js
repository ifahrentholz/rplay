import React from "react";
import ReactDOM from "react-dom";
import Fileplayer from "./players/FilePlayer";

require("./stylesheets/main.scss");

// set the props
class App extends React.Component {
  render() {
    return (
      <Fileplayer />
    )
  }
}

App.propTypes = {
  setup: React.PropTypes.object
};

// Instantiate the players
let addTo = Array.from(document.getElementsByClassName("rplay"));
addTo.forEach(function(domNode) {
  let data = JSON.parse(domNode.dataset.rplaySetup);
  ReactDOM.render(<App setup={data}/>, domNode);
});
