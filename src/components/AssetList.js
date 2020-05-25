import React, { Component } from 'react';
import styled from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const AssetList = ({assets}) => {

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <div>
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
          <input id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
          <input type="button" onClick={onClear}>X</input>
        </div>
      );

    console.log(assets)
    const columns = [
        {
            name: 'nr śt',
            selector: 'assetNr',
            sortable: true,
        },
        {
            name: 'nr eq',
            selector: 'eqNr',
            sortable: true,
        },
        {
            name: 'nr seryjny',
            selector: 'serialNumber',
            sortable: true,
        },
        {
            name: 'producent',
            selector: 'manufacturer',
            sortable: true,
        },
        {
            name: 'opis',
            selector: 'description',
            sortable: true,
        },
    ]

    const data = assets;
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = data.filter(item => item.assetNr && item.assetNr.toLowerCase().includes(filterText.toLowerCase()));
    console.log(filteredItems)
    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
          if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
          }
        };
        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
      }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <DataTable
                title="Lista Środków Trwałych"
                columns={columns}
                data={filteredItems}
            />
        </div>
    )
}

export default AssetList;