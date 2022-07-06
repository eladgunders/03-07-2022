import React, { Component } from 'react'
import axios from 'axios'
import './Posts.css'

class User extends Component {
    state = {
        user: null
    }
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params.user_id)
        const _id = this.props.match.params.user_id

        axios.get(`https://jsonplaceholder.typicode.com/users/${_id}`)
        .then (res => {
            console.log(res);
            this.setState({
                user: res.data
            });
        })
    }
    render() {
        const user = this.state.user ? (
            <div className="post">
                <h4 className="center">{this.state.user.name}</h4>
                <p>{this.state.user.email}</p>
            </div>) : (
                <div className="center">Loading user...</div>
            )
        
        return (
                <div className="container">
                    {user}
                </div>)
    }
    
}

export default User;