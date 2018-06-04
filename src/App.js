import React, { Component } from 'react';
import './App.css';
import HeaderBar from './containers/header_bar';
import HeaderText from './containers/header_text';
import InputComponent from './components/input_component';
import InfoText from './containers/info_text';
import Footer from './containers/footer';
import Spacer from './containers/spacer';
import "react-json-pretty/JSONPretty.monikai.styl";
import Modal from './components/modal/modal';

class App extends Component {
  render() {
    return <div>
        <HeaderBar />
        <Modal>Test</Modal>
        <div className="container-fluid">
          <Spacer size={"md"} />
          <HeaderText text={"Paste or drag JSON you want converted to CSV"} />
          <Spacer size={"sm"} />
          <InputComponent />
          <Spacer size={"sm"} />
          <InfoText text={"Max file size: 100 mb"} myClass={"text-muted"} />
        </div>
        <Footer />
      </div>;
  }
}

export default App;
