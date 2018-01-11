import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let message = this.props.mine===true ? 'X' : ' ';

		return (
			<div className="cell" onClick={this.props.handleClick} spot={this.props.spot}>{message}</div>
		)
	}
}

export default Cell;