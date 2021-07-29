import * as React from 'react';
import { DataGrid, GridOverlay } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const columns = [
    { field: 'id', headerName: 'EmpId', type: 'number', width: 90 },
    { field: 'name', headerName: 'EmpName', width: 200 },
    { field: 'location', headerName: 'EmpLocation', width: 90, valueGetter: params => `${{ 'Pune': 'Pune', 'Bangalore': 'Bangalore', 'Hyderabad': 'Hyderabad' }[params.getValue('location')] || 'Others'}` },
]

function CustomLoadingOverlay() {
    return (
        <GridOverlay>
            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                <LinearProgress />
            </div>
        </GridOverlay>
    );
}

export default function DataTable({newEmp = [], loading }) {
    const history = useHistory()
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
            rows={newEmp}
             components={{ loadingOverlay: CustomLoadingOverlay }}
                loading={loading} columns={columns} paginationMode='server'
                 />
        </div>
    );
}