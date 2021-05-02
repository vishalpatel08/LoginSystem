import './App.css';
import Registration from './Login/Reg'
import Login from './Login/Login'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path='/reg' component={Registration} />
      </BrowserRouter>
    </div>
  );
}

export default App;
