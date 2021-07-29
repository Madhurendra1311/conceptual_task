import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputBase, NativeSelect, Typography, withStyles } from '@material-ui/core';
import EmployeeTable from './EmployeeTable';
import AddEmployeeInfo from './AddEmployeeInfo'

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const HomePage = () => {
    const [addEmployeeModal, setAddEmployeeModal] = useState(false)
    const [newEmp, setNewEmp] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [addEmployeeModal])

    return (
        <>
            <AddEmployeeInfo open={addEmployeeModal} handleClose={() => setAddEmployeeModal(false)} />

            <Box display='flex' justifyContent='space-between' alignItems='center' margin='1rem' >
                <Button color='secondary' onClick={() => setAddEmployeeModal(true)} variant='contained' >Add Employee</Button>
            </Box>
            {
                <Box padding='1rem 2rem'>
                    <EmployeeTable loading={loading} newEmp={newEmp?.data?.map((item, i) => ({ ...item, id: i }))} />
                </Box>
            }
        </>
    )
}

export default HomePage;