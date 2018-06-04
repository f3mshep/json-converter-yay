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
import ModalContent from './containers/modal_contents';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      modal: false,
      modalMessage: null
    };
  }

  toggleModal(){
    if (!this.state.modal){
      this.setState({modal: true});
    } else {
      this.setState({modal: false, modalMessage: null});
    };
  }

  renderModal(message){
    this.setState({modal: true, modalMessage: message})
  }

  render() {
    return <div>
        <HeaderBar />
        <Modal isShowing={this.state.modal}  toggleCallback={this.toggleModal.bind(this)}>
          <ModalContent>{this.state.modalMessage}</ModalContent>
        </Modal>
        <div className="container-fluid">
          <Spacer size={"md"} />
          <HeaderText text={"Paste or drag JSON you want converted to CSV"} />
          <Spacer size={"sm"} />
          <InputComponent renderModal={this.renderModal.bind(this)} />
          <Spacer size={"sm"} />
          <InfoText text={"Max file size: 100 mb"} myClass={"text-muted"} />
        </div>
        <Footer />
      </div>;
  }
}

export default App;
