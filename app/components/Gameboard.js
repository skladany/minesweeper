import { Board } from '../game/board.js'
import React from 'react';
import Col  from './Col';
import Cell from './Cell';

class Gameboard extends React.Component {
	constructor(props) {
		super(props);

		let board = new Board();

		this.state = {
			spots: board.spots,
			lost: '',
			clearSpot: board.clearSpot
		}

		// 
		console.log( board.clearSpot );
		//this.board = this.props;

		this.handleClick  = this.handleClick.bind(this);
		
	}
	componentDidMount() {
		
		//let board = new Board();
		// this.setState( () => {
		// 	return {
		// 		spots: this.state.board.spots
		// 	}
		// })


	}	
	handleClick(event) {
		

		let spot = event.target.getAttribute("spot");

		let updatedSpots = this.state.spots;

		let mine = !updatedSpots[spot].mine;

		updatedSpots[spot] = {
			cleared: false,
			mine: mine
		}

		this.state.clearSpot(2);

		this.setState( () => {
			return {
				spots: updatedSpots
			}
		})

		console.log(this.state.board);
	}
	render() {
		let cells = Array.prototype.map.call(this.state.spots, (elem, i) => {
			return (
				<Cell key={i} spot={i} mine={elem.mine} handleClick={this.handleClick} />
			)
		})
		let columns = [];
		for (var i = 0; i < 450; i=i+15) {
		    columns.push(<Col>{cells.slice(i,i+15)}</Col>);
		}

		return (
			<div>
				<h1>Minesweeper</h1>

				<div className="board">
					{columns}					
				</div>
			</div>
		)
	}
}

export default Gameboard;