import React from "react";
import './home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Test STRATEG IN</h1>
                <p> Voici l'application web, qui à pour fonctionnalité :</p>
                <ul>
                    <li>Créer son compte</li>
                    <li>Se connecter</li>
                    <li>Une fois connecté, d'afficher la liste des comptes existantes dans la BDD mongoDB</li>
                </ul>
            </div>
        )
    }
}