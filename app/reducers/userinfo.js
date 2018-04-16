import * as actionTypes from '../containers/userinfo'

const initialState = {}

export default function userinfo(state = initialState,action){
	switch(action.type) {
		case actionTypes.USERINFO_LOGIN:
			return action.data
			break;
		case actionTypes.UPDATE_CITYNAME:
			return action.data
			break;
		default:
			return state
	}
}