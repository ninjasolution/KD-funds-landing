import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timezone,locationName } = this.props;
    const amsterdamTime = this.state.time.toLocaleTimeString("en-US", {
      timeZone: timezone,
    });
    const [hours, minutes, seconds] = amsterdamTime.split(/:| /);
    return (
      <div className="clock">
        <div className="text-white text-2xl -mt-10">{locationName}</div>
        <div className="digital-time roboto-mono text-sm text-white -mt-12">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="clock">
          <div
            className="hour_hand"
            style={{
              transform: `rotateZ(${
                (hours % 12) * 30 + (minutes / 60) * 30
              }deg)`,
            }}
          >
          </div>
          {/* <div
          className="min_hand"
          style={{
            transform: `rotateZ(${minutes * 6 + (seconds / 60) * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${seconds * 6}deg)`
          }}
        /> */}

          {/* <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span> */}
        </div>
      </div>
    );
  }
}
