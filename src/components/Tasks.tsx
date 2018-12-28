import React, { PureComponent } from 'react';

interface TaskClass { task?: string; id?: number; }

class Tasks extends PureComponent<TaskClass> {

	public static defaultProps: Partial<TaskClass> = {
		task: 'create todos using typescript',
		id: 1
	}

	render() {
		return (
			<div key={this.props.id}>
				{this.props.task}
			</div>
		)
	}
}

export default Tasks;