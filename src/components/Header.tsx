import React, { PureComponent } from 'react';

interface State {
	task: string;
}

class Header extends PureComponent<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			task: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({task: e.target.value})
	}

	render() {
		return (
			<>
				<h1>ToDo List</h1>
				<form>
					<label>Add new task:</label>
					<input name="task" value={this.state.task} onChange={this.handleChange}></input>
					<button>Add</button>
				</form>
			</>
		)
	}
}


export default Header;
