import React, { useState, useEffect} from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Registration from '../components/Registration+Login/Registration';
import Login from '../components/Registration+Login/Login';
// import { useRouteMatch } from 'react-router'
import style from "../styles/pagesStyles/loginpage.module.scss"


const LoginPage = () => {
    return (
        <div>
            <Login/>
            <Registration/>
        </div>
    )
}

export default LoginPage
