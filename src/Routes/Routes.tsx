import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Balanced from '../Pages/balanced';
import Deck from '../Pages/Deck';

const Routes: React.FC = () => (
    <Route>
        <Route component={ Balanced } path="/Balanced" />
        <Route component={ Deck } path="/Deck" />
    </Route>
);

export default Routes;