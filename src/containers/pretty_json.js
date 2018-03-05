import React from 'react';
import JSONPretty from 'react-json-pretty'

class PrettyJSON extends React.Component {
  render(){
    return <div className="my-area"><JSONPretty json={this.props.value} /></div>;
  }
};

export default PrettyJSON;