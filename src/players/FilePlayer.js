import React from "react";

import Stage from "../components/Stage";
import PlayButton from "../components/PlayButton";
import Played from "../components/Played";
import Seekbar from "../components/Seekbar";
import Duration from "../components/Duration";
import MuteButton from "../components/MuteButton";
import VolumeSlider from "../components/Volume";

export default class FilePlayer extends React.Component {
  render() {
    return (
      <div>
        <Stage />
        <div className="rp-ctrls">
          <PlayButton />
          <Played />
          <Seekbar />
          <Duration />
          <MuteButton />
          <VolumeSlider />
        </div>
      </div>
    )
  }
}


