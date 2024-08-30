import React, { Component } from 'react';


const location = window.location.href;

class EventBind extends Component {
    location = window.location.href;
	constructor(props) {
		super(props)
	
		this.state = {
            location: "/contact"
		}
	}

	clickHandler = () => {
		this.setState({
			location: "/",
		})
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>
				Click
				</button> 
			</div>
		)
	}
}

export default EventBind;
