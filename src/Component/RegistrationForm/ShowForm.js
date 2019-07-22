import React from 'react';
import RegistrationForm from './RegistrationForm';
import './RegistrationStyle.css';
import showResults from './showResults';


const ShowForm = () => {
	return(
	<div className="container">
	    <h2>Register yourself</h2>
	    <RegistrationForm onSubmit={showResults} />
	</div>
	);
}

export default ShowForm;