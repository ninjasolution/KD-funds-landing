// import React, { Component } from "react";

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       this.setState({
//         time: new Date(),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   formatTime = (number) => (number < 10 ? `0${number}` : number);

//   render() {
//     const { timezone, locationName } = this.props;
//     const { time } = this.state;

//     const hours = this.formatTime(time.getUTCHours());
//     const minutes = this.formatTime(time.getUTCMinutes());
//     const seconds = this.formatTime(time.getUTCSeconds());

//     return (
//       <div className="clock">
//         <div className="text-white text-opacity-90 text-2xl -mt-10">{locationName}</div>
//         <div className="digital-time roboto-mono text-sm text-white text-opacity-80 -mt-12">
//           {hours}:{minutes}:{seconds}
//         </div>
//         <div className="clock">
//           <div
//             className="hour_hand"
//             style={{
//               transform: `rotateZ(${(time.getUTCHours() % 12) * 30 + (time.getUTCMinutes() / 60) * 30}deg)`,
//             }}
//           />
//           {/* Add other clock hands and markings if needed */}
//         </div>
//       </div>
//     );
//   }
// }
