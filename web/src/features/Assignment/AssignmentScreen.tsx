import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'


export const AssignmentScreen = () => {

    const [course, setCourse] = useState('')

    const selectionChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCourse(event.target.value);
      };

  return (
    <div style={styles.container}>

       
        <div style={styles.assignmentDetailsText}>
        <Typography variant="h5" component="h2">
            Enter assignment details
            </Typography>
            </div>
        <div style={styles.inputDiv}>

        <FormControl>
            <InputLabel htmlFor="my-input">Assignment Name:</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        

      </div>

      <div style={styles.inputDiv}>

      <FormControl>
            <InputLabel htmlFor="my-input">Description:</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

      </div>

      <div style={styles.inputDiv}>

      <FormControl>
            <InputLabel htmlFor="my-input">Course:</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={course}
                label="course"
                sx={{
                    width: 200,
                    height: 50,
                  }}
                onChange={selectionChangeHandler}
            >
                <MenuItem value={10}>Graphics Processing</MenuItem>
                <MenuItem value={20}>User Interface Design</MenuItem>
                <MenuItem value={30}>Elements of computer assisted graphics</MenuItem>
            </Select>
        </FormControl>

      </div>

        
      <div style={styles.inputDiv}>
      <Button onClick={() => alert(`A notification was sent to all students enrolled`)} variant="contained">Create assignment</Button>
      </div>
    </div>
  )
}


const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#C2E8FF",
        display: "flex",
        flexDirection: "column",
    },

    assignmentDetailsText:{
        margin:'50px',
        fontWeight:'bold'
    },

    inputDiv:{
        margin:'50px'
    },
  } as const;
