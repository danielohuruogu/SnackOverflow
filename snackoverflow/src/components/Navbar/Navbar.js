import React from 'react'
import { Link } from 'react-router-dom'
import SnacksByBrandDropdown from './SnacksByBrandDropdown'
import SnacksByCountryDropdown from './SnacksByCountryDropdown'
import TopTenDropdown from './TopTenDropdown'


const Navbar = () => {
    return (
        <div>
            <ul>


                <li>
                    <Link to='/' className=''>Home</Link>
                </li>
                <li>
                    <TopTenDropdown />
                </li>
                <li>
                    <SnacksByCountryDropdown />
                </li>
                <li>
                    <SnacksByBrandDropdown />
                </li>
                <li>
                    <Link to='/register' className=''>Register</Link>
                </li>
                <li>
                    <Link to='/login' className=''>Login</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
