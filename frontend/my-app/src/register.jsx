import React from 'react';
import axios from 'axios';
import './register.css'
const token = sessionStorage.getItem('Token');
const headers = {
        "Content-Type" : "application/x-www-form-urlencoded"
  }
axios.defaults.headers.common['Authorization'] =  'Bearer' +' '+  token



export  class Register extends React.Component {
  state = {
    email: '',
    passwd : ''
  }
  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`http://localhost:3000/api/auth/register/`, { 
      email: this.state.email,
      passwd: this.state.passwd
     },
    {headers: headers})
      .then(res => {
        alert('Votre compte a été créer, vous allez être redirigé vers la page de connexion');
        window.location.href ='/login'
      },
      )
  }

  render() {
    return (
      <div>
        <form className='register-form' onSubmit={this.handleSubmit}>
          <h1>STRATEG IN</h1>
          <h2>Créer son compte :</h2>
          <ul>
            <li><label>
            Email:
            {this.state.name = 'email' && <input placeholder='votre adresse mail' className='email-input' type="email" name="email" onChange={this.handleChange} />}
          </label></li>
          <li><label>
            Mot de passe:
            {this.state.name = 'passwd' && <input placeholder='votre mot de passe' className='passwd-input' type="password" name="passwd" onChange={this.handleChange} />}
          </label></li>
          </ul>
          <button type="submit">Créer</button>
        </form>
      </div>
    )
  }
}