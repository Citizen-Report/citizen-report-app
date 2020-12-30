import React from 'react';
import { shallow } from 'enzyme';
import { Modal, Button, DropdownButton, Dropdown  } from 'react-bootstrap';
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

const mockStore = configureStore();
const initialState = {
  
}

