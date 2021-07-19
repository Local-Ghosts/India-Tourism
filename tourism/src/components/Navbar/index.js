import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ChatIcon from '@material-ui/icons/Chat';


// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [example, setExample] = useState("primary");

  return (
    <React.Fragment>
      <AppBar  color="transparent" variant="dense"
        // color={isCustomColor || isCustomHeight ? "primary" : example}
        // className={`${isCustomColor && classes.customColor} ${
        //   isCustomHeight && classes.customHeight
        // }`}
      >
        <Toolbar>

          <Typography className={classes.title}>
              <AirplanemodeActiveIcon/>
              </Typography>

          <Typography variant="h6" className={classes.title}>
            India Tourism
          </Typography>

          <IconButton color="inherit" size="small" onClick={() => window.open("https://forms.gle/L616pRpxFL9pbVBNA","_blank")}>
              <ChatIcon/>
          </IconButton>
          <IconButton color="inherit" size="small" onClick={() => window.open("https://forms.gle/L616pRpxFL9pbVBNA","_blank")}>
              Feedback
          </IconButton>

        </Toolbar>
      </AppBar>
      <Toolbar />


    </React.Fragment>
  );
} 