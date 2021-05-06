import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.top}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>  
                <div className={style.mysvg}>
                    <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="1 2 30 30">
                    <path d="M25.34,10.06a1,1,0,0,0-1.17.38L20.38,16h-8L7.77,10.37A1,1,0,0,0,6,11.09l1.64,18a1,1,0,0,0,1,.91H23.36a1,1,0,0,0,1-.91l1.64-18A1,1,0,0,0,25.34,10.06ZM22.45,28H9.55L8.29,14.16l2.85,3.47a1,1,0,0,0,.77.37h9a1,1,0,0,0,.83-.44l1.92-2.81Zm-2.18-3a1,1,0,0,1-1,1H12.73a1,1,0,0,1,0-2h6.54A1,1,0,0,1,20.27,25ZM11.75,6.23a1,1,0,0,1,1.95-.46l1.64,7a1,1,0,0,1-.75,1.2.85.85,0,0,1-.23,0,1,1,0,0,1-1-.77ZM7.29,5.32a1,1,0,1,1,1.82-.83l3.71,8.09a1,1,0,0,1-.49,1.33,1.06,1.06,0,0,1-.42.09,1,1,0,0,1-.91-.58Zm8.53,6.78L15,4.1a1,1,0,1,1,2-.2l.82,8A1,1,0,0,1,16.92,13h-.1A1,1,0,0,1,15.82,12.1Zm2.46.76.82-6a1,1,0,0,1,2,.28l-.82,6a1,1,0,0,1-1,.86h-.13A1,1,0,0,1,18.28,12.86Zm2.86-1.44.82-6a1,1,0,0,1,2,.27l-.82,6a1,1,0,0,1-1,.87H22A1,1,0,0,1,21.14,11.42Z" fill="#f67002"></path>
                    </svg>  
                </div>

                <div className={style.mytitle}>
                    <h1>Snack Overflow</h1> 
                </div>
                <div className={style.searchbar}>
                    <input type="text" placeholder="Search.."></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div>

            
            <Navbar />

        </div>
    )
}

export default Header;