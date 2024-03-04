import React from 'react'
import Medicine from "../../assets/images/Medicine.svg"
import { AiOutlineClose } from "react-icons/ai"
import './header.css'
const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    return (
        <>
            <header className='header'>
                <div className='scontainer flex'>
                    <div className='logo'>
                        <img src={Medicine} alt='' />
                    </div>
                    <div className='search flex'>
                        <AiOutlineClose className='searchIcon' />
                        <input type="text" placeholder='Search for medicine...' />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header