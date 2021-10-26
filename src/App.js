import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const regEx = {
    emailFormatError: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  }
  
  const formik = useFormik({
    initialValues:{
      username: '',
      password: ''
    },
    onSubmit: values => {
      alert('Login Successful');
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.username) errors.username = 'Field required';
      if(!values.password) errors.password = 'Field required';
      if(!regEx.emailFormatError.test(values.username)) errors.email = 'Username should be an email';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        
        <input id='emailField' name='username' type='text' onChange={formik.handleChange} value={formik.values.username}/>
        
        {formik.errors.username ? <div id='username' style = {{color: 'red'}}>{formik.errors.username}</div> : null}
        
        {formik.errors.email ? <div id='emailError' style = {{color: 'red'}}>{formik.errors.email}</div> : null}
        
        <div>Password</div>
        
        <input id='pswField' name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        
        {formik.errors.password ? <div id='pswError' style = {{color: 'red'}}>{formik.errors.password}</div> : null}
        
        <button id='submitBtn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
