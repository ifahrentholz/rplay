import React from "react";

class Seekbar extends React.Component {
  render() {
    return (
      <div className="rp-ctrl rp-ctrl-seekbar">
        <input type="range" min="0" max="100" value="0" />
      </div>
    )
  }
}


export default Seekbar;