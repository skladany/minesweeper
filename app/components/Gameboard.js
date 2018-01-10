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

		this.setState( () => {
			return {
				spots: board.spots
			}
		})
		console.log(board.spots);
	}	
	handleClick(event) {

		let spot = event.target.getAttribute("spot");

		let updatedSpots = this.state.spots;

		let mine = !updatedSpots[spot].mine;

		updatedSpots[spot] = {
			cleared: false,
			mine: mine
		}

		this.setState( () => {
			return {
				spots: updatedSpots
			}
		})

		console.log(updatedSpots);
	}
	render() {
		let cells = Array.prototype.map.call(this.state.spots, (elem, i) => {
			return (
				<Cell key={i} spot={i} mine={elem.mine} handleClick={this.handleClick} />
			)
		})

		return (
			<div>
				<h1>Minesweeper</h1>

				<div className="board">
					{cells.map( (elem, i) => {
						if (i%30) {
							return (
								<div>elem
							)
						}
					})}
				</div>
			</div>
		)
	}
}

module.exports = Gameboard;