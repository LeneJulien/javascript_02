import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({ cells = [], onClickCell, onCell}) => (
  <div style={boardStyle}>{cells.map((c, index) => <Cell onClick={() => onClickCell(index)}/>)}</div>
);

export default Board;
