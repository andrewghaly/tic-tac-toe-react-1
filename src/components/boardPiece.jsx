import React, { Component } from 'react';
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
            <td className={`square ${centerClass} ${centerRowClass}`} onClick={() => this.xo(this.state.boardPieceValue)}>{this.state.boardPieceValue}</td>
        );

    }
}

export default BoardPiece;