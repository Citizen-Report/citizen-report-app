import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import ComplaintModal from './UpdateComplaintPage';
import { getComplaints } from '../redux/complaintsActions';
import apiKey from '../../config';



const HomePage = props => {
    const dispatch = useDispatch();

    const complaintsArray = useSelector(state => state.complaints.complaints);

    const [show, setShow] = useState(false);
    // const [comps, setComps] = useState([]);

    useEffect(() => {
        // getComplaints();
        dispatch(getComplaints());
        // const interval=setInterval(()=>{
        //     getComplaints()
        //    },10000)
             
        // return()=>clearInterval(interval)
        
      }, []);
    

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function Map() {
        //value of the state and the setter of the state
        const [selectedComplaint, setSelectedComplaint] = useState(null);
        return <GoogleMap
         defaultZoom={10} 
         defaultCenter={{lat: 34.052235, lng: -118.243683}}
         >
         {complaintsArray.map((complaint) =>
         <Marker key={complaint.id}
         position={{
            lat: +((((complaint.lat_lon).split(','))[0]).trim()), 
            lng: +((((complaint.lat_lon).split(','))[1]).trim())
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
            lat: +((((selectedComplaint.lat_lon).split(','))[0]).trim()), 
            lng: +((((selectedComplaint.lat_lon).split(','))[1]).trim())
        }}
        onCloseClick={() => {
            //sets selected complaint to null
            setSelectedComplaint(null);
        }}
        >
          <div>
              <h2>{selectedComplaint.description}</h2>
              <p>{selectedComplaint.status}</p>
              <p>{selectedComplaint.location}</p>
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
                            <th>ID</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Complaint</th>
                            <th>Current Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaintsArray.map((data)=> {
                            return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.location}</td>
                                <td>{data.category}</td>
                                <td>{data.description}</td>
                                <td>{data.status}</td>
                                <td>

                                    <ComplaintModal handleClose={handleClose} handleShow={handleShow} show={show} />
                                </td>
    
                            </tr>)
                        })}
                    </tbody>
                </Table>
                
            </Container>

            <Container>
              <div style={{width: '77vw', height: '75vh'}}>
                <WrappedMap 
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
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