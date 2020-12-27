import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker, 
    InfoWindow
} from 'react-google-maps';

const api_key = process.env.API_KEY;


const HomePage = props => {

    const mockData = [
        {
            id: 1,
            location: 'Austin, TX',
            complaint: 'Not cool enough',
            category: 'Other',
            user: 'DallasUser10',
            status: 'Unchecked',
            lat: 30.26437444740824,
            lng: -97.73074764459251
        },
        {
            id: 2,
            location: 'Austin, Tx',
            complaint: 'Pot hole',
            category: 'infrastructure',
            user: 'hipsterHaven',
            status: 'resolved',
            lat: 30.269795103609273,
            lng: -97.73633684459246
        }
    ]
    function Map() {
        //value of the state and the setter of the state
        const [selectedComplaint, setSelectedComplaint] = useState(null);
        return <GoogleMap
         defaultZoom={10} 
         defaultCenter={{lat: 30.267153, lng: -97.743057}}
         >
         {mockData.map((complaint) =>
         <Marker key={complaint.id}
         position={{
            lat: complaint.lat, 
            lng: complaint.lng
         }}
         onClick={() => {
             //when you click on the complaint it sets selected to that complaint
            setSelectedComplaint(complaint);
        }}
         />
    )}

    {selectedComplaint && (
        <InfoWindow 
        position={{
            lat: selectedComplaint.lat, 
            lng: selectedComplaint.lng
        }}
        onCloseClick={() => {
            //sets selected complaint to null
            setSelectedComplaint(null);
        }}
        >
          <div>
              <h2>{selectedComplaint.complaint}</h2>
              <p>{selectedComplaint.status}</p>
          </div>
        </InfoWindow>
    )}
   
       </GoogleMap>
        
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Location</th>
                            <th>Complaint</th>
                            <th>Category</th>
                            <th>User</th>
                            <th>Current Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((data)=> {
                            return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.location}</td>
                                <td>{data.complaint}</td>
                                <td>{data.category}</td>
                                <td>{data.user}</td>
                                <td>{data.status}</td>
                                <td>
                                    <Button>Update</Button>
                                </td>
    
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Button variant="primary">This is a button</Button>
            </Container>

            <Container>
              <div style={{width: '77vw', height: '75vh'}}>
                <WrappedMap 
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`}
                  loadingElement={<div style={{ height: "100%"}} />}
                  containerElement={<div style={{ height: "100%"}} />}
                  mapElement={<div style={{ height: "100%"}} />}
                />
              </div>
            </Container>
        </>
    )
}

export default HomePage;