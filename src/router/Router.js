import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../Views/Login'
import Home from '../Views/Home'
import QReader from '../Views/QReader'
import QRGenerator from '../Views/QRGenerator';


const Router = () => 
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home} />
        <Route path="/qr" exact component={QRGenerator}/>
    </Switch>

export default Router