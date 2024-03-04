import React from 'react'
import { MdHome } from "react-icons/md";
import { MdRouter } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import newEnterprise from '../../src/assets/images/new-enterprise.svg'
import '../components/sidenav.css'

const SideNav = () => {
    return (
        <div className='side-nav'>
            <div className='side-container'>
                <div className='side-margin'>
                    <MdHome className='icon' />
                    <p>Start</p>
                </div>
                <div className='view'/>
                <div className='side-margin'>
                    <img
                        src={newEnterprise}
                        alt="Enterprises"
                        className='icon'
                    />
                    <p>Enterprises</p>
                </div>
                <div className='view'/>
                <div className='side-margin'>
                    <MdRouter className='icon' />
                    <p>Gateways</p>
                </div>
                <div className='view'/>
                <div className='side-margin'>
                    <TbActivityHeartbeat className='icon' />
                    <p>Sensors</p>
                </div>
            </div>

        </div>
    )
}

export default SideNav
