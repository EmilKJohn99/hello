import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import First from './First';
import Bootstrap from './Bootstrap';
import Second from './Second';
import Third from './Third';
import New from './new';
import Nice from './Nice';
import StateComponent from './StateComponent';
import Counter from './Counter';
import Login from './login';
import Form from './form';
import Newform from './newform';
import Api from './Api';
import Apitest from './Apitest';
import Listrendering from './Listrendering';
import Listrenderingobject from './Listrenderingobject';
import Cardimp from './Cardimp';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Hw from './Hw';
import Linking from './Linking';
import Fpic from './Fpic';
import Navbar from './Navbar';
import Category from './Category';


function App() {
  
  
  return (
    <BrowserRouter>
    <div className="">
      {/* <Bootstrap name='Emil' age={18} />
      <First/>
      <Second/>
      <Third content="features" packages="costly"/>
      <New/>
      <Nice name="eml"/>
      <StateComponent/>
      <Counter/>
      <Login/>
      
  <Newform/> 
  <Api/> */}
    {/* <Apitest/> */}
    {/* <Listrendering/> */}
    {/* <Listrenderingobject/> */}
    {/* <Cardimp/>  */}
    {/* <Hw/> */}
    {/* <Linking/> */}
   <Navbar/>
   <Category/>
 <Routes> 
  <Route path='/home' element={<Hw/>}/>
  <Route path='/list' element={<Listrendering/>}/>
  <Route path='/counter' element={<Counter/>}/>
  <Route path='/pic/:id' element={<Fpic/>}/>
  <Route path='/categories/jewelery' element={<Category category="jewelery"/>}/>
  <Route path='/categories/electronics' element={<Category category="electronics"/>}/>
  <Route path="/categories/men's clothing" element={<Category category="men's clothing"/>}/>
  <Route path="/categories/women's clothing" element={<Category category="women's clothing"/>}/>


  


</Routes> 




    </div>
    </BrowserRouter>
   
  );
}

export default App;
