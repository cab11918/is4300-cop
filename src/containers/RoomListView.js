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
import RoomList from "../components/RoomList";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1)
  },
  buildingTitle:{
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: theme.spacing(0)
  },
  backButton:{
    alignItems:'left',

  }

});

class MainView extends React.Component {

  constructor(props) {

    super(props);
    this.state = {}

  }

  componentDidMount() {
  }

  render() {

    const {classes} = this.props;

    return (

        <Fragment>
          <AppBar/>

          <Container maxWidth="100%">

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
              <Grid item xs={12} sm={7} lg={8}>
                <Paper className={classes.paper} elevation={3}>


                  <MapContainer/>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={5} lg={4}>

                <Paper elevation={3} className={classes.paper}>

                  <Typography variant={'h4'} className={classes.buildingTitle}>
                    <IconButton aria-label="delete" href={'/'} className={classes.backButton}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    Rooms</Typography>
                  <RoomList/>
                </Paper>
              </Grid>
            </Grid>
          </Container>

        </Fragment>



    )

  }

}

export default (withStyles(useStyles)(MainView))

