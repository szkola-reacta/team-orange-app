import React from 'react';
import Table from 'react-bootstrap/Table';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import DeleteAsset from './DeleteAsset';
import EditAsset from './EditAsset';
import { Button } from 'react-bootstrap';

import { CommonButton } from '../common/buttons';
import { editIcon } from '../common/icons';

export const editLink = (id) => <Link to={{pathname: `/EditAsset/`, id: id}}/>

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
                        <td><DeleteAsset id={i.id} />
                        {/* <Button>
                        <Link to={{pathname: `/EditAsset/`, id: i.id}}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Link>
                        </Button> */}
                        <CommonButton variant='info' description='edytuj' icon={editIcon} link={editLink({id: i.id})}/>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
}

export default ListAsset;