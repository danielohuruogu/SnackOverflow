import React from 'react'
import { Link } from 'react-router-dom'
import SnacksByCountryItems from './SnacksByCountryItems'

const SnacksByCountryDropdown = () => {

    return (
        <ul>
            {SnacksByCountryItems.map((item, index) => {
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

export default SnacksByCountryDropdown
