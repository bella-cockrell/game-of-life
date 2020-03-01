import React, { Component } from 'react';

/* export default function BoardGrid() {

}
*/

const BoardGrid = ({boardStatus, onToggleCellStatus}) => {
  const handleClick = (r, c) => onToggleCellStatus(r, c);

  const tr = [];
  for (let r = 0; r < totalBoardRows; r++) {
    const td = [];
    for (let c = 0; c < totalBoardColumns; c++) {
      td.push(
        <td
          key = {`${r}, ${c}`}
          className = {boardStatus[r][c] ? 'alive' : 'dead'}
          onClick = {() => handleClick(r, c)}
        />
      );
    }
    tr.push(<tr key = {r}>{td}</tr>);
  }
  return <table><tbody>{tr}</tbody></table>
};

/*This is a function component that creates the board grid and assigns it
to a variable. It recieves the state of the whole board and a method
that allows users to toggle the status of individual cells as props.
This method is defined on the main component.

Each cell is represented by a table's <td> and has a className attribute. This
value depends on the boolean of the board cell. The player clicking on a cell
results in the method passed as props being called with the cell's row and
column location as the argument.
*/


