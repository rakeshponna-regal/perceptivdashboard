import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import "../ECOMMERCE/ecommerceApp.css"

function EcommerceApp() {
  return (
    <div className="ecommerceApp">
      <Router>
        <Header/>
        <Routes>
          {/* <Route path="/" element={<LoginScreen/>} />
          <Route path="/home" element={<HomeScreen/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default EcommerceApp;
