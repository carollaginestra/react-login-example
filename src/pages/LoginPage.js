import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';
import { Prompt } from 'react-router-dom';

import { setAuthenticated } from '../utils/LoginManager';

class LoginPage extends Component {

    state = {}

    onLoginClick = () => {
        this.setState(
        {
            user: '',
            password: '',
        },
        () => {
            setAuthenticated(true);
            this.props.history.push('/');
        }
        )
    }

    onInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { user, password } = this.state;
        const blockBrowsing = Boolean(user || password);
        return (
        <div>
            <h1>Login</h1>
            <p>To see this page, please fill in the fields</p>
            <Prompt
                when={blockBrowsing}
                message="Do you want to leave the login page?"
                role="alert"
            />
            <Input type="text" name="user" placeholder="User"
                onChange={this.onInputChange} />
                <br />
            <Input type="password" name="password" placeholder="Password"
                onChange={this.onInputChange} />
                <br />
            <Button onClick={this.onLoginClick}>
                Login
            </Button>
        </div>
        )
    }
}

export default LoginPage;
