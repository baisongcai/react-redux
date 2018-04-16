
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configusreStore from './store/configuserStore'

import RouterMap from './router/routerMap'

const store = configusreStore()

// import redux from './redux-demo'
// redux()


ReactDOM.render(
    
    <Provider store={store}>
    	<RouterMap/>
    </Provider>,
 	
    document.getElementById('root')
)
