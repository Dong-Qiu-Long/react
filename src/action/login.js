export const SETLOGINUSERTYPE = Symbol('set-login');

export function createSetLoginUserAction(user){
	return {
		type:SETLOGINUSERTYPE,
		payload:user
	}
}