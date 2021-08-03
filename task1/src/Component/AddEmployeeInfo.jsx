import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomModal from './Modal';
import Form from './Form';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: '#fff',
  }
}))

export default function AddEmployeeInfo({ open, handleClose, addNewEmployee }) {
  const classes = useStyles();
  const [empId, setEmpId] = useState(23)
  const [empName, setEmpName] = useState('')
  const [empLocation, setEmpLocation] = useState('')


  const handleChangeEmpName = (e) => {
    setEmpName(e.target.value)
  }

  const handleChangeEmpLocation = (e) => {
    setEmpLocation(e.target.value)
  }

  const handleChangeEmpId = (e) => {
    setEmpId(e.target.value)
  }

  const resetAll = () => {
    setEmpId('')
    setEmpName('')
    setEmpLocation('')
  }

  const addEmployeeInformation = (e) => {
    e.preventDefault();
    addNewEmployee({ "id": empId, "name": empName, "location": empLocation })
    resetAll()
    handleClose()
  }

  return (
    <CustomModal open={open} handleClose={handleClose} >
      <Form className={classes.form} onSubmit={addEmployeeInformation} >
        <Typography variant='h4' align='center' >Add EmployeeInfo</Typography>
        <TextField label='empId' value={empId} name="empId" onChange={handleChangeEmpId} type='number' min={1} max={150} placeholder='Enter empId here!' variant='outlined' required />
        <TextField label='empName' value={empName} name="empName" onChange={handleChangeEmpName} type='text' placeholder='Enter empName here!' variant='outlined' required />
        <FormControl variant='outlined' >
          <InputLabel id='location-selector' htmlFor='location'>empLocation </InputLabel>
          <Select label='Location' id='location' value={empLocation} labelId='location-selector' name="location" onChange={handleChangeEmpLocation} placeholder='Enter empLocation here!' variant='outlined' required >
            <MenuItem value={'Pune'}>Pune</MenuItem>
            <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained' color='secondary' type='submit'>Add</Button>
        <Button variant='contained' color='default' onClick={handleClose}>Cancel</Button>
      </Form>
    </CustomModal>

  );
}