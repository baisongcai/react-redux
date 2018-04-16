import { createStore } from 'redux'

export default function(){
	//定义规则
	function counter(state = 0,action){
		switch(action.type) {
			case 'INCREMENT':
				return state + 1
				break;
			case 'DECREMENT':
				return state - 1
				break;
			default:
				return state
		}
	}

	// 根据计算规则生成 store
	let store = createStore(counter)

	// 定义数据（即 state）变化之后的派发规则
	store.subscribe(() =>{
		console.log('fn1 -> current state',store.getState());
	})

	store.subscribe(() =>{
		console.log('fn2 -> current state',store.getState());
	})

	//触发数据变化
	store.dispatch({type:'INCREMENT'})
	store.dispatch({type:'INCREMENT'})
	store.dispatch({type:'DECREMENT'})


}