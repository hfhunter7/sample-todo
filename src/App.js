import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Welcome to my app',
			items: ['hello','world'],
		}
	}

	addTodo = (newTodo) => {
		this.setState({
			items: this.state.items.concat([newTodo])
		})
	}

	deleteTodo = (index) => {
		this.setState({
			items: this.state.items.slice(0 , index)
		})
	}

	render() {
		let { items } = this.state;
		return (
			<div>
				<TodoInput addTodo={this.addTodo}/>
				<TodoList items={items} deleteTodo={this.deleteTodo}/>
			</div>
		);
	}
}

export default App;
