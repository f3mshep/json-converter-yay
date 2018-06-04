import React from 'react'
import ModalComponent from './modal_component';

class ModalContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isShowing: false
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(function () {
      this.setState({ isShowing: true });
    }.bind(this), 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render(){
    return(
      <ModalComponent toggleCallback={this.props.toggleCallback} isShowing={this.state.isShowing}>
        {this.props.children}
      </ModalComponent>
    );
  };
}

export default ModalContainer