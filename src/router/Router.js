import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../Views/Login'
import Home from '../Views/Home'
import AdminHome from '../Views/Admin/AdminHome';


const Router = () => 
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home} />
        <Route path="/admin" exact component={AdminHome} />
    </Switch>

export default Router