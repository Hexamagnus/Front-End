import React, { Component } from 'react';
import Perfil from './perfil';
import Notas from './notas';
import DetalleNota from './detalleNota';
import CrearNota from './crearNota';
import './main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notas: [
        {
          "titulo": "Fisica",
          "resumenes":[]
        },
        {
          "titulo": "Filosofia",
          "resumenes":[]
        },
        {
          "titulo": "Mate",
          "resumenes":[]
        }
      ],
      notaActual: null,
      creandoNota: false
    }
  }

  agregarNotaNueva(){
    this.setState({
      creandoNota: true,
      notaActual: null,
    });
  }

  cambiarNotaActual(nota) {
    console.log(nota);
    this.setState({
      creandoNota:false,
      notaActual: nota
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3">
            <div className="col-md-12">
              <Perfil />
            </div>
            <div className="col-md-12">
              <Notas notas={this.state.notas} cambiarNotaActual={this.cambiarNotaActual.bind(this)} agregarNotaNueva={this.agregarNotaNueva.bind(this)}/>
            </div>
          </div>
          <div className="col-md-9">
            {this.state.creandoNota?
            <CrearNota />
            :
            <DetalleNota notaActual={this.state.notaActual} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
