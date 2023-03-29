import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { UserContext } from '../context/ContextProvider';

const HistoryCard = () => {
    const {history} = useContext(UserContext);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Link</th>
                    <th>TimeStamp</th>
                </tr>
            </thead>
            <tbody>
            {history.map(obj => (
                <>
                <tr>
                    <td>{obj.name}</td>
                    <td>{obj.link}</td>
                    <td>{obj.time}</td>
                </tr>
                </>
            ))}
            </tbody>
        </Table>
    )
}

export default HistoryCard


