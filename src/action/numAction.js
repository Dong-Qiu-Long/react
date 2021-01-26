// export const NUM = Symbol('NUM');
export const NUMADD = Symbol('ADD');
export const NUMCDU = Symbol('SUB');

export function ADD(value){
	return {
		type: NUMADD
	}
}

export function SUB(){
	return {
		type:NUMCDU
	}
}

export function fetchUsers(){
	return async function(dispatch){
		setTimeout(()=>{
			dispatch(ADD())
		},1000)
	}
}