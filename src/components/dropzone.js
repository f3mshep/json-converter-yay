import Dropzone from 'react-dropzone';
import React from 'react';

const MAX_BYTES = 104857600;

class FileDropzone extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      files: null,
      activeDrop: false,
      modal: false,
      modalMessage: null
    });
  }

  toggleModal() {
    if (this.state.modal) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    };
  }

  handleDrop(acceptedFiles, rejectedFiles){
    const file = acceptedFiles[0];
    //cleans up file preview URL to prevent memory leaks, don't delete
    window.URL.revokeObjectURL(file.preview)
    if (file.name.split('.').slice(-1)[0].toLowerCase() !== "json"){
      this.props.renderModal("Files must have .json extension");
    }
    else if (file.size > MAX_BYTES){
      this.props.renderModal("File cannot be over 100 megabytes");
    }
    else {

      this.props.handleFile(file);
    }
    this.handleLeave();
  }

  handleEnter(){
    this.setState({activeDrop: true})
  }

  handleLeave(){
    this.setState({activeDrop: false})
  }

  render(){
    let activeClass = this.state.activeDrop ? "forced-focus" : "forced-focus-off"
    return <Dropzone className={activeClass} disableClick style={{position: "relative"}} onDragEnter={this.handleEnter.bind(this)} onDragLeave={this.handleLeave.bind(this)} onDrop={this.handleDrop.bind(this)}>
      {this.props.children}
    </Dropzone>;
  };
};

export default FileDropzone;