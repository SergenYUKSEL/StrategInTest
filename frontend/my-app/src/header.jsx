import React from "react";
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav-bar">
                    <li><a href="/">Accueil</a></li>
                    <li> <a href='/register'>Se créer un compte</a></li>
                   {!sessionStorage.getItem('Logged') &&  <li> <a href='/login'>Se connecter</a></li>}
                    {sessionStorage.getItem('Logged')== "true" && <li><a href="/users">Voir la liste des utilisateurs</a></li>}
                    {sessionStorage.getItem('Logged')== "true" && <li><a href="/logout">Se déconnecter</a></li>}
                </ul>
            </div>
        )
    }
}