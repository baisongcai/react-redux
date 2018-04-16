import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter, Route, HashHistory } from 'react-router-dom';

//组件
import Hello from './containers/Hello'


 class RouteMap extends React.Component {
	updateHandle(){
		console.log('没次router变化之后都会触发');
	}

	render(){
		return (
			<BrowserRouter history={HashHistory}>
    			<Route path="/" component={Hello}></Route>
    		</BrowserRouter>
			
		)
	}
}

export default RouteMap


