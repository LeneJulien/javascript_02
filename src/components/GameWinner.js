import React from "react";

const GameWinner = ({winner = 0, colorPlayer = "Black"}) => (
    <h3 style={{color:colorPlayer}}>Player {winner} YOU WIN!</h3>
);

export default GameWinner;