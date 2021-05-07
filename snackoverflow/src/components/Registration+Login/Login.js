import React from 'react'

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


export default function InputAdornments({
	closeLoginPopup,
	userState,
	setUserState,
}) {
	const [values, setValues] = React.useState({
        email:'',
		password: '',
		showPassword: false,
	});
	const [retryLogin, setRetryLogin] = React.useState(false);
	const [attemptingLogin, setAttemptingLogin] = React.useState(false);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onSubmit = async () => {
		setAttemptingLogin(true);

		// prettier-ignore
		const data = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                {
                    "email": values.email,
                    "password": values.password,
                },
            ]),
        }).then((response) => response.json())

		setAttemptingLogin(false);

		console.log(data);

		if (data && data.hasOwnProperty('email')) {
			//Succesful log-in
			// prettier-ignore
			setUserState({
				loggedIn: true,
				id: data['_id'],
				username: data['username'],
				email: data['email'],
			});
			closeLoginPopup();
		} else {
			//Unsuccesful log-in
			setRetryLogin(true);
		}
	};

	const showPasswordButton = (
		<InputAdornment position="end">
			<IconButton
				aria-label="toggle password visibility"
				onClick={handleClickShowPassword}
				onMouseDown={handleMouseDownPassword}
			>
				{values.showPassword ? <Visibility /> : <VisibilityOff />}
			</IconButton>
		</InputAdornment>
	);

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		margin: {
			marginLeft: theme.spacing(3),
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
		textField: {
			width: '40ch',
		},
		button: {
			margin: theme.spacing(2),
		},
	}));
	
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<h2>Welcome</h2>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Username */}
					<InputLabel htmlFor="standard-adornment">Email</InputLabel>
					<Input
						id="standard-adornment"
						value={values.email}
						onChange={handleChange('email')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Password */}
					<InputLabel htmlFor="standard-adornment-password">
						Password
					</InputLabel>
					<Input
						id="standard-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={showPasswordButton}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Sign In Button*/}
					<Button
						variant="contained"
						style={{ backgroundColor: 'green' }}
						className={classes.button}
						endIcon={<SendIcon />}
						onClick={onSubmit}
					>
						{attemptingLogin ? 'Logging in...' : 'Sign In'}
					</Button>
				</FormControl>

				{retryLogin && (
					<p style={{ color: 'red' }}>
						Some of your information isn't correct. Please try again.
					</p>
				)}
			</div>
		</div>
	);
}

// const Login = () => {
//     return (
//         <div>
//             <form method="POST" action="/login">
//                 <div class="field">
//                     <div class="control">
//                         <input class="input is-large" type="email" name="email" placeholder="Your Email" autofocus=""/>
//                     </div>
//                 </div>

//                 <div class="field">
//                     <div class="control">
//                         <input class="input is-large" type="password" name="password" placeholder="Your Password"/>
//                     </div>
//                 </div>
//                 <div class="field">
//                     <label class="checkbox">
//                         <input type="checkbox"/>
//                         Remember me
//                     </label>
//                 </div>
//                 <button class="button is-block is-info is-large is-fullwidth">Login</button>
//             </form>
//         </div>
//     )
// }

// export default Login
