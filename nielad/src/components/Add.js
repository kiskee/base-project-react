import { useState, useEffect} from "react";
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import axios from 'axios'
import uniquid from 'uniqid'
import md5 from 'md5'

function Add() {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const nav = useNavigate()

  const user = {
    name: formValues.name,
    email: formValues.email,
    password: md5(formValues.password),
    id: uniquid()
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    
  }, [formErrors]);

  function adduser(e){
    e.preventDefault();
    setFormErrors(validate(formValues));  
    setIsSubmit(true)  
    
}

function save(){

  if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post('/api/usuario/adduser', user)
  .then(
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'User Created',
    showConfirmButton: false
  })          
).then(nav(0)).then(nav('/'))
  }
  
}

  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  


  return (
    <div className="container">
   {save()}
      <div className="row">
        <h2 className="mt-4">Create a new user</h2>
      </div>

      <div className="row">
        <form onSubmit={adduser} className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
            ></input>
          </div>
          <p className="text-danger">{formErrors.name}</p>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            ></input>
          </div>
          <p className="text-danger">{formErrors.email}</p>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            ></input>
          </div>
          <p className="text-danger">{formErrors.password}</p>
          <button className="btn btn-success" >Create</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
