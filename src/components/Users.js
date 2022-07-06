import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pokeball from './../pokeball.png'
import RainBow from './hoc/Rainbow';

class Users extends Component {
    state = {
        users: []
    }
    render() {
        const { users } = this.state
        const userList = users.length ? (users.map(user => {
            return (
                <div className="post card" key={user.id}>
                    <div className="card-content">
                        <span className="card-title">{user.name}</span>       
                    </div>
                    <div className="card-action">
                    <Link to={`/users/${user.id}`}>
                        <span>view email</span>
                    </Link>
                  </div>
                </div>
           )}))
            : (<div className="center">No users to show</div>)
        return (
            <div className="container">
                <h4 className="center">Users</h4>
                {userList}     
            </div>)
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res => {
            console.log(res);
            this.setState({
                users: res.data.slice(0, 10)
            });
        })
    }
}

export default RainBow(Users);