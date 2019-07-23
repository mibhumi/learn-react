import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './RegistrationStyle.css';

const required    = value => value ? undefined : 'Required';
const maxLength   = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength10 = maxLength(10);
const number      = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue    = min => value => value && value < min ? `Must be at least ${min}` : undefined;
const minValue18  = minValue(18);
const minValue10  = minValue(10);
const email       = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		    'Invalid email address' : undefined;
const tooOld      = value => value && value > 65 ? 'You might be too old for this' : undefined;

// Component render to display span
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
	<label>{label}</label>
	<div>
	    <input {...input} placeholder={label} type={type}/>
	    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
    </div>
);


// Form to registration
const RegistrationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
	<form onSubmit={handleSubmit}>
	    <div className="field">
		<Field name="firstName" type="text"
		       component={renderField} label="First Name"
		       validate={[ required, maxLength10 ]}
		/>
	    </div>
	    <div className="field">
		<Field name="lastName" type="text"
		       component={renderField} label="Last Name"
		       validate={[ required, maxLength10 ]}
		/>
	    </div>
	    <div className="field">
		<Field name="email" type="email"
		       component={renderField} label="Email"
		       validate={[required, email]}
		/>
	    </div>
	    <div className="field">
		<Field name="age" type="number"
		       component={renderField} label="Age"
		       validate={[ required, number, minValue18 ]}
		       warn={tooOld}
		/>
	    </div>
	    <div className="field">
		<Field name="conatct" type="number"
		       component={renderField} label="Mobile Number"
		       validate={[ required, number, minValue10 ]}
		/>
	    </div>
	    <div className="field">
		<button type="submit" className="btn submit" disabled={submitting}>Submit</button>
		<button type="button" className="btn" disabled={pristine || submitting} onClick={reset}>
		    Clear
		</button>
	    </div>
	</form>
    )
}

export default reduxForm({
    form: 'RegistrationForm', // a unique identifier for this form
})(RegistrationForm);
