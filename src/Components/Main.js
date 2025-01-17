import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';

import LandingPage from './LandingPage';
import Login from './Login';
import CostumerForm from './CostumerForm';
import TalentForm from './TalentForm';
import ClientSuccess from './ClientSuccess';
import TalentSuccess from './TalentSuccess';
import IntegradorPage from './IntegradorPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/CostumerForm" component={CostumerForm}/>
        <Route exact path="/TalentForm" component={TalentForm}/>
        <Route exact path="/ClientSuccess" component={ClientSuccess}/>
        <Route exact path="/TalentSuccess" component={TalentSuccess}/>
        <ProtectedRoute exact path="/IntegradorPage" component={IntegradorPage}/>
    </Switch>
)

export default Main;