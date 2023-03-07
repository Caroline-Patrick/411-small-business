import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../src/containers.js/Home'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default Router;