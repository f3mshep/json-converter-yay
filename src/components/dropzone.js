import Dropzone from 'react-dropzone';
import React from 'react';

const MAX_BYTES = 13107200;

class FileDropzone extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      files: null,
      activeDrop: false
    });
  }

  handleDrop(acceptedFiles, rejectedFiles){
    const file = acceptedFiles[0];
    //cleans up file preview URL to prevent memory leaks
    window.URL.revokeObjectURL(file.preview)
    if (file.name.split('.').slice(-1)[0].toLowerCase() !== "json"){
      alert("Files must have .json extension");
    }
    else if (file.size > MAX_BYTES){
      alert("File cannot be over 100 megabytes");
    }
    else {
      this.handleLeave();
      this.props.handleFile(file);
    }
  }

  handleEnter(){

    this.setState({activeDrop: true})
  }

  handleLeave(){
    this.setState({activeDrop: false})
  }

  render(){
    var activeClass = this.state.activeDrop ? "forced-focus" : "forced-focus-off"
    return <Dropzone className={activeClass} disableClick style={{position: "relative"}} onDragEnter={this.handleEnter.bind(this)} onDragLeave={this.handleLeave.bind(this)} onDrop={this.handleDrop.bind(this)}>
      {this.props.children}
    </Dropzone>;
  };
};

export default FileDropzone;