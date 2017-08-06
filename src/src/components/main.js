import React, { Component } from 'react';
import Perfil from './components/perfil';
import Notas from './components/notas';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3">
            <div className="col-md-12">
              <Perfil/>
            </div>
            <div className="col-md-12">
              <Notas/>
            </div>
          </div>
          <div className="col-md-9">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
