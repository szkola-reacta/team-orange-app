import React, { Component } from 'react';
import styled from 'styled-components';
import DataTable, { createTheme } from 'react-data-table-component';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



const AssetList = ({assets}) => {

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <div>
            <InputGroup className="mb-3">
            <FormControl
                id="search"
                type="text"
                value={filterText}
                onChange={onFilter}
            />
                <InputGroup.Append>
                <InputGroup.Text type="button" id="basic-addon2" onClick={onClear}>X</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
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
            <DataTable
                title="Lista Środków Trwałych"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
                // selectableRows
            />
    )
}

export default AssetList;