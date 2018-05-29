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


/*const Cell = () => <div style={cellStyle}>?</div>;*/

class Cell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isMouseOver: false,
          playerID: 1
        }

    }

    handlerMouseOver() {
      this.setState({isMouseOver: true});
    }

    handlerMouseOut() {
        this.setState({isMouseOver: false});
    }

    render() {
        return (
            <div
                style={this.state.isMouseOver ? cellOn : cellStyle}
                onMouseOver={() => this.handlerMouseOver()}
                onMouseOut={() => this.handlerMouseOut()}
                //onClick={(color) => this.setState({ colorPlayer: color })}
            >
            </div>
        );
    }
}

export default Cell;
