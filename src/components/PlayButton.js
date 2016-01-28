import React from "react";
import { PlayIconSVG, PauseIconSVG } from "./Icons";

class PlayButton extends React.Component {
  render() {
    return (
      <button className="rp-ctrl rp-ctrl-play">
        <PlayIconSVG />
      </button>
    )
  }
}

export default PlayButton;