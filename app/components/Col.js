import React from 'react';

class Col extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="col">{this.props.children}</div>
		)
	}
}

export default Col;