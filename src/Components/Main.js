import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import CostumerForm from './CostumerForm';
import TalentForm from './TalentForm';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/CostumerForm" component={CostumerForm}/>
        <Route exact path="/TalentForm" component={TalentForm}/>
    </Switch>
)

export default Main;