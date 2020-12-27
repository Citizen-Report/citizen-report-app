import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import UpdateComplaintPage from './components/UpdateComplaintPage';
import Navigation from './components/Navigation';

import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/complaint/:complaintId">
                            <UpdateComplaintPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path='/'>
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </>
    )
}
render(<App />, document.getElementById('app'));