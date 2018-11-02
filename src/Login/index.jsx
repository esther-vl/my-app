import React, {Component} from 'react';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name:'',
                pswd:''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPswdChange = this.onPswdChange.bind(this);
    }

    onPswdChange(e) {
        this.setState({ pswd: e.target.value });
    }

    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        const { loginState } = this.props;
        if (loginState.state == 1) {
            return (<div>Hi {loginState.username}!</div>)
        }
        return(
            <div >
                <table>
                    <tr>
                <input 
                    type='text'
                    name='username'
                    placeholder='User Name'
                    value={this.state.name}
                    onChange={this.onNameChange}
                    />
                    </tr>
                    <br/>
                    <tr>
                <input
                    type='password'
                    pswd='password'
                    value={this.state.pswd}
                    onChange={this.onPswdChange}
                    placeholder='Password'/>
                    </tr>
                    <br/>
                    <tr>
                <button
                    onClick={() => this.props.handleLogin(this.state.name, this.state.pswd)}>Login
                </button>
                </tr>
                </table>
              </div>
        );
    }
}
export default Login;
