import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

	deleteClick = (index) => {
		this.props.deleteTodo(index)
	}
	render() {
		let { items } = this.props;
		return (
			<div>
				<ul>
					{
						items.map((item , index) => {
							return <div key={index}>
								<li><TodoItem value={item}/></li>
								<button onClick={() => this.deleteClick(index)}>delete</button>
							</div>
						})
					}
				</ul>
			</div>
		);
	}
}

TodoList.defaultProps = {};

export default TodoList;
