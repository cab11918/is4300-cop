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
import SendIcon from '@material-ui/icons/Send';
import Slide from "@material-ui/core/Slide";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(3)
  },
  title: {
    margin: theme.spacing(1),

  },
  closeButton: {
    alignItems: 'flex-end',
    margin: theme.spacing(1),

  },
  textBox: {
    margin: theme.spacing(2),

  },
  sendButton: {
    margin: theme.spacing(1),
    fontSize: 15
  },
  sendIcon: {
    size: 15,
    marginLeft: theme.spacing(1)
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

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{minHeight: '95vh'}}
        >
          <Grid item xs={11} sm={6} lg={5}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>

              <Paper className={classes.paper} elevation={3}>
                <Grid container>
                  <Grid
                      item

                  >
                    <Link to={"/"}>
                      <IconButton aria-label="delete"
                                  className={classes.closeButton}>
                        <CloseIcon/>
                      </IconButton>
                    </Link>
                  </Grid>

                  <Grid item>

                    <Typography variant={'h4'}
                                className={classes.title}>Feedback</Typography>
                  </Grid>
                </Grid>
                <form className={classes.textBox} noValidate autoComplete="off">
                  <TextField placeholder={"Say something good..."}
                             id="outlined-basic" variant="outlined" fullWidth
                             multiline
                             rows="10"/>
                </form>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >

                  <Link to={"/"} style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="secondary"
                            className={classes.sendButton}>
                      Send
                      <SendIcon className={classes.sendIcon}/>
                    </Button>
                  </Link>
                </Grid>


              </Paper>
            </Slide>

          </Grid>


        </Grid>

    )

  }

}

export default (withStyles(useStyles)(AllViews))

