import React from 'react';
import TextEditArea from '../components/text_edit_area.js'
import PrettyJSON from '../containers/pretty_json.js'

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
      <div  className="row justify-content-center">
        <div onFocus={this.handleFocus} onBlur={this.handleBlur} className="container my-text-area">
          {this.state.editting ? <TextEditArea/> : <PrettyJSON/>}
        </div>
        <button className={'btn btn-priamry'}>Convert</button>
      </div>
    );
  };

};

export default InputComponent;