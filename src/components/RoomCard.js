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
                  ROOM 101
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

export default withStyles(useStyles)(RoomCard)

