import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import HomePage from './components/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import ComplaintModal from './components/UpdateComplaintPage';

const App = props => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/complaint/:complaintId">
                        <ComplaintModal />
                    </Route>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
render(<App />, document.getElementById('app'));