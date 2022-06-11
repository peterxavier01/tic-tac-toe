import React, { useState } from "react";
import CalculateWinner from "./CalculateWinner";
import Square from "./Square";

import styled from "styled-components";

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`;

const BoardRow = styled.div`  
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`;

const RestartBtn = styled.button`
    padding: 10px 15px;
    color: #fff;
    background-color: hsl(182, 93%, 17%);
    border-color: #03b5aa;
    border-radius: 0.25rem;
    font-weight: 600;
    margin-top: 10px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:active {
        color: #fff;
        background-color: #03b5aa;
        border-color: #03b5aa;    
    }

    &:hover {
        color: #fff;
        background-color: #037971;
        cursor: pointer;
        border-color: #03b5aa;    
    }

    &:focus {
        box-shadow: 0 0 0 0.2rem #03b5aa;
    }
`

const Status = styled.div`
    margin-top: 10px;
    color: #fff;
    margin-bottom: .5em;
    font-weight: 600;
    font-size: 1.8rem;
`

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    let charStyle;

    const handleClick = (i) => {
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = isX ? 'X' : 'O';
        setSquares(squares);
        setIsX(!isX);
    }

    const winner = CalculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`; 
        console.log(winner);
    } else if (!squares.includes(null)) {
        status = `No winner: Draw`;
    } else {
        status = `Next player: ${isX ? 'X' : 'O'}`;
    }

    if (winner === 'X') {
        charStyle = {
            color: "hsl(159, 90%, 79%)"
        }
    }

    if (winner === 'O') {
        charStyle = {
            color: "hsl(300, 100%, 90%)"
        }
    }    

    const handleRestart = () => {
        setIsX(true);
        setSquares(Array(9).fill(null));
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    return ( 
        <BoardContainer>
            <Status style={charStyle}>{ status }</Status>
            <BoardRow>
                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }
            </BoardRow>
            <BoardRow>
                { renderSquare(3) }
                { renderSquare(4) }
                { renderSquare(5) }
            </BoardRow>
            <BoardRow>
                { renderSquare(6) }
                { renderSquare(7) }
                { renderSquare(8) }
            </BoardRow>
            <RestartBtn onClick={handleRestart}>Restart Game!</RestartBtn>
        </BoardContainer>
     );
}
 
export default Board;