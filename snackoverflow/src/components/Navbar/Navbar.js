import React from 'react'
import MenuItems from './MenuItems'

const Navbar = () => {
    return (
        <div>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}

export default Navbar
