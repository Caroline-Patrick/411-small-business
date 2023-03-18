import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import dotenv from "dotenv";
dotenv.config()
const KEY =process.env.TOKEN;

export const MapContainer =(props)=> {

    return (
        <Map
          google={props.google}
          zoom={14}
        //   style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
}


export default GoogleApiWrapper({
    apiKey: KEY
  })(MapContainer);