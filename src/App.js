import { useState } from "react";
import "./App.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  function onclickSquare(i) {
    if (i === null) {
    }
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setxIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="Board">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onClickHandler={() => onclickSquare(0)} />
          <Square value={squares[1]} onClickHandler={() => onclickSquare(1)} />
          <Square value={squares[2]} onClickHandler={() => onclickSquare(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClickHandler={() => onclickSquare(3)} />
          <Square value={squares[4]} onClickHandler={() => onclickSquare(4)} />
          <Square value={squares[5]} onClickHandler={() => onclickSquare(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClickHandler={() => onclickSquare(6)} />
          <Square value={squares[7]} onClickHandler={() => onclickSquare(7)} />
          <Square value={squares[8]} onClickHandler={() => onclickSquare(8)} />
        </div>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Square({ value, onClickHandler }) {
  return (
    <>
      <button className="Square" onClick={onClickHandler}>
        {value}
      </button>
      {/* <button className='Square' onClick={!onClickHandler} ></button> */}
    </>
  );
}

export default Board;
