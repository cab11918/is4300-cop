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
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grow from "@material-ui/core/Grow";
import {bindActionCreators} from "redux";
import {cancelBooking, compare} from "../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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
    align: 'right'
  }

});

class BookingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function createData(building, room, numberOfPeople, time) {
      return {building, room, numberOfPeople, time};
    }

    const rows = [
      createData('Shillman Hall', '102', 5, '13:00-14:35'),
      createData('Snell Library', '237', 3, '8:00-12:00'),
      createData('Nightingale Hall', '132H', 10, '9:20-12:30'),

    ];
    const {classes} = this.props;

    return (

        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Building</TableCell>
                <TableCell align="right">Room</TableCell>
                <TableCell align="right">Number of people</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.bookings.map((booking, index) => (
                  <Grow in={true}
                        style={{transformOrigin: '0 0 0'}}
                        {...({timeout: 1000 + index * 150})}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {booking.building}
                      </TableCell>
                      <TableCell align="right">{booking.room}</TableCell>
                      <TableCell
                          align="center">{booking.numberOfPeople}</TableCell>
                      <TableCell align="right">{booking.time}</TableCell>
                      <TableCell align="right"> <Button variant="contained"
                                                        className={classes.feedbackButton}
                                                        onClick={() => {
                                                          this.props.cancelBooking(
                                                              index)
                                                        }}
                      >Cancel</Button>
                      </TableCell>
                    </TableRow>
                  </Grow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn,
    bookings: state.state.bookings
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({compare, cancelBooking}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((withStyles(useStyles)(BookingList))))

