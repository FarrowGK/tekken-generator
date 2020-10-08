import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from '@material-ui/core';


export default function Hero() {

    const useStyles = makeStyles(theme => ({
        root: {
          padding: "120px"
        }
      }));

    const classes = useStyles();
   
    return (
      <Container maxWidth="md">
        <div className={classes.root}>
          <Typography variant="h2" gutterBottom>
            Material UI Demo
          </Typography>
   
          <Typography variant="p" gutterBottom>
            Hero Component
          </Typography>
        </div>
      </Container>
    );
  }