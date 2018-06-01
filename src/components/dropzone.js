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
    //cleans up file preview URL to prevent memory leaks
    window.URL.revokeObjectURL(file.preview)
    if (file.name.split('.').slice(-1)[0].toLowerCase() !== "json"){
      alert("Files must have .json extension")
    } else {
      this.props.handleFile(file)
    }
  }

  render(){
     return <Dropzone disableClick style={{position: "relative"}} onDrop={this.handleDrop.bind(this)}>
        {this.props.children}
      </Dropzone>;
  };
};

export default FileDropzone;