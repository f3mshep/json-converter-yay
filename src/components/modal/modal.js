import React from 'react';
import Overlay from './overlay';
import ModalComponent from './modal_component';

class Modal extends React.Component{
  constructor(props){
    super(props)

  }

  toggleModal(){

  }

  render(){
    return(
      <Overlay isShowing={this.props.isShowing} toggleCallback={this.props.toggleCallback}>
        <ModalComponent isShowing={this.props.isShowing} toggleCallback={this.props.Callback} >
          {this.props.children}
        </ModalComponent>
      </Overlay>
    );
  };

  //overlay props: isShowing, toggleCallback
    //modal_component props: isShowing, toggleCallback
      //this.props.children
}

export default Modal;