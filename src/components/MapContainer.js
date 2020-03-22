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

class MapContainer extends Component {
  constructor(props) {

    super(props);
    this.state = {

      markers: [{
        position: {
          lat: 42.339468,
          lng: -71.088525,
        }
      }],
      locations: []

    }

  }
    componentDidMount() {
        SERVICE.getInstance().getBuildingsList().then(locations => {
            this.setState({locations:locations})
            console.log(this.state.buildings)
        })
    }

    render() {
    const ClassroomMap = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{
              lat: 42.339468,
              lng: -71.088525
            }}
            defaultZoom={17}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
              styles: STYLE,
            }}
        >

          {
            this.state.locations.map(loc => (
                <MarkerWithLabel labelAnchor={{x: -2, y: -2}}
                                 position={{lat:loc.latitude, lng:loc.longitude}}
                                 onClick={()=>{alert(loc.name)}}>
                  <div style={{fontSize: 18,fontWeight: 'bold'}}>{loc.name}</div>
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
export default MapContainer;
