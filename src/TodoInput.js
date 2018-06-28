import React, { Component } from 'react';

class TodoInput extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: ''
		}
	}

	handleChange = (key) => {
		return (e) => [
			this.setState({
				[key]: e.target.value
			})
		]
	}

	addClick = () => {
		this.props.addTodo(this.state.value)
		this.setState({
			value: ''
		})
	}

	render() {
		return (
			<div>
				<h1>Add</h1>
				<input onChange={this.handleChange('value')}/>
				<button onClick={this.addClick}>add</button>
			</div>
		);
	}
}

TodoInput.defaultProps = {};

export default TodoInput;
