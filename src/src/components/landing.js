import React, { Component } from 'react';
import Login from './login';
import './landing.css';

class Landing extends Component {
    render() {
        return (
            <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Login />
            </div>
            <div className="col-md-6">
              hi
            </div>
          </div>
        </div>
        );
    }
};

export default Landing;