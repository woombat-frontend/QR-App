import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../Views/Login'
import Home from '../Views/Home'


const Router = () => 
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home} />
    </Switch>

export default Router