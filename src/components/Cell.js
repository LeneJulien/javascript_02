import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "5px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellOn = {
    display: "block",
    backgroundColor: "white",
    width: "200px",
    height: "200px",
    border: "5px solid #777",
    outline: "none",
    textAlign: "center",
    lineHeight: "200px",
    cursor: "pointer"
};

const not = {};

const cross = {
  background: "red",
  height: "100px",
  alignContent: "center",
  position: "relative",
  transform: "rotate(45deg)",
  top: "25%",
  left: "46%",
  width: "20px",
};
const crosss ={
  background: "red",
  height: "20px",
  left: "-40px",
  position: "relative",
  top: "40px",
  width: "100px"
};

const circle = {
    position: "relative",
    top: "25%",
    left: "25%",
    fontSize: "10em",
    width: "0.4em",
    height: "0.4em",
    border: "0.1em solid blue",
    borderRadius: "0.35em"
};

/*const Cell = () => <div style={cellStyle}>?</div>;*/

class Cell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isMouseOver: false
        }

    }

    handlerMouseOver() {
      this.setState({isMouseOver: true});
    }

    handlerMouseOut() {
        this.setState({isMouseOver: false});
    }
    :

    render() {
        return (
            <div
                style={this.state.isMouseOver ? cellOn : cellStyle}
                onMouseOver={() => this.handlerMouseOver()}
                onMouseOut={() => this.handlerMouseOut()}
                onClick= {this.props.onClick}
            >
                <div style={this.props.playerID === 2 ? circle : not}> </div>
                <div style={this.props.playerID === 1 ? cross : not}>
                <div style={this.props.playerID === 1 ? crosss : not}></div></div>

            </div>
        );
    }
}

export default Cell;
