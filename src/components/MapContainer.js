import React, {Component} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,

} from 'react-google-maps';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel'

import STYLE from '../others/mapStyle'
import LOCATIONS from '../others/locations'
import SERVICE from '../service'
import {bindActionCreators} from "redux";
import {
  cancelBooking,
  compare,
  viewBuilding,
  viewRoom
} from "../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";



class MapContainer extends Component {
  constructor(props) {

    super(props);
    this.state = {

      markers: [{
        position: {
          lat: 42.338805,
          lng: -71.088924
        }
      }],
      locations: []

    }

  }
    componentDidMount() {

    }



    render() {
    const ClassroomMap = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={this.props.curViewingBuilding == -1? {
              lat: 42.338805,
              lng: -71.088924
            }:this.props.buildings[this.props.curViewingBuilding].address.loc}
            defaultZoom={this.props.curViewingBuilding == -1? 17 : 20}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
              styles: STYLE,
            }}
        >

          {
            this.props.buildings.map((building,index) => (

                <MarkerWithLabel labelAnchor={{x: -2, y: -2}}
                                 position={{lat:building.address.loc.lat, lng:building.address.loc.lng}}
                                 onClick={()=>{
                                   this.props.viewBuilding(index)
                                   this.props.history.push("/buildings/rooms")}}>
                  <div style={{fontSize: 18,fontWeight: 'bold'}}>{building.name}</div>
                </MarkerWithLabel>
            ))
          }


        </GoogleMap>

    ));
    return (
        <div>
          <ClassroomMap
              containerElement={<div style={{height: `80vh`, width: '100%'}}/>}
              mapElement={<div style={{height: `100%`}}/>}
          />
        </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    buildings: state.state.buildings,
    isLoggedIn: state.state.isLoggedIn,
    bookings:state.state.bookings,
    curViewingBuilding: state.state.curViewingBuilding,
    curViewingRoom: state.state.curViewingRoom,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({compare,cancelBooking,viewBuilding}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter((MapContainer)))
