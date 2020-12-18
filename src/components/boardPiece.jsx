import React, { Component } from "react";
import TicTacToeContext from "../contexts/ticTacToeContext";

class BoardPiece extends Component {
  state = {
    isCenter: false,
    isCenterRow: false,
    boardPieceValue: "_",
  };

  componentDidMount() {
    let { isCenter, isCenterRow } = this.props;
    if (isCenter === undefined) {
      isCenter = false;
    } else {
      isCenter = true;
    }

    this.setState({ isCenter, isCenterRow });
  }

  changeBoardPieceValue = (context) => {
    let { boardPieceValue } = this.state;

    if (boardPieceValue === "_") {
      this.setState({ boardPieceValue: context.nextValue });
      context.changeValue()
    }
  };

  render() {
    const centerClass = this.state.isCenter ? "v " : "";
    const centerRowClass = this.state.isCenterRow ? "h" : "";
    const { boardPieceValue } = this.state;

    return (
      <TicTacToeContext.Consumer>
        {(context) => (
          <td
            className={`square ${centerClass} ${centerRowClass}`}
            onClick={() => this.changeBoardPieceValue(context)}
          >
            {boardPieceValue}
          </td>
        )}
      </TicTacToeContext.Consumer>
    );
  }
}

export default BoardPiece;