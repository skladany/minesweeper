const React = require('react');

class Cell extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mine: '',
			message: 'No mine'
		}

		//console.log(props);

		//this.handleClick  = this.handleClick.bind(this);

		let message = '';
	}
	componentDidMount() {
		this.setState( () => {
			return {
				mine: this.props.mine,
				message: this.props.mine===true ? 'MINE' : 'clear'
			}
		})
	}	
	// handleClick() {
	// 	this.setState( function() {
	// 		return {
	// 			mine: !this.state.mine,
	// 			message: 'clicked'
	// 		}
	// 	})
	// 	console.log("clicked", this.state);
	// }
	render() {
		return (
			<div>
				<button onClick={this.props.handleClick}>{this.state.message}</button>
			</div>
		)
	}
}

module.exports = Cell;