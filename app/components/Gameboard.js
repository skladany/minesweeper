import { Board } from '../game/board.js'
const React = require('react');

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			spots: '',
			lost: ''
		}
	}
	componentDidMount() {
		let board = new Board();

		//console.log( board );
		this.setState( () => {
			return {
				spots: board.spots
			}
		})
		console.log(board.spots);
		
	}	
	render() {
		let cells = Array.prototype.map.call(this.state.spots, (elem, i) => {
			return (<li key={i}>{elem.mine===true ? 'MINE' : 'clear'}</li>)
		}) ;
		return (
			<div>
				<h1>Minesweeper</h1>

				<div className="board-wrapper">
					{cells}
				</div>
			</div>
		)
	}
}

module.exports = Gameboard;