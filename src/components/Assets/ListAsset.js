import React from 'react';
import Table from 'react-bootstrap/Table';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import DeleteAsset from './DeleteAsset';


const ListAsset = ({assets}) => {
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
                        <th>właściciel</th>
                        <th>dział</th>
                        <th>edytuj</th>
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
                        <td>{i.historySet.map(x =>
                             <ul key={x.id}>
                                 <li>{x.department.name} {x.department.detailedName}</li>
                             </ul>
                             )[i.historySet.length - 1]}
                        </td>
                        <td><DeleteAsset id={i.id} /></td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
}

export default ListAsset;