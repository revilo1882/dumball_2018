import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Journey extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
        <div className="container-fluid">

        <h1>

        </h1>

        <p>
        <Map
          google={this.props.google}
          style={{width: '98%', height: '85%', position: 'relative'}}
          zoom={12}
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025
          }}
          onClick={this.onMapClicked}
          >

          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={{lat: 28.7041, lng: 77.1025}}
             />
          <Marker
            onClick={this.onMarkerClick}
            name={'Test putting a really long sentance here'}
            position={{lat: 28.7541, lng: 77.1125}} />
          <Marker />

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
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
