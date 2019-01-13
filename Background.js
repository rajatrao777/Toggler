import React from "react";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: false, translate: "", colour: "", back: "" };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ click: !this.state.click });
    if (!this.state.click) {
      this.setState({ translate: 48, colour: "green", back: "#acdeaa" });
    } else {
      this.setState({ translate: 0, colour: "red", back: "#ff6473" });
    }
  }

  render() {
    // console.log(this.state.colour);
    return (
      <div className="container__background">
        <div
          className="container__layout"
          style={{
            borderColor: `${this.state.colour}`,
            background: `${this.state.back}`
          }}
        >
          <div
            className="container__knob"
            onClick={this.click}
            style={{
              transform: `translateX(${this.state.translate}px)`,
              background: `${this.state.colour}`
            }}
          />
        </div>
        <div
          className="container__toggle-caption"
          style={{ color: `${this.state.colour}` }}
        >
          {this.state.click === true ? "N" : "FF"}
        </div>
      </div>
    );
  }
}
export default Background;
