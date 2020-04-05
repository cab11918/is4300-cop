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
import FeedbackView from "./FeedbackView";
import LoginView from "./LoginView";
import RoomListView from "./RoomListView";
import RoomView from "./RoomView";
import {browserHistory} from "react-router"

const useStyles = theme => ({

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
<Router>

  <Switch>
    <Route exact path="/">
      <MainView />
    </Route>
    <Route exact path="/profile">
      <ProfileView/>
    </Route>
    <Route exact path="/feedback">
      <FeedbackView/>
    </Route>

    <Route exact path="/login">
      <LoginView/>
    </Route>

    <Route exact path="/buildings/rooms">
      <RoomListView/>
    </Route>
    <Route exact path="/room">
      <RoomView/>
    </Route>

  </Switch>
</Router>




    )

  }

}

export default (withStyles(useStyles)(AllViews))

