import { Board } from '../game/board.js'
const React = require('react');
const Cell  = require('./Cell');

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			spots: '',
			lost: ''
		}

		this.handleClick  = this.handleClick.bind(this);
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
	handleClick() {
		console.log("this was clicked");
	}
	render() {
		return (
			<div>
				<h1>Minesweeper</h1>

				<div className="board-wrapper">
					<button onClick={this.handleClick}>Button</button>
					{Array.prototype.map.call(this.state.spots, (elem, i) => {
						return (<Cell key={i} mine={elem.mine} onClick={this.handleClick} />)
					})}
				</div>
			</div>
		)
	}
}

module.exports = Gameboard;