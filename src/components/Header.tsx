import React, { PureComponent } from 'react';

class Header extends PureComponent {
	render() {
		return (
			<>
				<h1>ToDo List</h1>
				<form>
					<label>Add new task:</label>
					<input></input>
					<button>Add</button>
				</form>
			</>
		)
	}
}


export default Header;
