import React, { Component } from 'react';
import BoardRow from './boardRow';
class Board extends Component {
    state = {}
    render() {
        return (
            <table style={{
                margin: "auto",
                padding: "5px",
                marginTop: "150px", backgroundColor: "lightblue", width: "450px", height: "375px"
            }}>
                <tbody>
                    <BoardRow></BoardRow>
                    <BoardRow isCenterRow={true}></BoardRow>
                    <BoardRow></BoardRow>
                </tbody>
            </table>
        );
    }
}

export default Board;
