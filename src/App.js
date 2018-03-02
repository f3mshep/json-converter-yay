import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './containers/header_bar';
import HeaderText from './containers/header_text';
import InputComponent from './components/input_component';
import InfoText from './containers/info_text';
import Footer from './containers/footer';
import Spacer from './containers/spacer';
import "react-json-pretty/JSONPretty.monikai.styl";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar/>
        <Spacer size={"md"}/>
        <HeaderText text={"Paste JSON you want to be converted to CSV"}/>
        <Spacer size={"sm"}/>
        <InputComponent/>
        <Spacer size={"sm"}/>
        <InfoText text={"JSON Converter yay!"} myClass={'text-muted'}/>
        <Spacer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
