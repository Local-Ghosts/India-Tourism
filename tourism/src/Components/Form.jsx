import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const defaultValues = {
  name: "",
  email:"",
  phone:0,
  location: "",
 
  msg:""
};


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

const Form = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    localStorage.setItem('Data',JSON.stringify(formValues))
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>        <Grid item>
          <TextField
            id="Phone-input"
            name="phone"
            label="Phone No."
            type="number"
            value={formValues.phone}
            onChange={handleInputChange}
          />




        </Grid>

        <Grid item>
{/* <TextareaAutosize  id="msg-input"
            name="msg"
            label="Message"
            type="text"
            value={formValues.msg}
            onChange={handleInputChange}
            aria-label="minimum height" 
            minRows={3} 
            placeholder="Minimum 3 rows" /> */}
          <TextField
            
            id="msg-input"
            name="msg"
            label="Message"
            type="text"
            value={formValues.msg}
            onChange={handleInputChange}
          />
          </Grid>

        <div style={{display:"flex",width:"300px",justifyContent:"center"}}>
        {/* <div style={{marginLeft:"50px",marginRight:"40px",textAlign:'center',paddingTop:"5px"}}>Location:</div> */}
        <div >
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select name="Location" value={formValues.location} onChange={handleInputChange}>
                  <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

            
            <MenuItem  value="Banglore">Banglore</MenuItem>

            <MenuItem key="Manali" value="Manali">Manali</MenuItem>
            <MenuItem key="Goa" value="Goa">Goa</MenuItem>
        </Select>
        </FormControl>
        </div>
        </div>

        {/* <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                key="female"
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              name="os"
              value={formValues.os}
              onChange={handleInputChange}
            >
              <MenuItem key="mac" value="mac">
                Mac
              </MenuItem>
              <MenuItem key="windows" value="windows">
                Windows
              </MenuItem>
              <MenuItem key="linux " value="linux">
                Linux
              </MenuItem>
            </Select>
          </FormControl>
        </Grid> */}



        <Grid item>
          <div style={{ width: "300px",textAlign:"center", marginTop:"30px"}}>
            Rate us:
            <Slider
              value={formValues.favoriteNumber}
              onChange={handleSliderChange("favoriteNumber")}
              defaultValue={1}
              step={1}
              min={1}
              max={10}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
                {
                    value: 4,
                    label: "4",
                  },
                  {
                    value: 5,
                    label: "5",
                  },
                  {
                    value: 6,
                    label: "6",
                  },
                  {
                    value: 7,
                    label: "7",
                  },
                  {
                    value: 8,
                    label: "8",
                  },
                  {
                    value: 9,
                    label: "9",
                  },
                  {
                    value: 10,
                    label: "10",
                  }
              ]}
              valueLabelDisplay="off"
            />
          </div>
        </Grid>
        <Button variant="contained" color="primary" type="submit" className="Submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;