import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavbarComponent />
          <Switch>
            <Route exact path='/'>
              {localStorage.access_token ?  <HomePage /> : <Login /> }
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
