import React from 'react';
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
                        <th>status</th>
                        <th>owner</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map(i =>
                    <tr key={i.id}>
                        <td>{i.assetNr}</td>
                        <td>{i.eqNr}</td>
                        <td>{i.serialNumber}</td>
                        <td>{i.manufacturer.name}</td>
                        <td>{i.description}</td>
                        <td>{i.historySet.map(x =>
                             <ul key={x.id}>
                                 <li>{x.status.status}</li>
                             </ul>
                             )[i.historySet.length - 1]}
                        </td>
                        <td>{i.historySet.map(x =>
                             <ul key={x.id}>
                                 <li>{x.owner}</li>
                             </ul>
                             )[i.historySet.length - 1]}
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
}

export default AssetList;