import React, { Component } from 'react';
class BoardPiece extends Component {
    state = {
        isCenter: false,
        boardPieceValue: "_"
    }

    componentDidMount() {
        let { isCenter } = this.props;
        if (isCenter === undefined) {
            isCenter = false;
        } else {
            isCenter = true;
        }

        this.setState({ isCenter })
    }
    applyStyle(isCenter) {
        if (isCenter) {
            return {
                fontSize: "100px",
                borderLeft: "3px solid black",
                borderRight: "3px solid black",
                padding: "50px",
                fontSize: "100px",
                width: "50px"

            }
        }
        else {
            return {
                marginRight: "50px",
                marginLeft: "50px",
                fontSize: "100px",
                width: "50px"
            }
        }
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
        const boardPieceStyle = this.applyStyle(this.state.isCenter)
        // const boardPieceValue = this.is.xo(this.state.boardPieceValue)


        return (
            <span style={boardPieceStyle} onClick={() => this.xo(this.state.boardPieceValue)}>{this.state.boardPieceValue}</span>
        );

    }
}

export default BoardPiece;