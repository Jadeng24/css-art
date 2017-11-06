import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/home.js';
import art1 from './components/Sec1/art1.js';
import art2 from './components/Sec2/art2.js';
import art3 from './components/Sec3/art3.js';

export default (
    <Switch>

        <Route component={Home} exact path='/' />
        <Route component={art1}  path='/art1' />
        <Route component={art2} path='/art2' />
        <Route component={art3} path='/art3' />
    </Switch>
)