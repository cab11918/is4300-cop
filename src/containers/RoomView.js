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

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    margin: theme.spacing(1),
    minHeight:'80vh'
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
  bookButton:{
    align:'flex-end',
    position: 'absolute',


  },
  bookIcon:{
    marginLeft: theme.spacing(1),

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
                    <IconButton aria-label="delete" href={'/room'}
                                className={classes.backButton}>
                      <ArrowBackIosIcon/>
                    </IconButton>
                    Room 101</Typography>

                  <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                  >
                  <Typography variant={'h6'} className={classes.buildingTitle}>
                    Status: vacant
                  </Typography>
                  <Typography variant={'h6'} className={classes.buildingTitle}>
                    Number of people:
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={1}

                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>

                    </Select>
                  </FormControl>
                  <Typography variant={'h6'} className={classes.buildingTitle}>
                    Time:
                  </Typography>
            <Grid container>    <Grid item>  <form className={classes.container} noValidate>
              <TextField
                  id="time"
                  type="time"
                  label="From"
                  defaultValue="07:30"
                  className={classes.formControl}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
              />
            </form></Grid>
              <Grid item>
                <form className={classes.container} noValidate>
                  <TextField
                      id="time"
                      type="time"
                      label="To"
                      defaultValue="07:30"
                      className={classes.formControl}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                  />
                </form>
              </Grid></Grid>



                  <Typography variant={'h6'} className={classes.buildingTitle}>
                    Date:
                  </Typography>
                  <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.formControl}
                        InputLabelProps={{
                          shrink: true,
                        }}
                    />
                  </form>

                  </Grid>



                  <Grid
                      container
                      direction="column-reverse"
                      justify="flex-end"
                      alignItems="flex-end"
                  >
                    <Button variant="contained" className={classes.bookButton} href={'/'}>Book
                    <ConfirmationNumberIcon className={classes.bookIcon}/></Button>
                  </Grid>
                </Paper>

              </Grid>
            </Grid>
          </Container>

        </Fragment>

    )

  }

}

export default (withStyles(useStyles)(MainView))

