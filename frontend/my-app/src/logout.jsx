import React from "react";
export class Logout extends React.Component {
    render() {
        return (
            <div>
                {sessionStorage.clear() && window.location.href =='/'}
                {alert('Vous avez été deconnecté')}
            </div>
        )
    }
}