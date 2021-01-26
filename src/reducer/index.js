import loginUser from './loginUser';
import user from './addReducer';

const initialState = {
	loginUser:null,
	users:null
}

export default (state = initialState, { type, payload }) => {
	const newState = {
		loginUser:loginUser(state.loginUser,action),
		users:user(state.users,action)
	};
	return newState
}
