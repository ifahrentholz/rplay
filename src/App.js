import React from "react";
import ReactDOM from "react-dom";

require("./stylesheets/main.scss");

// set the props
class App extends React.Component {
  render() {
    return (
      <div className="rplay">
        <video width="100%" height="auto" preload="false">
          <source src="../assets/videos/movie_300.mp4" type="video/mp4"></source>
          <source src="../assets/videos/movie_300.webm" type="video/webm"></source>
        </video>
        <div className="rp-ctrls">
          <button className="rp-ctrl rp-ctrl-play">
            Play
          </button>
          <div className="rp-ctrl rp-ctrl-played">
            00:00
          </div>
          <div className="rp-ctrl rp-ctrl-seekbar">
            <input type="range" min="0" max="100" defaultValue="0"/>
          </div>
          <div className="rp-ctrl rp-ctrl-duration">
            00:00
          </div>
          <button className="rp-ctrl rp-ctrl-mute">
            Mute
          </button>
          <div className="rp-ctrl rp-ctrl-seekbar">
            <input type="range" min="0" max="1" step="0.01" defaultValue="0.8"/>
          </div>
        </div>
      </div>
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
  ReactDOM.render(<App setup={data} />, domNode);
});
