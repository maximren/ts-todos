import React, { PureComponent } from 'react';

export interface TaskClass { task?: string; }

class Tasks extends PureComponent<TaskClass> {

	public static defaultProps: Partial<TaskClass> = {
		task: 'create todos using typescript'
	}

	render() {
		return (
			<div>
				{this.props.task}
			</div>
		)
	}
}

export default Tasks;