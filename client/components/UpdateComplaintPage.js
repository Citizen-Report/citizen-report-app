import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateComplaintPage = props => {

    const { complaintId } = useParams();

    return (
        <>
            <h1>Complaint { complaintId }</h1>
        </>
    );
}

export default UpdateComplaintPage;