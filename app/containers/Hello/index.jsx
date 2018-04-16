import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../../actions/userinfo'

import Header from '../../components/Header'
import Carousel from './subpage/Carousel'
import List from './subpage/List'
import Recommend from './subpage/Recommend'

class Hello extends React.Component {
	constructor(props,context) {
	  super(props,context);
	
	  this.state = {
	  	now:Date.now()
	  };
	}

	render() {
		console.log('0');
		return (
			<div>
				<p>{this.props.userinfo.userid}</p>
				<p>{this.props.userinfo.city}</p>
				<Header title="hello页面"/>
				<p onClick={this.clickHandler.bind(this)}>hello world {this.state.now}</p>
				<hr/>
				<Carousel/>
				<List/>
				<Recommend/>
			</div>
		)
	}
	clickHandler(){

		this.setState({
			now:Date.now()
		})

		this.props.userinfoActions.login({
			userid:'abcd',
			city:'beijingsdfsdf'
		})

		this.props.userinfoActions.updateCityName({
			userid:'1',
			city:'2'
		})

		console.log(this.state.now);
		console.log(Date.now());
	}
	componentDidMount(){
		//页面渲染完成后
		this.props.userinfoActions.login({
			userid:'abc',
			city:'beijing'
		})

		console.log(this.props.userinfo);

	}
	componentDidUpdate(prevProps, prevState){
		//触发更新完成
		console.log('test');
	}
	componentWillUnmount(){
		//组件销毁之前 清空 sertTimeout setInterval
	}

}

function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}
function mapDispatchToProps(dispatch){
	return {
		userinfoActions:bindActionCreators(userinfoActions,dispatch)
	}
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Hello)