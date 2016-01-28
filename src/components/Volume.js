import React from "react";

class VolumeSlider extends React.Component {
  render() {
    return (
      <div className="rp-ctrl rp-ctrl-volume">
        <input type="range" min="0" max="1" step="0.01" />
      </div>
    )
  }
}


export default VolumeSlider;