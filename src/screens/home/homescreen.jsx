import React, { useEffect, useState } from 'react'
import '../home/home.css'
import SideNav from '../../components/sidenav'
import axios from 'axios';
import Select from 'react-select'
import enterprise from '../../assets/images/new-enterprise.svg'
import tenantUser from '../../assets/images/manage-tenant-users.svg'
import tenant from '../../assets/images/manage-tenants.svg'

function HomeScreen() {
    const [selectOptions, setSelectOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState(null);

    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
      };
    useEffect(() => {
        getOptions()
    }, []);
    const getOptions = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = res.data
        const options = data.map(d => ({
            "value": d.id,
            "label": d.name
        }))
        setSelectOptions(options)
    }

    return (
        <div className="container">
            <SideNav />

            <div className='container-body'>
                <Select
                    placeholder='type enterprise name'
                    isSearchable={true}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={selectOptions} className='drop-down' />
                <div className='view-line' />
                <div className='dash-board-container'>
                    <div className='dash-board-header'>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={enterprise} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>New Enterprise</h1>
                                    <h2>From Salesforce</h2>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>New Enterprise +</button>
                        </div>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={tenant} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>Manage tenants</h1>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>View Tenants &gt;</button>
                        </div>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={tenantUser} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>Manage tenants users</h1>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>View Users &gt;</button>
                        </div>
                    </div>
                    <div className='view-line2' />
                    <div className='content2'>
                        <h1 >Enterprises in progress</h1>
                        <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary b2'>Track Enterprise +</button>
                    </div>
                    <div className='content2'>
                        <div className='content2'>
                            <h2 >Enterprise:</h2>
                            <p>
                                <a /* href="/register" */ >ACME worldwide LLC</a>
                            </p>
                        </div>
                        <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>Mark as completed</button>

                    </div>
                    <div>
                        <input type="text"
                            placeholder='Notes'
                            name='Notes'
                            className='input'
                        ></input>
                    </div>

                    <div className='dash-board-header' onWheel={handleScroll}>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={enterprise} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>New Enterprise</h1>
                                    <h2>From Salesforce</h2>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>New Enterprise +</button>
                        </div>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={tenant} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>Manage tenants</h1>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>View Tenants &gt;</button>
                        </div>
                        <div className='dash-board-content'>
                            <div className='content'>
                                <img src={tenantUser} alt="new-enterprise" className='img-icon' />
                                <div className='content-text'>
                                    <h1>Manage tenants users</h1>
                                </div>
                            </div>
                            <button  /* onClick={() => window.location.href = '/salesforce'} */ className='btn-primary'>View Users &gt;</button>
                        </div>
                    </div>
                    

                </div>

            </div>

        </div>
    )
}

export default HomeScreen
