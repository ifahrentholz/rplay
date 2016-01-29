import React, { Component } from "react";
import {
  PlayButton,
  Played,
  Seekbar,
  Duration,
  MuteButton,
  Volume
} from "../components";

class Player extends Component {
  render() {
    return (
      <div class="rp-videoplayer">
        <PlayButton {...this.props} />
      </div>
    )
  }
}

class BasicPlayer extends Component {
  render() {
    return (
      <Player />
    )
  }
}


export default BasicPlayer;