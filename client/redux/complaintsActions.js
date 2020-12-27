import { SUCCESSFUL_GET_COMPLAINTS } from "./actionTypes/complaintsActionTypes"

export const successfulGetComplaints = (complaints) => {
    return {
        type: SUCCESSFUL_GET_COMPLAINTS,
        payload: complaints
    }
}

export const getComplaints = (dispatch) => {
    return dispatch => {

        fetch('http://localhost:3000/api/complaints')
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                dispatch(successfulGetComplaints([data]));
            });


    }
}