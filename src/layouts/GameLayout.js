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
      //currentPlayer: "player 1",
      playerID: 1,
      colorPlayer: gameColors.Red
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  clickCell(i){
    if (this.state.cells[i] !== null){
      return;
    }
    let newCells = [...this.state.cells];
    newCells[i] = this.state.playerID;
    this.setState({cells: newCells,
        colorPlayer: this.state.playerID === 2 ? gameColors.Red : gameColors.Blue,
        playerID: this.state.playerID === 1 ? 2 : 1})
  }

  render() {
    return (
      <div style={gameLayoutStyle}>
        <GameInfo playerId={this.state.playerID} colorPlayer={this.state.colorPlayer}/>
        <Board cells={this.state.cells} playerID={this.state.playerID}
            onClickCell={(id) => this.clickCell(id)}/>
      </div>
    );
  }
}

export default GameLayout;
