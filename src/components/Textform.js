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
   
    let newText = text.toLowerCase();
    settext(newText);
  };


  const handleCopy = ()=>{

    let copytext = document.getElementById("myBox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);



  }

    const handleClear = ()=>{

        settext("");       

    };
  
  const [text, settext] = useState("");

  

    const [Btntxt , setBtn] = useState("blue");
 

  

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
      Convert to UpperCase
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

   

    <div className="container">
    
    <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Text Summary</h1>
    <p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{text.split(" ").length-1} words and {text.length} charactors</p>
    
   
    </div>




    </div>
  );
}
