import React from 'react';
import AllViews from '../src/containers/AllViews'
import ProfileView from '../src/containers/ProfileView'
import './App.css';
import MapContainer from "./components/MapContainer";
import Container from "@material-ui/core/Container";
import AppBar from "./components/NavBar";

function App() {
  return (
    <div className="App">



      {/*<ProfileView/>*/}


         <AllViews/>


    </div>
  );
}

export default App;
