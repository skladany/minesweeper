import { Board } from '../game/board.js'
var React = require('react');

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		let board = new Board();
		
		console.log( board.spots );

		//console.log(Board.Board.generateBoard());
		//this.generateBoard()
	}
	render() {
		return (
			<div>
				<h1>Minesweeper</h1>

				<div className="board-wrapper">

				</div>
			</div>
		)
	}
}

module.exports = Gameboard;