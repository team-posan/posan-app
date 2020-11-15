import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './store';
import Login from './pages/Login';
import ScanBarcode from './pages/ScanBarcode';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { keepLoginAction } from './store/actions/authAction'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const access_token = localStorage.getItem('access_token')
    if(access_token){
      dispatch(keepLoginAction())
    }
  },[])


  return (
      <div className="App">
        <Router>
          <NavbarComponent />
          <Switch>
            <Route exact path='/'>
              {/* {localStorage.access_token ?   */}
              <HomePage /> 
              {/* // : <Login /> } */}
            </Route>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/scanbarcode' component={ScanBarcode}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
