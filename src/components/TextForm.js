import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // setText('You clicked on up')
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText('');
  };

  const handleRES = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
}
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter your Text here"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleRES}>
          Remove Extra Space
        </button>
        
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        


      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p id="mERAb">{text}</p>
      </div>
    </>
    
  );
};

export default TextForm;
