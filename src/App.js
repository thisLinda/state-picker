// this version of app is working for what it is
// import Form from './Form'
// import MapTest from './MapTest'
// useReducer hook is used to create a formData object and a setFormData function
// TODO: don't forget to do testing
import React, { useReducer, useState } from 'react'
import './style.css'
import './data.js'

// reset clears data after submit
const formReducer = (state, event) => {
    if(event.reset) {
        return {
            name: '',
            abbreviation: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
		// can't pass the event directly, passing in an object here with the properties name and value
	}
}
// using a button to submit causes a page reload, prevent default with onSubmit to the form *not the button*
// simulate an API with setTimeout which creates an asynchronous operation to wait before completing similar to a request for external data
// setState hook for calling setSubmitting when the data is submitted (true) and called again when the timeout is resolved (false)
export default function App() {
	const [formData, setFormData] = useReducer(formReducer, {})
	const [submitting, setSubmitting] = useState(false)

	const handleSubmit = event => {
		event.preventDefault()
		setSubmitting(true)
		// alert('You have submitted the form.')
		setTimeout(() => {
			setSubmitting(false)
            setFormData({
                reset: true
            })
		}, 3000)
	}

	// handleChange pulls the data from event.target to create name and value to be used in formReducer
	// without specific checkbox value it will always be "on"
	const handleChange = event => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		})
	}

	const stateNameArray = [
		{
			fullStateName: "Alabama",
			abbrev: "AL"
		},
		{
			fullStateName: "Alaska",
			abbrev: "AK"
		},
		{
			fullStateName: "Arizona",
			abbrev: "AZ"
		},
		{
			fullStateName: "Arkansas",
			abbrev: "AR"
		}
	]

	const stateFromAbbrev = abbrev => **user entry** === abbrev ? fullStateName : 'oops that is not a state'

	}
    // value attribute is different from placeholder attribute, placeholder data will disappear on user change/not stored, the user can edit values, placeholders are a guide for the user
	// ul displays the collected data
    // initial state is an empty object, for a controlled component need the value to be defined by either a value from formData or a a default empty string
    // converts user entered data into an array with Object.entries
    //  disabled={submitting} on fieldset & button prevents the form from updating while submitting, can also be used on properties of individual components 
	// input names of `abbreviation as name` and `state as abbreviation` displays user entry into abbreviation into state field as well
	return (
		<div className="wrapper">
			{/* alert user of form submission */}
			{submitting &&
				<div>
					You are submitting the following:
					<ul>
						{Object.entries(formData).map(([name, value]) => (
							<li key={name}><strong>{name}</strong>:{value.toString()}</li>
						))}
					</ul>
				</div>
			}
			<form onSubmit={handleSubmit}>
			<fieldset disabled={submitting}>
				<label>
					<p>Abbreviation</p>
					{/* setFormData passed to onChange event handler via handleChange function */}
					<input
						name="name"
						onChange={handleChange}
						value={formData.name || ''}
					/>
					{/* <select name="abbreviation" onChange={handleChange} value={formData.abbreviation || ''}>
						<option value="">--Select--</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="GU">Guam</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="PR">Puerto Rico</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>    
					</select> */}
				</label>
			</fieldset>
			<fieldset disabled={submitting}>
				{/* using label tag for accessibility with screen readers, it associates the label with the input */}
				<label>
					<p>State</p>
					{/* setFormData passed to onChange event handler via handleChange function */}
					<input
						name="abbreviation"
						onChange={handleChange}
						value={formData.name || ''}
					/>
				</label>
			</fieldset>
			<button type="submit" disabled={submitting}>Submit</button>
			</form>
    	</div>
  	)
}