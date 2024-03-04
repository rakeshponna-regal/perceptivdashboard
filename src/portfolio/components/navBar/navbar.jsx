import React from 'react'
import './navBar.css'
import Toggle from '../toggle/toggle'
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Rakesh Ponna</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link activeClass="active" to={'navbar'} spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfol" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className='button n-button'>Contact</button>
            </div>

        </div>
    )
}

export default Navbar