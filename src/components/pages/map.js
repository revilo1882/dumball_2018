import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Mapper extends Component {

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
				<Map
					google={this.props.google}
					style={{width: '98%', height: '85%', color: 'black', position: 'relative', top: '2%'}}
					zoom={5}
					initialCenter={{
						lat: 46.0379,
						lng: 8.5623
					}}

				>
					<Marker
						title={'The marker`s title will appear as a tooltip.'}
						onClick={this.onMarkerClick}
						name={'Friday 14/09/18'}
						position={{lat: 51.3853, lng: 1.3772}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Saturday 15/09/18'}
						position={{lat: 46.2040, lng: 6.1454}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Sunday 16/09/18'}
						position={{lat: 46.6218, lng: 13.8488}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Monday 17/09/18'}
						position={{lat: 43.8636, lng: 18.3880}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Tuesday 18/09/18'}
						position={{lat: 42.7044, lng: 19.3958}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Wednesday 19/09/18'}
						position={{lat: 42.6703, lng: 21.1645}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Thursday 20/09/18'}
						position={{lat: 41.3243, lng: 19.4565}}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Friday 21/09/18'}
						position={{lat: 39.6550, lng: 19.9212}}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
						<div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div>
					</InfoWindow>

				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyChzJ9aAD7HZRep-2mcg9pclAThuhNXzsk')
})(Mapper);
