import React from 'react';
import MainView from '../src/containers/MainView'
import ProfileView from '../src/containers/ProfileView'
import './App.css';
import MapContainer from "./components/MapContainer";
import Container from "@material-ui/core/Container";
import AppBar from "./components/NavBar";

function App() {
  return (
    <div className="App">



      {/*<ProfileView/>*/}


         <MainView/>


    </div>
  );
}

export default App;
