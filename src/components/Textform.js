import React, { useState } from "react";

export default function Textform(props) {

    const handleOnChange = (event) => {
        settext(event.target.value);

        countWords(text);
 

      };

      
  const UpClick = () => {
  
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to Uppercase!","Success");
  
  };

  const LowClick = () => {
   
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to Lowercase!","Success");
  };


  const handleCopy = ()=>{

    let copytext = document.getElementById("myBox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("Text copy to clipboard!","Success");

  };

    const handleClear = ()=>{

        settext("");  
        props.showAlert("Text Cleared!","Success");     

    };
  
  const [text, settext] = useState("");


    const [intialword,finalword]= useState(0);


function countWords(text) {
    // Step 1: Trim the string to remove leading and trailing whitespace
    text = text.trim();
    
    // Step 2: Split the string into an array of words
    // Use a regular expression to match words, accounting for multiple spaces
    let words = text.split(/\s+/);

    // Step 3: Filter out any empty strings (not needed if using /\s+/ in split)
    words = words.filter(word => word.length > 0);

    // Step 4: Return the count of words

    finalword(words.length);

  }


 
  return (
    <div>

      <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>    {props.title} </h1>

      <div className="mb-3" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}>
        
        <textarea
          id="myBox"
          value={text}
          placeholder="Enter your text here"
          onChange={handleOnChange}
          rows="10"
          cols={90}
          style={{color: props.mode === 'dark' ? 'black' : 'black' , backgroundColor: props.mode === 'dark' ? '#c6bfbf' : 'white'} }
         
        ></textarea>
      </div>

    <div className="buttons">
    
    <div className="Btn">
    <button className="btn btn-primary" onClick={UpClick}>
      UpperCase
    </button>
  </div>      


  <div className="Btn">
    <button className="btn btn-primary" onClick={LowClick}>
      Convert to LowerCase
    </button>
  </div>

  
  <div className="Btn">
  <button className="btn btn-primary" onClick={handleCopy}>
    Copy Text
  </button>
</div>


<div className="Btn">
  <button className="btn btn-primary" onClick={handleClear}>
    clear text
  </button>
</div>
    
    </div>

   

    <div className="summry">
    
    <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Text Summary</h1>
    <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{intialword} words and {text.length} charactors</p>
    
   
    </div>




    </div>
  );
}
