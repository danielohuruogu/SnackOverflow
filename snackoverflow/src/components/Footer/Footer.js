import React from 'react'
import style from './footer.module.scss'
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>

                
                <p>Made by Johnny, Daniel G, Daniel O, Tim. Copyright <BiCopyright style={{fontSize: "12px"}}/> 2021</p>

            </div>
        </footer>

    )
}

export default Footer;