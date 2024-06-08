import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React ,{useState} from 'react'



function App() {

  const [mode,setmode] = useState("ligth");
 
  const togglemode = ()=>{

    if(mode === 'ligth'){

      setmode('dark')
      document.body.style.backgroundColor ='#042743';
     
    }else{

      setmode('ligth')
      document.body.style.backgroundColor ='white';
      
    }

  }


  return (
   <>

   
 <Navbar homesection="home2" abouttext="jdjf" mode={mode} webmode={togglemode}></Navbar>
 

 <div className="container">
 <Textform title="TextUtils" aboutform="Enter your text" mode={mode}></Textform>

 </div>
   
   </>
  );
}

export default App;
