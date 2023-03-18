import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import dotenv from "dotenv";
import MapContainer from "./MapContainer"

const Business =()=> {

    return (
      <>
      <h1>Map page</h1>
        <MapContainer />
      </>
    );
}


;

export default Business;