import React from 'react';
import {Map, Polygon,InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux';
import {startGetData} from '../actions/data'


//lat 40.738782
//lon -73.904896
class MapContainer extends React.Component {

    constructor(){
        super();
        //make the location of the click global
        this.state = {
            center: {
                lat: 40.738782,
                lng: -73.904896
            }
        }
        this.mapClicked = this.mapClicked.bind(this);
    }

    //registers the users click on the map
    mapClicked(mapProps, map, clickEvent) {
        //gets the lat and lon of the place of the click
        let latitude = clickEvent.latLng.lat();
        let longitude = clickEvent.latLng.lng();

        //make the click position the center of the map
        this.setState(()=>{
            return {
                center: {
                    lat: latitude,
                    lng: longitude
                }
            }
        })
        //Every time a user clicks we should dispatch an action to get the data for the given coordinates
        this.props.dispatch(startGetData(latitude, longitude));
     }

    render() {
        const triangleCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757},
            {lat: 25.774, lng: -80.190}
          ];
      return (
        <Map google={this.props.google} 
            zoom={14}
            initialCenter={this.state.center}
            center={this.state.center}
            onClick={this.mapClicked}
            style={{height: '400px'}}
            className='map'
            >

            {this.props.data.map((val, index)=>{
                let [lon, lat] = val.lat_lon.coordinates;
                //plot the markers
                return (
                    <Marker 
                        key={index}
                        name={'TEST'}
                        position={{lat: lat, lng: lon}}/>
                )
            })}


            
            <Polygon
                paths={triangleCoords}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35} />

        </Map>
      );
    }
  }

const WrappedContainer = GoogleApiWrapper({
    apiKey: ('AIzaSyCZQ8G8vi-c4zoVn5h080oOYKp2nw4Wi0M')
  })(MapContainer);


const mapStateToProps = (state) =>{
    console.log(state);
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(WrappedContainer);



