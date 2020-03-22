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
import SERVICE from '../service'

import ShillmanHallImg from '../imgs/shillmanhall.jpg'
import BuildingCard from "./BuildingCard";
import RoomCard from "./RoomCard";
import Grow from "@material-ui/core/Grow";
import CardActionArea from "@material-ui/core/CardActionArea";
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
        align: 'right'
    },

    table: {
        maxHeight: 440,
        overflowY: 'auto'

    },
    tContainer: {
        overflow: 'auto',
        height: '72vh'
    }


});

function createData(card) {
    return {card};
}

class RoomList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        const buildingID = 1;
        SERVICE.getInstance().getRoomsList(buildingID).then(rooms => {
            this.setState({rooms: rooms})
            console.log(this.state.rooms)
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
                        {this.state.rooms.map((room, index) => (
                            <TableRow key={room.roomid}>
                                <Grow in={true}
                                      style={{transformOrigin: '0 0 0'}}
                                      {...({timeout: 1000 + index * 150})}>

                                    <TableCell><Card className={classes.root} elevation={3}>

                                        <div className={classes.details}>

                                            <CardActionArea href={'/room/101'}>
                                                <CardContent className={classes.content}>
                                                    <Typography component="h5" variant="h5">
                                                      {room.name}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                      Capacity: {room.capacity}
                                                    </Typography>

                                                </CardContent>
                                                <LinearProgress variant="determinate" value={60}/>

                                            </CardActionArea>

                                        </div>


                                    </Card>
                                    </TableCell>
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

