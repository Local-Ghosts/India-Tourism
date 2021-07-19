import React from "react";
import "./index.css";

class Display extends React.Component {
  constructor() {
    super();

    this.state = {
      firstActive: false,
      secondActive: false,
      firsthide: false,
    };
  }

  componentDidMount() {
    this.setState({ firstActive: true });

    setTimeout(() => {
      this.setState({ firstActive: false });
      this.setState({ firsthide: true });
      this.setState({ secondActive: true });
    }, 3000);
  }

  render() {
    return (
      <div id="display-animation">
        <section
          className={`first${this.state.firstActive ? " active" : ""}${
            this.state.firsthide ? " hide" : ""
          }`}
        ></section>
        <section
          className={`second ${this.state.secondActive ? "active" : ""}`}
        ></section>
        <div class="sp-container">
          <div class="sp-content">
            <div class="sp-globe"></div>
            <h2 class="frame-1">Welcome</h2>
            <h2 class="frame-2">To India</h2>
            <h2 class="frame-3">The Place to be</h2>
            <h2 class="frame-4">🙏</h2>
            <h2 class="frame-5">
              <span>Live,</span>
              <span>Travel,</span>
              <span>Love</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
