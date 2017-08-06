import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        Login
                            </div>
                    <div className="row">
                        <input type="email" name="emailLogin" className="form-control" placeholder="E-mail" required/><br />
                            </div>
                    <div className="row">
                        <input type="password" name="contraLogin" className="form-control" placeholder="Contraseña" required/><br />
                            </div>
                    <div className="row">
                        <a className="btn btn-info btn-lg" href="#" onClick=""> Login </a>
                            </div> 
                </div>
            </div>
        );
    }
};

export default Login;