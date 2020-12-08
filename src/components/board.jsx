import React, { Component } from "react";
import TicTacToeContext from "../contexts/ticTacToeContext";
import BoardRow from "./boardRow";
class Board extends Component {
  state = {
    nextValue: "x",
  };
  changeValue = () => {
    const { nextValue } = this.state;
    if (nextValue === "_") {
      this.setState({ nextValue: "x" });
    } else if (nextValue === "x") {
      this.setState({ nextValue: "o" });
    } else if (nextValue === "o") {
      this.setState({ nextValue: "x" });
    }
  };
  render() {
    const { nextValue } = this.state;
    return (
      <TicTacToeContext.Provider
        value={{ nextValue, changeValue: this.changeValue }}
      >
        <table
          style={{
            margin: "auto",
            padding: "5px",
            marginTop: "150px",
            backgroundColor: "lightblue",
            width: "450px",
            height: "375px",
          }}
        >
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
