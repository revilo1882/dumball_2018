import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const style = {
  width: '98%',
  height: '85%'
}

class Journey extends Component {
  render() {
    return (
        <div className="container-fluid">

        <h1>

        </h1>

        <p>
        <Map
          google={this.props.google}
          style={style}
          zoom={12}
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025
          }}
          onClick={this.onMapClicked}
          >

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map>
        </p>

        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyChzJ9aAD7HZRep-2mcg9pclAThuhNXzsk")
})(Journey)
