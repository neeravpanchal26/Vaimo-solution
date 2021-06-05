// Default imports
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// Component Imports
import ProductDetail from '../containers/productDetail/productDetail';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ProductDetail}/>
            </Switch>
        </Router>
    )
};

// Default export
export default Routes;