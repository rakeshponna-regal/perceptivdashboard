import React from 'react'
import '../components/header.css';
import logo from "../assets/images/Perceptiv_logo_w.svg";

//https://appperceptivdashboarduid.azurewebsites.net/assets/icons-and-logos/Perceptiv-logo.svg
const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
    </div>
  )
}

export default Header
