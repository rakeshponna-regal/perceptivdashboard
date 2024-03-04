import './template.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppSource from './AppSource';
import AppPortfolio from './AppPorfolio';
import { ThemeProvider } from './context';
import Module1 from '../src/modules/module_1';
import { useNavigate } from 'react-router-dom';

function Templates() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Perform some actions...
        // Then navigate to a different route
        navigate('/module1');
      };
    

    return (
        <div className="main-container">
            <button  className='btn' onClick={handleClick}> Template 1</button>
            <div className='btn' >
            {/* <Link to="/loginscreen" className="btn">Template 1</Link> */}
            </div>
            <button className='btn'> Template 2</button>
        </div>
    );
}

export default Templates;
