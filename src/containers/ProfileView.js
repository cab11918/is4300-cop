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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import BookingList from "../components/BookingList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    margin: theme.spacing(1),
    height: '80vh'

  },
  buildingTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: theme.spacing(0)
  },
  closeButton: {
    alignItems: 'flex-end',

  },
  bookings: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }

});

class ProfileView extends React.Component {

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

            <div>
            </div>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
              <Grid item xs={12} sm={7} lg={8}>

                <Paper className={classes.paper} elevation={3}>
                  <Grid container>
                    <Grid item> <Link to={'/'}>
                      <IconButton aria-label="delete"
                                  className={classes.closeButton}>
                        <CloseIcon/>
                      </IconButton>
                    </Link> </Grid>
                    <Grid item>
                      <Typography variant={'h4'}>New User</Typography>
                    </Grid>
                  </Grid>


                  <Typography variant={'h5'}
                              className={classes.bookings}>Bookings</Typography>

                  {this.props.isLoggedIn ? this.props.bookings.length == 0 ? <Typography
                      variant={'h6'} color='textSecondary'
                      className={classes.bookings}>You don't have any bookings right now.</Typography> :  <BookingList/> : <Typography
                      variant={'h6'} color='textSecondary'
                      className={classes.bookings}>Please Log In to view your
                    bookings.</Typography>}

                </Paper>
              </Grid>
              <Grid item xs={12} sm={5} lg={4}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant={'h4'}
                              className={classes.buildingTitle}>Buildings</Typography>
                  <BuildingList/>
                </Paper>
              </Grid>
            </Grid>
          </Container>

        </Fragment>

    )

  }

}

const mapStateToProps = (state) => {
  return {
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn,
    bookings:state.state.bookings
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(ProfileView))))

