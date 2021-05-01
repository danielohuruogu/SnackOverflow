import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopTenItems from './TopTenItems'
import './Dropdown.css';

const TopTenDropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {TopTenItems.map((item, index) => {
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

export default TopTenDropdown
