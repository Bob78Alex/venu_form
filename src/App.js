import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form, Field, FormSpy } from 'react-final-form';
import styled from 'styled-components';
import { I18nProvider } from '@lingui/react'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // to simulate server delay
  console.log(JSON.stringify(values, undefined, 2))
  window.alert(JSON.stringify(values, undefined, 2))
}



const Wrapper = styled.div` border: 5px solid #191970; padding: 2em 1em 2em 1em; font-size: 1 em; text-align: center; width: 50%; color: dark-blue; margin-left: auto; margin-right: auto; border-box: 1px;`;
const Title = styled.h1` font-size: 1.5em; text-align: center; color: orange;`;
const Section = styled.div` justify-content: left; background-color: light-grey; display: inline-flex; padding-top: 1em; padding-bottom: 1em; width: 80%; margin-left: auto; margin-right: auto; text-align: center;`;
const StyledButton = styled.button` background-color: orange; color: white; padding-left: 2em; padding-right: 2em; border-radius: 6px; font-size: 0.7em;`;
const StyledLabel = styled.label` display: block; text-align: left; color: #191970; font-size: 0.7em;`;
const StyledLabel2 = styled.label` display: block; text-align: left; color: #191970; font-size: 0.7em; margin-left: 1em;`;
const StyledP = styled.p`color: #191970; font-size: 0.8em; text-align:center;`;
const StyledSpan = styled.p`color: red; font-size: 0.7em;`;
const StyledSpan1 = styled.span` color:red; font-size: 0.8em;`;
const Stylediv = styled.div` padding: 0.3em;`;
const StyledDiv = styled.div`length: 100%;`;
const required = value => (value ? undefined : 'Required')

const App = () => (
  <div>
  <Wrapper>
  <Title> CONGRATULATIONS! </Title>
   <StyledP>
          You have asnwered the question correctly. Please fill in your <br/>
          mailing address and phone number so we ship you your prize 
  </StyledP>

          <Form onSubmit = {showResults}
          subscription={{submitting: true}}>
          {({handleSubmit, values, submitting}) => (
          <form onSubmit={handleSubmit}>

     <Section>
    
         <Stylediv>
                     
            <Field 
             name="firstName" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              
              <StyledLabel>First Name</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
              <input {...input} placeholder={placeholder}/>
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
             </Field>
         </Stylediv>

          <Stylediv>
             <Field 
             name="lastName" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Last Name</StyledLabel>
               {meta.error && <StyledSpan1 >*</StyledSpan1>}
              <input {...input} placeholder={placeholder}/>
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
             </Field>
         </Stylediv>
     </Section>

     <Section>
         <StyledDiv>
            <Field 
             name="addressLine1" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Address</StyledLabel>
               {meta.error && <StyledSpan1 >*</StyledSpan1>}
              <input {...input} placeholder={placeholder}/>
              {meta.error && meta.touched && <StyledSpan>Address field is required</StyledSpan>}
              </div>
              )}
             </Field>
         </StyledDiv>
     </Section>


     <Section>
         <Stylediv>
             <Field 
             name="addressLine2"
             placeholder="Apartment, suite, unit, building, floor etc" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Address Line 2</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
              <input {...input} placeholder={placeholder}/>
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
             </Field>
         </Stylediv>


         <Stylediv>
             <Field
             name="addressType" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Address Type</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
             <select {...input} placeholder={placeholder}>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option selected value="industrial">Industrial</option>
                  <option value="business">Business</option>

             </select>             
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
            
             </Field>
          </Stylediv>
        </Section>

     <Section>
         <Stylediv>
            <Field 
             name="city" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>City</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
             <input {...input} placeholder={placeholder}/>             
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
             </Field>
         </Stylediv>

         <Stylediv>
             <Field 
             name="province" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Province</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
             <input {...input} placeholder={placeholder}/>             
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
              </Field>
         </Stylediv>
          <Stylediv>
             <Field 
             name="postalCode" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div>
              <StyledLabel>Address Type</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
             <input {...input} placeholder={placeholder}/>             
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
             </Field>
              </Stylediv>
     </Section>

              
     <Section>
               <Stylediv>
             <Field 
             name="phoneNumber" 
             validate={required}>
             {({input, meta, placeholder}) => (
              <div className={meta.active ? 'active' : ''}>
              <StyledLabel>Phone Number</StyledLabel>
               {meta.error && <StyledSpan1>*</StyledSpan1>}
             <input {...input} placeholder={placeholder}/>             
              {meta.error && meta.touched && <StyledSpan>This field is required</StyledSpan>}
              </div>
              )}
            
             </Field>
         </Stylediv>
         <StyledButton type="submit" disabled={submitting}>SUBMIT</StyledButton>
         <FormSpy subscription={{ values: true }}/>
    </Section>
           
         </form>
         
         )}
     
         </Form>
         </Wrapper>

         </div>
         )


export default App;

         


