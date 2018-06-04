import React from 'react';
import Overlay from './overlay';
import ModalContainer from './modal_container'

class Modal extends React.Component{

  toggleModal(){
    if(this.state.modalShowing){
      this.setState({modalShowing: false})
    } else {
      const that = this;
      setTimeout(() => {
        that.setState({modalShowing: true})
      }, 100);
    }
  }

  render(){
    if(this.props.isShowing){
      return <Overlay isShowing={this.props.isShowing} toggleCallback={this.props.toggleCallback}>
        <ModalContainer isShowing={this.props.isShowing} toggleCallback={this.props.toggleCallback}>
          {this.props.children}
        </ModalContainer>
      </Overlay>;
    } else {
      return null;
    }
  };
}

export default Modal;