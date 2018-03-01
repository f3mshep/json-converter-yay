import React from 'react';

class InputComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editting: true
    };
  };

  handleFocus(){
    this.setState({
      editting: true
    })
  };

  handleBlur(){
    this.setState({
      editting: false
    })
  };

  render(){
    return(
      <div onFocus={this.handleFocus} onBlur={this.handleBlur} className="row justify-content-center">
        <div className="container my-text-area">
          {this.state.editting ? <TextEditArea/> : <PrettyJSON/>}
        </div>
      </div>
    );
  };

};

export default InputComponent;