const React = require('react');

class Cell extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mine: '',
			message: 'No mine'
		}

		this.handleClick  = this.handleClick.bind(this);

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
	handleClick() {
		this.setState( () => {
			mine: !this.state.mine
		})
		console.log("clicked");
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>{this.state.message}</button>
			</div>
		)
	}
}

module.exports = Cell;