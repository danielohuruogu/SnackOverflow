import React from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import TopTen from './TopTen'

const Navbar = () => {
    return (
        <div>
            <ul>


                <li>
                    <Link to='/' className=''>Home</Link>
                </li>
                <li>
                    {/* {<MenuItems />} */}
                </li>
            </ul>

        </div>
    )
}

export default Navbar
