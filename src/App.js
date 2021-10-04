
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Notfound from './componants/Notfound/Notfound';
import Services from './componants/Services/Services';
import Extra from './componants/Login/Login';
import Footer from './componants/Footer/Footer';
import Login from './componants/Login/Login';

function App() {

  return (
    <div className="App">
    
     <BrowserRouter>
     <Header> </Header>
     <Switch> 
      <Route exact path='/'>
      <Home></Home>
      </Route>
       <Route path="/home">
      <Home> </Home>
       </Route>

       <Route path ="/about">
         <About></About>
       </Route>

       <Route path="/services">
         <Services></Services>
       </Route>


       <Route path='/login'>
        <Login></Login>
       </Route>
       
       
       <Route path='*'>
        <Notfound></Notfound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
