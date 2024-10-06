import React, { useState } from "react"; 
import validator from 'validator'

const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 10, minLowercase: 3, 
			minUppercase: 2, minNumbers: 3, minSymbols: 2
		})) { 
			setErrorMessage('Is Strong Password') 
		} else { 
			setErrorMessage('Is Not Strong Password') 
		} 
	} 

	return ( 
		<div style={{ 
			marginLeft: '150px', 
		}}> 
			<pre> 
				<h1>Checking Password</h1> 
				<span>Enter Password: </span><input type="text"
					onChange={(e) => validate(e.target.value)}></input> <br /> 
				{errorMessage === '' ? null : 
					<span style={{ 
						fontWeight: 'bold', 
						color: 'blue', 
					}}>{errorMessage}</span>} 
			</pre> 
		</div> 
	); 
} 

export default App
