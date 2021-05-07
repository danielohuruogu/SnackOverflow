import React, { useState, useEffect} from 'react'
import style from './registration.module.scss'
import { Link, useParams } from "react-router-dom"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl, FormControlLabel } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, Checkbox } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Registration = () => {
    const [values, setValues] = React.useState({
		username: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		email: '',
		postcode: '',
		houseNumber: '',
		isCustomer: true,
	});

    const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

    const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

    const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

    return (
        
        <div className={style.registrationpage}>
            <form method="POST" action="/signup">

                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="email" name="email" placeholder="Email" autofocus=""/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" name="username" placeholder="Username" autofocus=""/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="password" name="password" placeholder="Password"/>
                        </div>
                    </div>

                    <button class="button is-block is-info is-large is-fullwidth">Sign Up</button>
            </form>
        </div>

    )
}

export default Registration;