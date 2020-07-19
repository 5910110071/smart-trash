import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, } from 'google-maps-react';
import trim from 'trim'
//import firebase from 'firebase';
import _ from 'lodash';
import mapStyles from "../../mapStyles"

class ShowMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPark: [],
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }


        return (

            
                <div className="container-fluid">

                    <Map
                        google={this.props.google}
                        zoom={17}
                        styles={mapStyles}
                        initialCenter={{ lat: 7.617303, lng: 99.567650 }}
                        onClick={this.onMapClicked}
                        containerStyle={{ width: '100%', height: '500px', position: 'relative' }}
                        style={style}
                    >
                        <Marker
                            position={{
                                lat: 7.617303,
                                lng: 99.567650
                            }}
                            onClick={() => {
                                this.setState({ selectedPark: [7.617303,99.567650] });
                            }}
                            icon={{
                                url: '/trash-green.svg',
                                scaledSize: new window.google.maps.Size(50, 50)

                            }} />
                        
                        <Marker
                            position={{
                                lat: 7.617803,
                                lng: 99.566650
                            }}
                            onClick={() => {
                                this.setState({ selectedPark: [7.617803,99.566650] });
                            }}
                            icon={{
                                url: '/trash-yellow.svg',
                                scaledSize: new window.google.maps.Size(50, 50)

                            }} />
                        
                        <Marker
                            position={{
                                lat: 7.617303,
                                lng: 99.565650
                            }}
                            onClick={() => {
                                this.setState({ selectedPark: [7.617303, 99.565650] });
                            }}
                            icon={{
                                url: '/trash-red.svg',
                                scaledSize: new window.google.maps.Size(50, 50)

                            }} />

                        {this.state.selectedPark && (

                            <InfoWindow
                                onClose={this.onInfoWindowClose}
                                visible={true}
                                position={{
                                    lat: this.state.selectedPark[0],
                                    lng: this.state.selectedPark[1]
                                }} >
                                <div>
                                    <p>lat : {this.state.selectedPark[0]} lng : {this.state.selectedPark[1]}</p>
                                </div>
                            </InfoWindow>
                        )
                        }
                    </Map>
                </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAEKz4zf3LOHpRzUE0B2PTWQCWIAscmfDw'
})(ShowMap);





