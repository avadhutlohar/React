import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = () => {
    const data = [
        {
            id: 1,
            name: 'John',
            age: 20,
            group: 'Group 1'
        },
        {
            id: 2,
            name: 'Jane',
            age: 24,
            group: 'Group 1'
        },
        {
            id: 3,
            name: 'Doe',
            age: 22,
            group: 'Group 2'
        },
        {
            id: 4,
            name: 'Smith',
            age: 28,
            group: 'Group 2'
        }
    ];

    const rowGroupHeaderTemplate = (data) => {
        return data.group;
    };

    const rowGroupFooterTemplate = (data) => {
        return `The above are members of ${data.group}`;
    };

    return (
        <DataTable value={data} rowGroupMode="subheader" groupField="group"
            sortField="group" sortOrder={1}
            rowGroupHeaderTemplate={rowGroupHeaderTemplate}
            rowGroupFooterTemplate={rowGroupFooterTemplate}
            expandableRowGroups={true}>
            <Column field="name" header="Name"></Column>
            <Column field="age" header="Age"></Column>
        </DataTable>
    );
}

export default Table


