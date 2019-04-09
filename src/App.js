import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // to simulate server delay
  console.log(JSON.stringify(values, undefined, 2))
}

const App = () => (
  <div>
  <h1> Congratulations! </h1>
   <p>
          You have asnwered the question correctly. Please fill in your 
          mailing address and phone number so we ship you your prize 
  </p>

          <Form onSubmit = {showResults}>
          {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
         
         <div>
            <label>First Name</label>
            <Field name="firstName" component="input" />
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
            <select
            name="addressType" component="select" placeholder="Residential">
            <option value="residential">Residential</option>
            <option value="municipal">Municipal</option>
            <option value="business">Business</option>
            </select>
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
         
         )}

         </Form>
     </div>
         )


export default App;

         


