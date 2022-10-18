import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './list.css'

export  function List() {
    const token = sessionStorage.getItem('Token');
    const [users, getUsers] = useState('');
    const uri = 'http://localhost:3000';

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.defaults.headers.common['Authorization'] =  'Bearer' +' '+  token
        axios.get(`${uri}/api/auth`)
        .then((res) => {
            const allUsers = res.data;
            getUsers(allUsers)
        })
    }
    

return(
    <div className='container'>
        <h1>Voici la liste de tous les utilisateurs inscrits</h1>
        <table>
            <tr>
                <th>Email</th>
            </tr>
        {Array.isArray(users)
        ? users.map((user,i) => {
            return <tr>
                    <td key={i}>{user.email}</td>
                </tr>;
          })
        : null}
        </table>
    </div>
)
}