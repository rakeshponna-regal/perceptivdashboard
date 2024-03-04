import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../screens/login/loginscreen';
import Header from '../components/header';
import HomeScreen from '../screens/home/homescreen';

function Module1() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<LoginScreen/>} />
          <Route path="/home" element={<HomeScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Module1;
