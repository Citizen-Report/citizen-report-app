import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

const HomePage = props => {

    const mockData = [
        {
            id: 1,
            location: 'Austin, TX',
            complaint: 'Not cool enough',
            category: 'Other',
            user: 'DallasUser10',
            status: 'Unchecked',
        },
        {
            id: 2,
            location: 'Boulder, CO',
            complaint: 'Pot hole',
            category: 'infrastructure',
            user: 'PotIsLegal',
            status: 'resolved',
        }
    ]


    return (
        <>
            <h1>I'm home</h1>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Location</th>
                            <th>Complaint</th>
                            <th>Category</th>
                            <th>User</th>
                            <th>Status</th>
                            <th>Tools</th>
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
                                    <Button>button</Button>
                                </td>
    
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Button variant="primary">This is a button</Button>

            </Container>
        </>
    )
}

export default HomePage;