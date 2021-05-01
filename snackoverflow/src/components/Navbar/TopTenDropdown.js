import React from 'react'
import { Link } from 'react-router-dom'
import TopTenItems from './TopTenItems'

const TopTenDropdown = () => {

    return (
        <ul>
            {TopTenItems.map((item, index) => {
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

export default TopTenDropdown
