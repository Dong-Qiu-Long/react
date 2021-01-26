import * as actionTypes  from '../action/numAction';

export default function numReducer(state = 10,action){
  switch (action.type) {
    case actionTypes.NUMADD:
      return state + 1;
		case actionTypes.NUMCDU:
			return state - 1;
    default:
			return state;
  }
}