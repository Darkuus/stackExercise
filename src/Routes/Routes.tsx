import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Balanced from '../Pages/balanced';

const Routes: React.FC = () => (
    <Route>
        <Route component={ Balanced } path="/" exact/>
    </Route>
);

export default Routes;