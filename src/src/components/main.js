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
          "fecha_modificacion":"26-05-17",
          "resumenes":[
            {
              "titulo":"Clase termo"
            }
          ]
        },
        {
          "titulo": "Filo",
          "fecha_modificacion":"03-02-16",
          "resumenes":[
            {
              "titulo":"Clase socrates"
            }
          ]
        },
        {
          "titulo": "Mate",
          "fecha_modificacion":"21-10-17",
          "resumenes":[
            {
              "titulo":"Clase Fourier"
            }
          ]
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
      <div className="row colmenu">
        <div className="col-md-12 colmenu">
          <div className="col-md-3 colmenu1">
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
