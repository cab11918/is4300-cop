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
import RoomCard from "./RoomCard";
import Grow from "@material-ui/core/Grow";

const useStyles = theme => ({

  table: {
    maxHeight: 440,
    overflowY:'auto'

  },
  tContainer:{
    overflow: 'auto',
    height:'72vh'
  }


});

function createData(card) {
  return {card};
}

class RoomList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {classes} = this.props;
    const rows = [
      createData(<RoomCard/>),
      createData(<RoomCard/>),
      createData(<RoomCard/>),
      createData(<RoomCard/>),
      createData(<RoomCard/>),


    ];

    return (
        <TableContainer className={classes.tContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                  <TableRow key={row.name}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...({timeout: 1000 + index * 150})}>

                    <TableCell>{row.card}</TableCell>
                    </Grow>

                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    )
  }

}

export default withStyles(useStyles)(RoomList)

