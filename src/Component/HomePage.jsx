import React, { useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import EmployeeTable from './EmployeeTable';
import AddEmployeeInfo from './AddEmployeeInfo'


const HomePage = () => {
    const [addEmployeeModal, setAddEmployeeModal] = useState(false)
    const [newEmp, setNewEmp] = useState([])

    useEffect(() => {
    }, [addEmployeeModal])

    // console.log(newEmp);

    return (
        <>
            <AddEmployeeInfo open={addEmployeeModal} handleClose={() => setAddEmployeeModal(false)} addNewEmployee={(e) => {setNewEmp([...newEmp, e]);
            }}/>

            <Box display='flex' justifyContent='space-between' alignItems='center' margin='1rem' >
                <Button color='secondary' onClick={() => setAddEmployeeModal(true)} variant='contained' >Add Employee</Button>
            </Box>
            {
                <Box padding='1rem 2rem'>
                    <EmployeeTable loading={!newEmp.length? true : false} newEmp={newEmp?.map((item, i) => ({ ...item }))} />
                </Box>
            }
        </>
    )
}

export default HomePage;