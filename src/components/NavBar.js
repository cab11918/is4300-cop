import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Button from "@material-ui/core/Button";
import {Link, withRouter} from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import {bindActionCreators} from "redux";
import {compare, myBookingViewOn} from "../actions/actions";
import {connect} from "react-redux";

const useStyles = theme => ({
  root: {
    flexGrow: 1,

  },

  title: {
    flexGrow: 1,

  },
  logo: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),

  },
  nav: {
    backgroundColor: grey[800],
    marginBottom: theme.spacing(1)
  },
  searching: {
    marginRight: theme.spacing(1),

  },
  feedbackButton: {
    marginRight: theme.spacing(1),

  },
  logInButton: {
    marginRight: theme.spacing(1),
  }

});

class NavBar extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      isLogInWindowOpen: false,
      username: '',
      password: '',
      showInputError: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  logIn() {

    // this.props.compare(
    //     {username: this.state.username, password: this.state.password})
    // if (this.props.isLoggedIn) {
    //   this.setState({isLogInWindowOpen: false})
    // } else {
    //   alert("fuck")
    // }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {

    const {classes} = this.props;

    return (

        <div>

          <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
              <Toolbar>

                <SchoolIcon className={classes.logo}/>
                <Typography variant="h5" className={classes.title}>
                  COP
                </Typography>


                {this.props.isLoggedIn ? <div></div> : <Button
                    variant="contained" className={classes.logInButton}
                    onClick={() => {
                      this.setState({isLogInWindowOpen: true})
                    }}>Log In</Button>}
                <Link to={"/profile"} style={{ textDecoration: 'none' }}>
                  <Button variant="contained"
                          className={classes.feedbackButton}
                  >My Bookings</Button>
                </Link>


                <Link to={"/feedback"} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" className={classes.feedbackButton}
                  >Send Feedback</Button>
                </Link>

              </Toolbar>
            </AppBar>

            {this.props.isLoggedIn ? <div></div> : <Dialog
                open={this.state.isLogInWindowOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <Grid container>
                  <Grid
                      item

                  >
                    <IconButton aria-label="delete"
                                onClick={() => this.setState(
                                    {isLogInWindowOpen: false})}
                                className={classes.closeButton}>
                      <CloseIcon/>
                    </IconButton>
                  </Grid>

                  <Grid item>

                    <Typography variant={'h4'}
                                className={classes.title}>Login</Typography>
                  </Grid>
                </Grid>

                {this.state.showInputError ? <TextField
                    error
                    id="standard-basic"
                    label="Username"
                    variant="outlined"
                    style={{margin: 10}}
                    onChange={this.handleUsernameChange}

                /> : <TextField
                    id="standard-basic"
                    label="Username"
                    variant="outlined"
                    style={{margin: 10}}
                    onChange={this.handleUsernameChange}

                />}

                <Grid direction="row">
                  {this.state.showInputError ?
                      <TextField
                          error
                          id="standard-basic"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          variant="outlined"
                          style={{margin: 10}}
                          onChange={this.handlePasswordChange}


                      />
                      : <TextField
                          id="standard-basic"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          variant="outlined"
                          style={{margin: 10}}
                          onChange={this.handlePasswordChange}


                      />}


                </Grid>
                <Grid direction="row">

                  <Button variant="contained" color="primary"
                          style={{margin: 10}} onClick={() => {
                    if (!this.props.isLoggedIn) {
                      this.setState({
                        showInputError: true
                      })
                    } else {
                      this.setState({
                        isLogInWindowOpen: false
                      })
                    }
                    this.props.compare({
                      username: this.state.username,
                      password: this.state.password
                    })

                  }}>
                    Log in
                  </Button>

                </Grid>
              </DialogContent>

            </Dialog>}
          </div>


        </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({compare}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(NavBar))))

