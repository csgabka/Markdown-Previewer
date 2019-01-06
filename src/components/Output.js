import React from 'react';
let marked = require("marked");

const Output = ({output}) => {
  	return (
  		<div className="container">
  		<h2>Output</h2>
  		<div id="preview" dangerouslySetInnerHTML = {{__html: marked(output)}}></div>
  		</div>
  		);
}

  export default Output;