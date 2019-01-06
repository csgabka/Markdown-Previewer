import React from 'react';

const Input = ({onType}) => {
  	return (
  		<div className="container">
  		<h2>Input</h2>
  		<textarea onChange={onType} className="form-control" id="editor" rows="5"></textarea>
  		</div>
  		);
}

  export default Input;
