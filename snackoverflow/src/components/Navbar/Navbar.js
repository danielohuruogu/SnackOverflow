import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnacksByBrandDropdown from './SnacksByBrandDropdown'
import SnacksByCountryDropdown from './SnacksByCountryDropdown'
import TopTenDropdown from './TopTenDropdown'
import style from './navbar.module.scss'

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
        <div className={style.navbar}>
            <ul>
                <li className={style.navitem}>
                    <Link to='/' className={style.navlink}>Home</Link>
                </li>
                <li className={style.navitem}
                onMouseEnter={() => {onMouseEnter(1)}}
                onMouseLeave={() => {onMouseLeave(1)}}>
                    Top 10 of{dropdown1 && <TopTenDropdown />}
                </li>
                <li className={style.navitem}
                onMouseEnter={() => {onMouseEnter(2)}}
                onMouseLeave={() => {onMouseLeave(2)}}>
                    Around the World {dropdown2 && <SnacksByCountryDropdown />}
                </li>
                <li className={style.navitem}
                onMouseEnter={() => {onMouseEnter(3)}}
                onMouseLeave={() => {onMouseLeave(3)}}>
                    Brands {dropdown3 && <SnacksByBrandDropdown />}
                </li>
                <li className={style.navitem}>
                    <Link to='/register' className={style.navlink}>Register</Link>
                </li>
                <li className={style.navitem}>
                    <Link to='/login' className={style.navlink}>Login</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
