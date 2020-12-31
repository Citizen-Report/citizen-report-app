import React from 'react';
import { shallow , mount } from 'enzyme';
import Container from 'react-bootstrap/Container';
import { Provider,useDispatch } from 'react-redux';
import authReducer from '../client/redux/reducers/authReducer';
import store from '../client/redux/store';
//Import shallow for only testing thecomponent and not asserting on children
//Import mount to test-> if component did mount/use effect
  //component lifecycle and children behavior
//Import render -> to render component and children and not test life cycle methods
 
import toJson from 'enzyme-to-json';
//converst enzyme wrappers to format for jes snapshot testing
import configureStore from 'redux-mock-store';
//configure store simulates a redux store for testing
  //only required for components that are connected to store
import LoginPage from '../client/components/LoginPage';
// import ComplaintModal from '../client/components/UpdateComplaintPage';


describe ('<Login /> page', ()=> {
  const mockSTore = configureStore({reducer: authReducer});
  const getWrapper = () => mount(<Provider store={}></Provider> )

  
})