import React, { Component } from 'react';
import TicTacToeContext from '../contexts/ticTacToeContext'

class BoardPiece extends Component {
    state = {
        isCenter: false,
        isCenterRow: false,
        boardPieceValue: "_"
    }

    componentDidMount() {
        let { isCenter, isCenterRow } = this.props;
        if (isCenter === undefined) {
            isCenter = false;
        } else {
            isCenter = true;
        }

        // if (isCenterRow === undefined) {
        //     isCenterRow = false;
        // } else {
        //     isCenterRow = true;
        // }


        this.setState({ isCenter, isCenterRow })
    }

    xo(boardPieceValue) {
        console.log(boardPieceValue)
        if (boardPieceValue === "_") {
            this.setState({ boardPieceValue: "x" })
        }
        else if (boardPieceValue === "x") {
            this.setState({ boardPieceValue: "o" })


        }
        else if (boardPieceValue === "o") {
            this.setState({ boardPieceValue: "_" })


        }
    }


    render() {
        const centerClass = this.state.isCenter ? "v " : "";
        const centerRowClass = this.state.isCenterRow ? "h" : "";

        return (
            <TicTacToeContext.Consumer >
                {value =>
                    <td className={`square ${centerClass} ${centerRowClass}`}
                        onClick={() => this.xo(value)}>{this.state.boardPieceValue}
                    </td>
                }

            </TicTacToeContext.Consumer>
        );

    }
}

export default BoardPiece;