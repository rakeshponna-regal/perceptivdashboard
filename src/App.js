import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/login/loginscreen';
import Header from './components/header';
import HomeScreen from './screens/home/homescreen';
import Templates from './templates';
import history from './history';
import Module1 from './modules/module_1';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Templates/>} />
          <Route path="/module1" element={<Module1/>} />
          {/* <Route path="/home" element={<HomeScreen/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
