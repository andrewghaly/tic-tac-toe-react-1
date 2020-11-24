import React, { Component } from 'react';
import BoardPiece from './boardPiece';

class BoardRow extends Component {
    state = {
    }
    componentDidMount() {
        let { isCenterRow } = this.props;
        if (isCenterRow === undefined) {
            isCenterRow = false;
        } else {
            isCenterRow = true;
        }

        this.setState({ isCenterRow })
    }
    render() {
        const { isCenterRow } = this.state;

        return (
            isCenterRow !== undefined &&
            <tr>
                <BoardPiece isCenterRow={isCenterRow}></BoardPiece>
                <BoardPiece isCenterRow={isCenterRow} isCenter={true}></BoardPiece>
                <BoardPiece isCenterRow={isCenterRow}></BoardPiece>
            </tr>);
    }
}

export default BoardRow;