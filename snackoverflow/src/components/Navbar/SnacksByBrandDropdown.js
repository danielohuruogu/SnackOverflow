import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnacksByBrandItems from './SnacksByBrandItems'
import './Dropdown.css';

const SnacksByBrandDropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {SnacksByBrandItems.map((item, index) => {
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

export default SnacksByBrandDropdown