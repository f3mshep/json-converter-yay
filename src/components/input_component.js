import React from 'react';
import TextEditArea from '../containers/text_edit_area.js';
import PrettyJSON from '../containers/pretty_json.js';
import toCSV from '../include/json_to_csv';
import Spacer from '../containers/spacer';
import FileDropzone from './dropzone';

class InputComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editting: true,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  };

  handleFile(file) {
    const that = this;
    const reader = new FileReader();
    reader.onload = function (event) {
      that.setState({
        value: event.target.result,
        editting: false
      })
    };
    reader.readAsText(file);
  }

  handleFocus(){
    this.setState({
      editting: true
    })
  };

  handleBlur(){
    if (this.state.value !== ""){
      this.setState({
        editting: false
      })
    }
  };

  parseStateToJSON(){
    return JSON.parse(this.state.value);
  }

  downloadCSV(results){
    // Use JSON to Export your data as CSV
    // https://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
    // Cross browser fix suggested by Piotr Supłat
    let link;
    if (results == null) return;

    const filename = 'results.csv';

    var blob = new Blob([results], {type: "text/csv;charset=utf-8;"});

    if (navigator.msSaveBlob){
      // IE 10+
      navigator.msSaveBlob(blob, filename)
    }
    else {
      link = document.createElement("a");
      if (link.download !== undefined){
        // feature detection, Browsers that support HTML5 download attribute
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style = "visibility:hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  convertJSON(){
    let items = this.parseStateToJSON();
    let results = toCSV(items);
    this.downloadCSV(results);
  }

  render(){
    return(
      <div>
          <div  className="row justify-content-center">
            <div onClick={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} className="col-md-8">
              <FileDropzone handleFile={this.handleFile.bind(this)}>
                  {this.state.editting ?
                  <TextEditArea value={this.state.value} handleChange={this.handleChange.bind(this)}/> : <PrettyJSON value={this.state.value}/>}
              </FileDropzone>
            </div>
          </div>
        <div className="row"><Spacer size={"xs-sm"}/></div>
        <div  className="row justify-content-center">
          <div className="col-md-8"><button onClick={this.convertJSON.bind(this)} className='btn btn-lg btn-block btn-secondary'>Convert</button></div>
        </div>
      </div>
    );
  };

};

export default InputComponent;