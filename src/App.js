import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
   <>
   
 <Navbar homesection="home2" abouttext="jdjf"></Navbar>
 
 <div className="container">
 <Textform title="TextUtils" aboutform="Enter your text"></Textform>
 </div>
   
   </>
  );
}

export default App;
