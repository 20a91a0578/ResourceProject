
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Repairs from './components/Repairs';
import User from './components/User';
import Bundles from './components/Bundles';
import Udashboard from './Usercomponents/Udashboard';
import Urepairs from './Usercomponents/Urepairs';
import Ureports from './Usercomponents/Ureports';
import LoginPage from './LoginPage';
import Ubundles from './Usercomponents/Ubundles';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/> 
      <Route path='/admindashboard' element={<Home/>}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Repairs' element={<Repairs />}/>
      <Route path='/User' element={<User />}/>
      <Route path='/Bundles' element={<Bundles/>}/>
      <Route path='/userdashboard' element={<Udashboard/>}/>
      <Route path='/Urepairs' element={<Urepairs/>}/>
      <Route path='/Ureports' element={<Ureports/>}/>
      <Route path='/Ubundles' element={<Ubundles/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
