import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // to simulate server delay
  console.log(JSON.stringify(values, undefined, 2))
  window.alert(JSON.stringify(values, undefined, 2))
}


const Wrapper = styled.div`
  border: 5px solid #191970; padding: 2em 1em 2em 1em; font-size: 1 em; text-align: center; width: 50%; color: dark-blue; margin-left: auto; margin-right: auto; border-box: 1px;
`;
const Title = styled.h1`
  font-size: 1.5em; text-align: center; color: orange; 
`;
const Section = styled.div`
  justify-content: left; background-color: light-grey; display: inline-flex; padding-top: 1em; padding-bottom: 1em; width: 80%; margin-left: auto; margin-right: auto; text-align: center;
`;

const StyledButton = styled.button`
  background-color: orange; color: white; padding-left: 2em; padding-right: 2em; border-radius: 6px; font-size: 0.7em;
`;

const StyledLabel = styled.label`
  display: block; text-align: left; color: #191970; font-size: 0.7em;
`;
const StyledLabel2 = styled.label`
  display: block; text-align: left; color: #191970; font-size: 0.7em; margin-left: 1em;
`;
const StyledP = styled.p`
color: #191970; font-size: 0.8em; text-align:center; 
`;

const StyledField = styled.input`
margin-right: 1em; padding: 0.5em; width: 85%;
`;

const StyledField2 = styled.input`
margin-left: 1em; padding: 0.5em; width: 85%;
`;
const StyledSelect = styled.select`
margin-left: 1em; padding: 0.5em; width: 100%;

`;

const App = () => (
  <div>
  <Wrapper>
  <Title> CONGRATULATIONS! </Title>
   <StyledP>
          You have asnwered the question correctly. Please fill in your <br/>
          mailing address and phone number so we ship you your prize 
  </StyledP>

          <Form onSubmit = {showResults}>
          {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>

     <Section>
    
         <div>
            <StyledLabel>First Name</StyledLabel>
            <StyledField name="firstName" component="input" required/>
         </div>
          <div>
            <StyledLabel2>Last Name</StyledLabel2>
            <StyledField2 
            name="lastName" component="input" required/*placeholder="Last Name"*//>
         </div>
     </Section>

     <Section>
         <div>
            <StyledLabel>Address</StyledLabel>
            <StyledField 
            name="addressLine1" component="input" required /*placeholder="Address"*//>
         </div>
     </Section>


     <Section>
         <div>
            <StyledLabel>Address Line 2</StyledLabel>
            <StyledField 
            name="addressLine2" component="input" placeholder="Apartment, suite, unit, building, floor etc" required/>
         </div>
         <div>
            <StyledLabel2>Address type</StyledLabel2>
            <StyledSelect
            name="addressType" component="select" placeholder="Residential" required>
            <option value="residential">Residential</option>
            <option value="municipal">Municipal</option>
            <option value="business">Business</option>
            </StyledSelect>
         </div>
     </Section>



     <Section>
         <div>
            <StyledLabel> City</StyledLabel>
            <StyledField 
            name="city" component="input" required/>
         </div>
         <div>
            <StyledLabel>Province</StyledLabel>
            <StyledField 
            name="province" component="input" required/>
         </div>
          <div>
            <StyledLabel>Postal code</StyledLabel>
            <StyledField 
            name="postalCode" component="input" required/>
              </div>
     </Section>

              
     <Section>
               <div>
            <StyledLabel>Phone number</StyledLabel>
            <StyledField
            name="phoneNumber" component="input" required/>
         </div>
         <StyledButton type="submit">SUBMIT</StyledButton>
    </Section>

         </form>
         
         )}

         </Form>
         </Wrapper>
         </div>
         )


export default App;

         


