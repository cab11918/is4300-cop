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

class AllViews extends React.Component {

  constructor(props) {

    super(props);
    this.state = {}

  }

  componentDidMount() {
  }

  render() {

    const {classes} = this.props;

    return (
        <Container maxWidth="100%">

          <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
          >
            <Grid item xs={12} sm={7} lg={8}>
              <Paper className={classes.paper} elevation={3}>

                <IconButton aria-label="delete" href={'/'} className={classes.closeButton}>
                  <CloseIcon />
                </IconButton>

                <Typography variant={'h4'}
                            className={classes.title}>Feedback</Typography>


                <form className={classes.textBox} noValidate autoComplete="off">
                  <TextField id="outlined-basic" variant="outlined" fullWidth multiline
                             rows="10" />
                </form>
                <Button variant="contained" color="secondary" className={classes.sendButton} href={'/'}>
                  Send
                </Button>

              </Paper>
            </Grid>

          </Grid>
        </Container>

    )

  }

}

export default (withStyles(useStyles)(AllViews))

