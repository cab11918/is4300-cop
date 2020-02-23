import React, {Component} from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  MarkerWithLabel
} from 'react-google-maps';

class MapContainer extends Component {
  constructor(props) {

    super(props);
    this.state = {

      markers: [{
        position: {
          lat: 42.339468,
          lng: -71.088525,
        }
      }]

    }

  }

  render() {
    const ClassroomMap = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{
              lat: 42.339468,
              lng: -71.088525
            }}
            defaultZoom={17}
            options={{mapTypeControl: false, fullscreenControl: false}}
        >

          <Marker position={this.state.markers[0].position} />
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
