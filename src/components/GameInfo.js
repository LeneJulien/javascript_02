import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", playerId = 0, currentPlayer = "unkown", colorPlayer = "Black"}) => (
        <h3 style={{color:colorPlayer}}>It's your turn player {playerId}</h3>
);

export default GameInfo;
