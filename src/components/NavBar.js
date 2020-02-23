import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from "@material-ui/core/styles";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';


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


});

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props;

    return (

        <div>

          <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
              <Toolbar>

                <MeetingRoomIcon className={classes.logo}/>
                <Typography variant="h5" className={classes.title}>
                  COP
                </Typography>


              </Toolbar>
            </AppBar>
          </div>


        </div>

    )
  }

}

export default withStyles(useStyles)(NavBar)

