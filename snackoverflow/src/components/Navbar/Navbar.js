import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnacksByBrandDropdown from './SnacksByBrandDropdown'
import SnacksByCountryDropdown from './SnacksByCountryDropdown'
import TopTenDropdown from './TopTenDropdown'

const Navbar = () => {
    // const [click, setClick] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)

    
    const onMouseEnter = (menuIndex) => {
        switch (menuIndex) {
            case 1:
                setDropdown1(true);
                break;
            case 2:
                setDropdown2(true);
                break;
            case 3:
                setDropdown3(true);
                break; 
            default:
                break;
        }
    }
    const onMouseLeave = (menuIndex) => {
        switch (menuIndex) {
            case 1:
                setDropdown1(false);
                break;
            case 2:
                setDropdown2(false);
                break;
            case 3:
                setDropdown3(false);
                break; 
            default:
                break;  
        }
    }





    return (
        <div>
            <ul>

                <li>
                    <Link to='/' className=''>Home</Link>
                </li>
                <li className='nav-item'
                onMouseEnter={() => {onMouseEnter(1)}}
                onMouseLeave={() => {onMouseLeave(1)}}>
                    <button>
                        Top 10
                    </button>{dropdown1 && <TopTenDropdown />}
                    
                </li>
                <li className='nav-item'
                onMouseEnter={() => {onMouseEnter(2)}}
                onMouseLeave={() => {onMouseLeave(2)}}>
                    <button>
                        Around the World
                    </button>{dropdown2 && <SnacksByCountryDropdown />}
                    
                </li>
                <li className='nav-item'
                onMouseEnter={() => {onMouseEnter(3)}}
                onMouseLeave={() => {onMouseLeave(3)}}>
                    <button>
                        Brands
                    </button>{dropdown3 && <SnacksByBrandDropdown />}
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
