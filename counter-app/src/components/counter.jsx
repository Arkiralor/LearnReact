import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imangeURL: "https://picsum.photos/200"
  };

  globalStyles = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  render() {

    return (
      <React.Fragment>
        {/* <img src={this.state.imangeURL} alt=""/> */}
        <span style={this.globalStyles} className={ this.classResolver() }>
          {" "}
          {this.formatCount()} Items in Basket{" "}
        </span>
        <button
          style={{ fontSize: 24 }}
          className="btn btn-secondary btn-sm m-2 p-2"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  classResolver() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    let format = "";
    if (count === 0) {
      format = "ZERO";
    } else {
      format = count;
    }
    return format;
  }
}

export default Counter;

// class Counter extends Component {
//     state = {
//         count: 0,
//         fullName: {
//             firstName: "John",
//             lastName: "Doe"
//         },
//         address: {
//             house_no: "34",
//             street: "Lincoln Avenue",
//             locality: "Hilborough",
//             city: "Hillview Port",
//             state: "South Jameson",
//             zip: "34097"
//         }
//     };
//     render() {
//         return (
//         <React.Fragment>
//             <span>Hello {this.state.fullName.firstName}, from {this.state.address.city}, {this.state.address.state}</span>
//             <button>Increment</button>
//         </React.Fragment>
//         );
//     }
// }

// export default Counter;
