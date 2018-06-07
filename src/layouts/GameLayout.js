import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import GameWinner from "../components/GameWinner";



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
      winner: 0,
      playerID: 1,
      colorPlayer: gameColors.Red
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  isWinner(){
    let j = 0;
    let cpt = 0;

    for (let i = 0; i < 9; i += 3, j + 1){
      if (this.state.cells[i] === this.state.cells[i + 1] && this.state.cells[i] === this.state.cells[i + 2]){
        this.state.winner = this.state.cells[i];
      }

      if (this.state.cells[j] === this.state.cells[j + 3] && this.state.cells[j] === this.state.cells[j + 6]) {
          this.state.winner = this.state.cells[j];
      }
    }

    for (; cpt < 9; ++cpt){
      if (this.state.cells[cpt] === null){
        break
      }
    }

    if (cpt === 9){
      this.state.winner = -1;
    }

    if (this.state.cells[0] === this.state.cells[4] && this.state.cells[0] === this.state.cells[8]) {
        this.state.winner = this.state.cells[0];
    }

    if (this.state.cells[2] === this.state.cells[4] && this.state.cells[2] === this.state.cells[6]) {
        this.state.winner = this.state.cells[2];
    }
    return this.state.winner;
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
    this.isWinner();
    return (
      <div style={gameLayoutStyle}>
        <GameInfo playerId={this.state.playerID} colorPlayer={this.state.colorPlayer}
                  winner={() => this.state.isWinner()}/>
        {this.state.winner === null ?
        <Board cells={this.state.cells} playerID={this.state.playerID}
            onClickCell={(id) => this.clickCell(id)}/> :
            <GameWinner colorPlayer={this.state.colorPlayer}
                      winner={this.state.winner}/>}
      </div>
    );
  }
}

export default GameLayout;
