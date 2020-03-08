import React, {Fragment} from 'react'
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MapContainer from '../components/MapContainer'
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import AppBar from "../components/NavBar";
import BuildingList from "../components/BuildingList";
import BuildingCard from "../components/BuildingCard";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, withRouter
} from "react-router-dom";
import MainView from "./MainView";
import ProfileView from "./ProfileView";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/TextField";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(3)
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)

  },
  closeButton:{
    alignItems:'flex-end',

  },
  textBox:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  sendButton:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignContent: 'right'
  }
});

class LoginView extends React.Component {

  constructor(props) {

    super(props);
    this.state = {}

  }

  componentDidMount() {
  }

  render() {

    const {classes} = this.props;

    return (
        <Container maxWidth="100%" justify="center">


            <Grid direction="row">
            <Typography variant={'h4'}
                        className={classes.title}>Login</Typography>
            </Grid>

            <Grid direction="row">
              <TextField
                  id="filled-required"
                  label="Username"
                  variant="filled"
              />
            </Grid>
          <Grid direction="row">
          <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
          />


          </Grid>
          <Grid direction="row">

          <Button variant="contained" color="primary" href={'/'}>
            Log in
          </Button>
          </Grid>



        </Container>

    )

  }

}

export default (withStyles(useStyles)(LoginView))

