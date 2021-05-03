import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SnacksByCountryItems from './SnacksByCountryItems'
import style from './dropdown.module.scss';

const SnacksByCountryDropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const condition = click ? [style['dropdown-menu'], style.clicked] : style['dropdown-menu']
    const disp = click ? "none" : "flex"
    return (
        <ul onClick={handleClick}
        className={condition}>
            {SnacksByCountryItems.map((item, index) => {
                return (
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() => setClick(!click)}>
                        <p style={{color: "white", display: disp}}>{item.title}</p>
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default SnacksByCountryDropdown
