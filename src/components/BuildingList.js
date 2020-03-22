import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import ShillmanHallImg from '../imgs/shillmanhall.jpg'
import BuildingCard from "./BuildingCard";
import Grow from "@material-ui/core/Grow";
import CardActionArea from "@material-ui/core/CardActionArea";
import LinearProgress from "@material-ui/core/LinearProgress";
import SERVICE from "../service"

const useStyles = theme => ({

  table: {
    maxHeight: 440,
    overflowY:'auto'

  },
  tContainer:{
    overflow: 'auto',
    height:'72vh'
  },
  root: {
    flexGrow: 12,

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
    width: '100%',
    height: 100,
    align:'right'
  }


});

function createData(card) {
  return {card};
}

class BuildingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buildings :[]
    }

  }
  componentDidMount() {
    SERVICE.getInstance().getBuildingsList().then(buildings => {
      this.setState({buildings:buildings})
      console.log(this.state.buildings)
    })
  }

  render() {

    const {classes} = this.props;

    return (
        <TableContainer className={classes.tContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>


              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.buildings.map((building,index) => (

                  <TableRow>

                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...({timeout: 1000 + index * 150})}>

                      <TableCell>        <Card className={classes.root} elevation={3}>

                        <div className={classes.details}>
                          <CardActionArea href={'/buildings/1/rooms'}>
                            <CardContent className={classes.content}>
                              <Typography component="h5" variant="h5">
                                {building.name}
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                {building.address}
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                {building.numberOfRooms} rooms available
                              </Typography>

                            </CardContent>
                          </CardActionArea>

                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={building.image}
                            title="Live from space album cover"
                        />
                        <LinearProgress variant="determinate" value={80} style={{height:10,}}/>


                      </Card></TableCell>
                    </Grow>

                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    )
  }

}

export default withStyles(useStyles)(BuildingList)

