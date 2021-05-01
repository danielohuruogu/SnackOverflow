import React from 'react'
import { Link } from 'react-router-dom'
import SnacksByBrandItems from './SnacksByBrandItems'

const SnacksByBrandDropdown = () => {

    return (
        <ul>
            {SnacksByBrandItems.map((item, index) => {
                return (
                <li key={index}>
                    <Link>
                        {item.title}
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default SnacksByBrandDropdown