import { SUCCESSFUL_GET_COMPLAINTS } from "./actionTypes/complaintsActionTypes";

//data passed from getComplaints are passed in as complaints 
export const successfulGetComplaints = (complaints) => {
  console.log(complaints);
  return {
    type: SUCCESSFUL_GET_COMPLAINTS,
    payload: complaints
  }
};

//getComplaints action will invoke another dispatch to succesfulGetComplaints with data retriveed from the backend
export const getComplaints = () => {
  return dispatch => {
    fetch('/api/complaints')
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then(data => {
      // console.log(data);
      dispatch(successfulGetComplaints(data));
    });
  }
};

export const createComplaints = (newComplaints) => {
 //will dispatch to another action getComplaints where state will be updated w/ complaintsReducer
  return (dispatch) => {
    fetch('/api/complaints', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newComplaints) // body data type must match "Content-Type" header
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      dispatch(getComplaints());
    })
  }
};

export const updateComplaints = (updatedComplaint) => {
   //will dispatch to another action getComplaints where state will be updated. 
  return (dispatch) => {
    fetch(`/api/complaints/${updatedComplaint.id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(updatedComplaint) // body data type must match "Content-Type" header
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      dispatch(getComplaints());
    })
  }
};