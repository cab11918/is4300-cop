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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {bookRoom, viewRoom} from "../actions/actions";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    margin: theme.spacing(1),
    minHeight: '80vh'
  },
  buildingTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: theme.spacing(0)
  },
  backButton: {
    alignItems: 'left',

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
  bookButton: {},
  bookIcon: {
    marginLeft: theme.spacing(1),

  }

});

class RoomView extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
        numberOfPeople: '-1',
        from: '',
        to: '',
        date: ''

    }

  }

  componentDidMount() {
  }

  render() {

    let whetherGoBack = "/room"

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

                  {this.props.curViewingRoom == -1
                  || this.props.curViewingBuilding == -1 ? <Typography>No
                    Building/Room selected</Typography> : <Typography
                      variant={'h4'} className={classes.buildingTitle}>
                    <Link to={"/buildings/rooms"}>
                      <IconButton aria-label="delete"
                                  className={classes.backButton}>
                        <ArrowBackIosIcon/>
                      </IconButton>
                    </Link>


                    Room {this.props.buildings[this.props.curViewingBuilding].rooms[this.props.curViewingRoom].name}
                  </Typography>}

                  <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                  >
                    <Typography variant={'h6'}
                                className={classes.buildingTitle}>
                      Status: vacant
                    </Typography>
                    <Typography variant={'h6'}
                                className={classes.buildingTitle}>
                      Number of people:
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={this.state.numberOfPeople}
                          onChange={(e) => this.setState(
                              {numberOfPeople: e.target.value})}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>

                      </Select>
                    </FormControl>
                    <Typography variant={'h6'}
                                className={classes.buildingTitle}>
                      Time:
                    </Typography>
                    <Grid container> <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            type="time"
                            label="From"
                            defaultValue="--:--"
                            className={classes.formControl}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              step: 300, // 5 min
                            }}
                            onChange={(e) => {
                              this.setState({from: e.target.value.toString()})

                            }}
                        />
                      </form>
                    </Grid>
                      <Grid item>
                        <form className={classes.container} noValidate>
                          <TextField
                              id="time"
                              type="time"
                              label="To"
                              defaultValue="--:--"
                              className={classes.formControl}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              inputProps={{
                                step: 300, // 5 min
                              }}
                              onChange={(e) => {
                                this.setState({to: e.target.value.toString()})

                              }}
                          />
                        </form>
                      </Grid></Grid>


                    <Typography variant={'h6'}
                                className={classes.buildingTitle}>
                      Date:
                    </Typography>
                    <form className={classes.container} noValidate>
                      <TextField
                          id="date"
                          type="date"
                          defaultValue="yyyy-mm-dd"
                          className={classes.formControl}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) => {
                            this.setState({date: e.target.value.toString()})
                          }}
                      />
                    </form>

                  </Grid>


                  <Grid

                      direction="column-reverse"
                      justify="flex-end"
                      alignItems="flex-end"
                  >

                    {this.props.curViewingRoom == -1
                    || this.props.curViewingBuilding == -1
                    || !this.props.isLoggedIn ? <Typography>Please log in to
                          book.</Typography> :
                        <Link to={whetherGoBack} style={{textDecoration: 'none'}}>

                          <Button variant="contained"
                                  onClick={() => {
                                    console.log(this.state.bookingTicket)

                                    if(this.state.numberOfPeople == -1 || this.state.from == ""|| this.state.to == "" || this.state.date == "") {
                                      alert("Please fill the form properly.")
                                    } else {
                                      this.props.bookRoom({
                                        building: this.props.buildings[this.props.curViewingBuilding].name,
                                        room: this.props.buildings[this.props.curViewingBuilding].rooms[this.props.curViewingRoom].name,
                                        numberOfPeople: this.state.numberOfPeople,
                                        time: this.state.from + "-"
                                            + this.state.to
                                            + " " + this.state.date

                                      })
                                      whetherGoBack = "/"

                                    }



                                  }}
                                  className={classes.bookButton}>Book
                            <ConfirmationNumberIcon
                                className={classes.bookIcon}
                            />

                          </Button>
                        </Link>}


                  </Grid>
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
    bookings: state.state.bookings,
    curViewingBuilding: state.state.curViewingBuilding,
    curViewingRoom: state.state.curViewingRoom,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({bookRoom, viewRoom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(RoomView))))

