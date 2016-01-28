import React from "react";
import { MuteIconSVG } from "./Icons";

class MuteButton extends React.Component {
  render() {
    return (
      <button className="rp-ctrl rp-ctrl-mute">
        <MuteIconSVG />
      </button>
    )
  }
}


export default MuteButton;