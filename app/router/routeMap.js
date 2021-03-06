import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Login from '../containers/Login'
import User from '../containers/User'
import Detail from '../containers/Detail'
// import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    render() {
        return (
             <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
