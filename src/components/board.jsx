import React, { Component } from 'react';
import BoardPiece from './boardPiece'
class Board extends Component {
    state = {}
    render() {
        return (<div style={{
            margin: "auto",
            padding: "5px",
            border: "1px solid black", marginTop: "150px", backgroundColor: "lightblue", width: "450px", height: "375px"
        }}>
            <div style={{ borderBottom: "3px solid black" }}>
                <BoardPiece></BoardPiece>
                <BoardPiece isCenter={true}></BoardPiece>
                <BoardPiece></BoardPiece>
            </div>
            <div style={{ borderBottom: "3px solid black" }}>
                <BoardPiece></BoardPiece>
                <BoardPiece isCenter={true}></BoardPiece>
                <BoardPiece></BoardPiece>
            </div>
            <div style={{}}>
                <BoardPiece></BoardPiece>
                <BoardPiece isCenter={true}></BoardPiece>
                <BoardPiece></BoardPiece>
            </div>
        </div>);
    }
}

export default Board;
