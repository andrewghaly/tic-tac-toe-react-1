import React, { Component } from 'react';
import TicTacToeContext from '../contexts/ticTacToeContext'
import BoardRow from './boardRow';
class Board extends Component {
    state = {}
    changeValue = () => {

    }
    render() {
        return (
            <TicTacToeContext.Provider value={{ nextValue: "x", changeValue: this.changeValue }}>
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
            </TicTacToeContext.Provider>
        );
    }
}

export default Board;
