import { SUCCESSFUL_CREATE_COMPLAINTS, SUCCESSFUL_DELETE_COMPLAINTS, SUCCESSFUL_GET_COMPLAINTS } from "../actionTypes/complaintsActionTypes";

const initialState = {
  complaints: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case SUCCESSFUL_GET_COMPLAINTS:
      return {
        ...state,
        complaints: [...action.payload]
      }

    // case SUCCESSFUL_CREATE_COMPLAINTS:
    //   return {
    //   }
    // case SUCCESSFUL_DELETE_COMPLAINTS: {
    //   const newComplaints = state.complaints.map((complaints, idx) => {
    //     if (idx === action.payload) {
    //       return {
    //         ...complaints,
    //         complaints: complaints - 1,
    //       };
    //     }
    //     return market;
    //   });
    //   return {
    //     ...state,
    //     totalCards: state.totalCards - 1,
    //     marketList: newComplaints,
    //   };
    // }

    default:
      return state;
  }
};