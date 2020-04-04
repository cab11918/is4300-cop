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
import Slide from "@material-ui/core/Slide";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {compare} from "../actions/actions";

const useStyles = theme => ({
  paper: {
    margin: theme.spacing(3),
  },
  title: {
    margin: theme.spacing(1)

  },
  closeButton:{

    margin: theme.spacing(1),


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
  },

});

class LoginView extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


  componentDidMount() {
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })}

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })}
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
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>


            <Paper className={classes.paper} elevation={3}>
              <Grid container>
                <Grid
                    item

                >
                  <IconButton aria-label="delete" href={'/'} className={classes.closeButton}>
                    <CloseIcon />
                  </IconButton>
                </Grid>

                <Grid item>

                  <Typography variant={'h4'}
                              className={classes.title}>Login</Typography>
                </Grid>
              </Grid>

              <TextField
                  id="standard-basic"
                  label="Username"
                  variant="outlined"
                  style={{margin: 10}}
                  onChange={this.handleUsernameChange}
              />

          <Grid direction="row">
          <TextField
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              style={{margin: 10}}
              onChange={this.handlePasswordChange}


          />


          </Grid>
          <Grid direction="row" >

          <Button variant="contained" color="primary" href={'/'}  style={{margin: 10}} onClick={()=>{this.props.compare({username: this.state.username, password: this.state.password})} }>
            Log in
          </Button>

          </Grid>
            </Paper>
            </Slide>
          </Grid>







    )

  }

}

const mapStateToProps = (state) => {
  return{
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({compare}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(LoginView))))

