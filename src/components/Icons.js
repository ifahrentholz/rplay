import React from 'react';


// Player Button Icons
class ButtonIconSVG extends React.Component {
  render() {
    return (
      <svg
        className="rp-ctrl-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        {this.props.children}
      </svg>
    );
  }
}


// |> Play
export class PlayIconSVG extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ButtonIconSVG>
        <path d="M0 0 L32 16 L0 32 z"></path>
      </ButtonIconSVG>
    );
  }
}


// || Pause
export class PauseIconSVG extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ButtonIconSVG>
        <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"></path>
      </ButtonIconSVG>
    );
  }
}

// Mute
export class MuteIconSVG extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ButtonIconSVG>
        <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"></path>
      </ButtonIconSVG>
    );
  }
}
