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
    const file = acceptedFiles[0];
    window.URL.revokeObjectURL(file.preview)
    if (file.name.split('.').slice(-1)[0].toLowerCase() !== "json"){
      throw "File must be .json";
    }
    this.props.handleFile(file)
  }

  render(){
     return <Dropzone disableClick style={{position: "relative"}} onDrop={this.handleDrop.bind(this)}>
        {this.props.children}
      </Dropzone>;
  };
};

export default FileDropzone;