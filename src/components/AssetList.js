import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


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
                        <td>
                            <Link to={`/AssetDetails/${i.id}`}>{i.assetNr}</Link>
                        </td>
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