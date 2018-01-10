import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	mine: '',
		// 	spot: '',
		// 	message: 'No mine'
		// }

		//console.log(props);

		//this.handleClick  = this.handleClick.bind(this);

		//var message = 'foobar';
	}
//	componentDidMount() {
		// this.setState( () => {
		// 	return {
		// 		mine: this.props.mine,
		// 		spot: this.props.spot,
		// 		message: this.props.mine===true ? 'MINE' : 'clear'
		// 	}
		// })
		//let foo = "bar";
//	}	
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
		let message = this.props.mine===true ? 'MINE' : 'clear';

		return (
			<button onClick={this.props.handleClick} spot={this.props.spot}>{message}</button>
		)
	}
}

export default Cell;