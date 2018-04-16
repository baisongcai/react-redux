import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter, HashRouter, Route, HashHistory, Switch, Redirect} from 'react-router-dom';

import Hello from '../containers/Hello'
import Home from '../containers/Home'

//组件
const App = () => (
  <div>
  	<main>
  		<Switch>
			<Route exact path="/" component={Hello}/>
			<Route path="/home" component={Home}/>
			<Redirect to="/" />
		</Switch>
  	</main>
  </div>
)

 class RouteMap extends React.Component {
	updateHandle(){
		console.log('没次router变化之后都会触发');
	}

	render(){
		return (

			<BrowserRouter history={HashHistory}>
				<App/>
    		</BrowserRouter>
			
		)
	}
}

export default RouteMap


