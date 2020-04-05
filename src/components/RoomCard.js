import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ShillmanHallImg from "../imgs/shillmanhall.jpg";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {grey} from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import {bindActionCreators} from "redux";
import {viewRoom} from "../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,

  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },

  cover: {
    width: 400,
    align:'right'
  }

});

class RoomCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;

    return (

        <Card className={classes.root} elevation={3}>

          <div className={classes.details}>

            <CardActionArea href={'/room/101'}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">

                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  4/5
                </Typography>

              </CardContent>
              <LinearProgress variant="determinate" value={60} />

            </CardActionArea>

          </div>




        </Card>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn,
    bookings: state.state.bookings,
    curViewingBuilding: state.state.curViewingBuilding,
    curViewingRoom: state.state.curViewingRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({viewRoom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(RoomCard))))
