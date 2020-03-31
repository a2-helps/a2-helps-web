import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Link,
} from "react-router-dom";
import { HOME, LOGIN } from '../../util/routes';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: '#ffffff',
    color: 'white',
  },
  font: {
    padding: 32,
  },
  img: {
    width: '60%',
    paddingTop: 20,
    paddingBottom: 20,
  },
}));



export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          className={classes.center}
        >
          <Grid item xs={4} sm={2}>
            <Link to={HOME}>
              <img className={classes.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
