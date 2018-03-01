import React from 'react';
import Highlight from 'highlight.js'

class PrettyJSON extends React.Component {

    constructor(props){
      super(props)
      this.highlightCode = this.highlightCode.bind(this)
    };

    componentDidMount(){
      this.highlightCode()
    };

    componentDidUpdate(){
      this.highlightCode()
    };

    highlightCode(){
      if(this.code){
        Highlight.configure({useBR: true})
        Highlight.highlightBlock(this.code)
      }
    };

    render(){
      return(<div className="my-area">
      <pre className="json" ref={el => {
              this.code = el;
            }}>
            <code>{this.props.value}</code>
          </pre>
      </div>);
    };

};

export default PrettyJSON;