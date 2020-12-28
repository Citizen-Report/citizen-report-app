import { SUCCESSFUL_GET_COMPLAINTS } from "./actionTypes/complaintsActionTypes"

export const successfulGetComplaints = (complaints) => {
    console.log(complaints);
    return {
        type: SUCCESSFUL_GET_COMPLAINTS,
        payload: complaints
    }
}

export const getComplaints = () => {
    return dispatch => {

        fetch('http://localhost:3000/api/complaints')
            .then((response) => {
                // console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data);
                dispatch(successfulGetComplaints(data));
            });


    }
}
// {
//     location:"846 Trenton Blvd, San Pablo, CA",
//     zipcode:"94806",
//     lat_lon:"37.97121, -122.35544",
//     category:"Animal Control",
//     description:"wild animal, large",
//     user_ip:"059",
//     status:"Not checked",
//     created_on:"2020-12-23T01:48:43.000Z"}
export const createComplaints = (newComplaints) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/complaints', {
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
}
export const updateComplaints = (updatedComplaint) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/complaints/${updatedComplaint.id}`, {
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
}