import React from 'react';
import JSONPretty from 'react-json-pretty'

// import Highlight from 'highlight.js'
// import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";
// import { stringify } from 'querystring';
class PrettyJSON extends React.Component {
  render(){
    return <div className="my-area"><JSONPretty themeClassName="docco" json={this.props.value} /></div>;
  }

    // constructor(props){
    //   super(props)
    //   this.highlightCode = this.highlightCode.bind(this)
    // };

    // componentDidMount(){
    //   this.highlightCode()
    // };

    // componentDidUpdate(){
    //   this.highlightCode()
    // };

    // highlightCode(){
    //   if(this.code){
    //     let block = Highlight.highlightBlock(this.code)
    //     debugger
    //   }
    // };

    // render(){
    //   return(<div className="my-area">
    //   <pre className="json" ref={el => {
    //           this.code = el;
    //         }}>
    //         <code>{this.props.value}</code>
    //       </pre>
    //   </div>);
    // };

};

export default PrettyJSON;