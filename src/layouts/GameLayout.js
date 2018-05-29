import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";



const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};


let gameColors = {
    "Blue": "#00B1E1",
    "Red": "#E9573F",
    "Black": "#373131"
}

class GameLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      playerID: 1,
      colorPlayer: gameColors.Blue
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
        onClick={() => this.setState({ currentPlayer: "toto", colorPlayer:gameColors.Red })}
        //onMouseOver={(cell) => this.setState({cells: Array(cell).fill(Cell({isMouseOver: true}))})}
      >
        <GameInfo currentPlayer={this.state.currentPlayer} colorPlayer={this.state.colorPlayer}/>
        <Board cells={this.state.cells} /*onClickCell={(id) => this.setState({currentPlayer: id})}*//>
      </div>
    );
  }
}

export default GameLayout;
