import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown", colorPlayer = "Black"}) => (
        <h3 style={{color:colorPlayer}}>It's your turn {currentPlayer}</h3>
);

export default GameInfo;
