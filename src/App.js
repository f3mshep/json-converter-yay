import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderBar/>
        <HeaderText text={"Paste" + <strong>JSON</strong> + "you want to be converted to CSV."}/>
        <InputComponent/>
        <InfoText text={"JSON Converter yay!"} myClass={'text-muted'}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
