import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
//import Home from './Pages/Home';
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/Offers'
import Footer from './Footer';
import NotFound from './Pages/NotFound';
import Explore from './Pages/Explore';
import Offers from './Pages/Offers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='bg-gray-300 h-[570px]'>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/*' element={<NotFound/>} />
          
        </Routes></div>
      
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
