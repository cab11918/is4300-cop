import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ShillmanHallImg from "../imgs/shillmanhall.jpg";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {grey} from "@material-ui/core/colors";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },

  title: {
    flexGrow: 1,

  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    align:'right'
  }

});

class BuildingCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;

    return (

        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Shillman Hall
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                20/35
              </Typography>
            </CardContent>

          </div>
          <CardMedia
              className={classes.cover}
              image={require("../imgs/shillmanhall.jpg")}
              title="Live from space album cover"
          />


        </Card>

    )
  }

}

export default withStyles(useStyles)(BuildingCard)

