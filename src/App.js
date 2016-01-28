import React from "react";
import ReactDOM from "react-dom";
import Fileplayer from "./players/FilePlayer";

// set the props
class App extends React.Component {
  componentDidMount() {
    console.log(this.props.setup.urls);
  }

  render() {
    return (
      <Fileplayer />
    )
  }
}

// Instantiate the players
let addTo = Array.from(document.getElementsByClassName("rplay"));
addTo.forEach(function(elem) {
  let data = JSON.parse(elem.dataset.rplaySetup);
  ReactDOM.render(<App setup={data} />, elem);
});
