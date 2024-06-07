import React, { useState } from "react";

export default function Textform(props) {

    const handleOnChange = (event) => {
        settext(event.target.value);
      };

      
  const UpClick = () => {
  
    let newText = text.toUpperCase();
    settext(newText);
  };

  const LowClick = () => {
   
    let newText = text.toLocaleLowerCase();
    settext(newText);
  };

  
  const [text, settext] = useState("");

  const [isBlue , setBlue] = useState(false);

  const togglecolour = ()=>{

    setBlue(!isBlue);

  };

  return (
    <div>
      <h1>{props.title} </h1>

      <div className="mb-3">
        
        <textarea
          className={isBlue ? 'blue-txt' : 'red-txt'}
          id="myBox"
          value={text}
          placeholder="Enter your text here"
          onChange={handleOnChange}
          rows="10"
          cols={80}
         
        ></textarea>
      </div>

      <div className="Btn">
        <button className="btn btn-primary" onClick={UpClick}>
          Convert to UpperCase
        </button>
      </div>

      <div className="Btn">
        <button className="btn btn-primary" onClick={LowClick}>
          Convert to LowerCase
        </button>
      </div>

      <div className="Btn">
      <button className="btn btn-primary" onClick={togglecolour}>
        toggle color in Black & Blue
      </button>
    </div>

    <div className="container">
    
    <h1>Text Summary</h1>
    <p>{text.split(" ").length-1} words and {text.length} charactors</p>
    
    </div>




    </div>
  );
}
