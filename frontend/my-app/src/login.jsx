import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const headers = {
        "Content-Type" : "application/x-www-form-urlencoded"
  }

export  class Login extends React.Component {
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
    axios.post(`http://localhost:3000/api/auth/login/`, { 
      email: this.state.email,
      passwd: this.state.passwd
     },
    {headers: headers})
      .then(res => {
        alert('Connexion réussi, vous allez être redirigé vers la liste des utilisateurs');
        window.location.href ='/users'
        sessionStorage.setItem('Token', res.data.token)
        sessionStorage.setItem('User', res.data.userId)
        sessionStorage.setItem('Logged', "true")
      },
      )
      .catch(error => {
        alert('Votre adresse mail ou mot de passe est incorrect.')
      }  );
  }

  render() {
    return (
      <div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>STRATEG IN</h1>
          <h2>Se connecter :</h2>
          <ul>
            <li><label>
            Email:
            <input placeholder='votre adresse mail' className='email-input' type="email" name="email" onChange={this.handleChange} />
          </label></li>
          <li> <label>
            Mot de passe:
            <input placeholder='votre mot de passe' className='passwd-input' type="password" name="passwd" onChange={this.handleChange} />
          </label></li>
          </ul>
          <button type="submit">Se Connecter</button>
        </form>
      </div>
    )
  }
}