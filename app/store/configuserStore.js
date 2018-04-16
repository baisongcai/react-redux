import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function coconfiguserStore(initialState){
	const store = createStore(rootReducer, initialState,

		// window.devToolsExtension ? window.devToolsExtension() : undefined
		// console.log('test');

	)

	return store
}