import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React ,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App()  {

  const [mode,setmode] = useState("ligth");
 
  const togglemode = ()=>{

    if(mode === 'ligth'){

      setmode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","Success");
     
    }else{

      setmode('ligth')
      document.body.style.backgroundColor ='white';
      showAlert("Ligth mode has been enabled","Success");
    }

  }

  const [alert , setalert] = useState(null);

  const showAlert = (message , type)=>{

    setalert({
      msg: message,
      type: type

    })

    setTimeout(()=>{

      setalert(null);

    },1800);

  }


  return (
   <>

   <Router>
   
 <Navbar homesection="Home" abouttext="About us" mode={mode} webmode={togglemode}></Navbar>

 <Alert alert={alert}></Alert>
 
<div className='container'>
 

<Routes>
<Route exact path='/about' element={<About mode={mode}></About>}/>
<Route exact path="/" element={<Textform title="TextUtils" showAlert={showAlert} aboutform="Enter your text" mode={mode}></Textform>}/>



</Routes>

</div>

</Router>

   
   </>
  );
}

export default App;