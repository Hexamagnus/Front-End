import React, { Component } from 'react';
import Perfil from './perfil';
import Notas from './notas';
import DetalleNota from './detalleNota';
import './main.css';

class Main extends Component {

constructor(props) {
    super(props);
    this.state = {
      notas: [
        {
          "titulo":"Fisica"
        },
        {
          "titulo":"Filosofia"
        },
        {
          "titulo":"Mate"
        }
      ],
      notaActual : null
    }
}

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3">
            <div className="col-md-12">
              <Perfil/>
            </div>
            <div className="col-md-12">
              <Notas notas={this.state.notas}/>
            </div>
          </div>
          <div className="col-md-9">
            <DetalleNota notaActual={this.state.notaActual}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
