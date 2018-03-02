import React from 'react';
import TextEditArea from '../containers/text_edit_area.js';
import PrettyJSON from '../containers/pretty_json.js';
import jsonexport from 'jsonexport'

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

  toCSV(items){
    return jsonexport(items, function(err, csv) {
      if (err) return console.log(err);
      return csv
    });
  }

  downloadCSV(results){
    let filename = 'results'
    if (!results.match(/^data:text\/csv/i)) {
      let results = "data:text/csv;charset=utf-8," + results;
    }

    const data = encodeURI(results)
    let link = document.createElement('a')
    link.setAttribute("href", data);
    link.setAttribute("download", filename);
    link.click();
  }

  convertJSON(){
    let items = this.parseStateToJSON()
    let results = this.toCSV(items)

  }

  render(){
    return(
      <div>
        <div  className="row justify-content-center">
          <div onClick={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} className="col-md-8">
            {this.state.editting ?
            <TextEditArea value={this.state.value} handleChange={this.handleChange.bind(this)}/> : <PrettyJSON value={this.state.value}/>}
          </div>
        </div>
        <div  className="row justify-content-center">
          <div className="col-md-8"><button onClick={this.convertJSON.bind(this)} className='btn btn-lg btn-block btn-secondary'>Convert</button></div>
        </div>
      </div>
    );
  };

};

export default InputComponent;