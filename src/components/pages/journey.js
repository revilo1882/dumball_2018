import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Journey extends Component {
  render() {
    return (
        <div className="container-fluid">

        <h1>
          Journey
        </h1>

        <p>
        <Map google={this.props.google} zoom={14}>

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
