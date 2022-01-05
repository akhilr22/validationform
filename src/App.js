import './App.css';
import React, { useState } from 'react'
import useForm from './Hooks/useForm';
import Redirect  from './Redirect';

function App() {
  const [redirect, setRedirect] = useState(false)

  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
    setRedirect(true)
  }

  const {handleChange, values,errors,handleSubmit,clearInput} = useForm(formLogin);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      <input minLength='8' type="password" name="password" placeholder="password"  onChange={handleChange}   />
      {
        errors.password && <h3>{errors.password}</h3>

      }
      <input type="text" minLength='5' required name="username" placeholder="username"  onChange={handleChange}   />
      {
        errors.username && <h3>{errors.username}</h3>

      }
      <input type="tel" maxLength={10} required name ="phonenumber" placeholder='phonenumber' onChange={handleChange}></input>
      <input type="submit" value="Submit" className="submit"  />
      </form>
      {redirect ? <Redirect/> : null}
    </div>
  );
}

export default App;