import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // State init. Avoids using constructor
  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    // Getting user location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // GOOD MODIFICATION OF SET STATE
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );

    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was updated!");
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
