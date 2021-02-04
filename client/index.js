import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import UpdateComplaintPage from './components/UpdateComplaintPage';
import Navigation from './components/Navigation';
import CreateComplaintPage from './components/CreateComplaintPage'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComplaintModal from './components/UpdateComplaintPage';
import SignupPage from './components/SignUp';



const App = props => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/complaint/:complaintId">
              <ComplaintModal />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/createComplaint">
              <CreateComplaintPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  )
};

render(<App />, document.getElementById('app'));