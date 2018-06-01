import Dropzone from 'react-dropzone';
import React from 'react';

class FileDropzone extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      files: null
    });
  }

  handleDrop(acceptedFiles, rejectedFiles){
    const that = this;
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      let newJSON = JSON.parse(event.target.result)
    };

    reader.readAsText(file);
  }

  render(){
     return <Dropzone disableClick style={{position: "relative"}} onDrop={this.handleDrop.bind(this)}>
        {this.props.children}
      </Dropzone>;
  };
};

export default FileDropzone;