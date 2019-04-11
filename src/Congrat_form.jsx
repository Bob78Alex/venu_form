import React, { Component } from 'react';
import { Form, Field } from 'react-final-form' 

class ConForm extends Component {
  

const showResults = async values => {
	await sleep(500) // to simulate server delay
	console.log(JSON.stringify(values, undefined, 2))
}


 render() {
    return (

const Form = () => (


         <Form onSubmit = {showResults}>
          {({handleSubmit}) => (
<form onSubmit={handleSubmit}>
         <div>
          	<label>First Name</label>
          	<Field 
          	name="firstName" component="input" /*placeholder="First Name"*//>
         </div>
         <div>
          	<label>Last Name</label>
          	<Field 
          	name="lastName" component="input" /*placeholder="Last Name"*//>
         </div>
         <div>
          	<label>Address</label>
          	<Field 
          	name="addressLine1" component="input" /*placeholder="Address"*//>
         </div>
         <div>
          	<label>Address Line 2</label>
          	<Field 
          	name="addressLine2" component="input" placeholder="Apartment, suite, unit, building, floor etc"/>
         </div>
         <div>
          	<label>Address type</label>
          	<Field 
          	name="addressType" component="input" placeholder="Residential"/>
         </div>
         <div>
          	<label>City</label>
          	<Field 
          	name="city" component="input" />
         </div>
         <div>
          	<label>Province</label>
          	<Field 
          	name="province" component="input" />
         </div>
          <div>
          	<label>Postal code</label>
          	<Field 
          	name="postalCode" component="input" />
              </div>
               <div>
          	<label>Phone number</label>
          	<Field 
          	name="phoneNumber" component="input" />
         </div>
         <button type="submit">Submit</button>
         </form>





          }}
          );
      }
  }
  export default ConForm;


        