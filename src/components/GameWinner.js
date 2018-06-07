import React from "react";

const GameInfo = ({winner = 0, colorPlayer = "Black"}) => (
    <h3 style={{color:colorPlayer}}>Player {winner} YOU WIN!</h3>
);

export default GameInfo;