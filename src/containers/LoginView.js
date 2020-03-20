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
    margin: theme.spacing(3),
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



          <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ minHeight: '95vh'}}

          >

            <Paper className={classes.paper} elevation={3}>
            <Grid direction="row">
            <Typography variant={'h4'}
                        className={classes.title} style={{margin: 20}}>Login</Typography>
            </Grid>

              <TextField
                  id="standard-basic"
                  label="Username"
                  variant="outlined"
                  style={{margin: 10}}
              />

          <Grid direction="row">
          <TextField
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              style={{margin: 10}}

          />


          </Grid>
          <Grid direction="row" >

          <Button variant="contained" color="primary" href={'/'}  style={{margin: 10}}>
            Log in
          </Button>
          </Grid>
            </Paper>
          </Grid>







    )

  }

}

export default (withStyles(useStyles)(LoginView))

