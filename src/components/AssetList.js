import React from 'react';
import DataTable from 'react-data-table-component';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';



const AssetList = ({assets}) => {

    return (
            <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>nr środka trwałego</th>
                        <th>nr eq</th>
                        <th>nr seryjny</th>
                        <th>producent</th>
                        <th>opis</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map(i =>
                    <tr key={i.id}>
                        <td>{i.assetNr}</td>
                        <td>{i.eqNr}</td>
                        <td>{i.serialNumber}</td>
                        <td>{i.manufacturer}</td>
                        <td>{i.description}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
}

export default AssetList;