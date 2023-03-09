import React from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import dotenv from ‘dotenv’;
dotenv.config()




const KEY =process.env.TOKEN;

const Business =(props)=> {

    return (
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
}


export default Business({
    apiKey: KEY
  })(MapContainer);



 

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});