import React from 'react'
import Table from 'react-bootstrap/Table';

const ListStatuses = ({statuses}) => {
    return (
            <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {statuses.map(i =>
                    <tr key={i.id}>
                        <td>{i.status}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
}

export default ListStatuses;