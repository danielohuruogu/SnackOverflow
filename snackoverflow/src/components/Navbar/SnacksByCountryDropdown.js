import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnacksByCountryItems from './SnacksByCountryItems'
import './Dropdown.css';

const SnacksByCountryDropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {SnacksByCountryItems.map((item, index) => {
                return (
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() => setClick(!click)}>
                        {item.title}
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default SnacksByCountryDropdown
