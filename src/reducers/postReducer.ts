import { DELETE_TASK, ADD_TASK } from '../actions/types';

import { List, Map } from 'immutable';

const postReducer = (state = List(), action) => {
	switch (action.type) {
		case ADD_TASK:
			return { ...state, ownItems: state.taskItem.concat(action.payload) };
			case DELETE_TASK:
			const deletedTask = state.taskItem.filter(task => action.payload !== task.id);
			return {...state, taskItem: deletedTask}
		default:
			return state;
	}
}

export default postReducer;