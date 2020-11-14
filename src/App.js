import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
