import React, { Component } from 'react';
import './notas.css';

class Notas extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <a className="btn btn-info btn-lg btn-agregar" href="#" onClick={() => this.props.agregarNotaNueva()}>+</a>
                </div>
                {this.props.notas.map((nota, index) => {
                    return (
                        <div className="col-md-12">
                            <a className="btn btn-info btn-lg btn-nota" href="#" onClick={() => this.props.cambiarNotaActual(nota)}>
                                {nota.titulo} ({nota.fecha_modificacion})
                                </a>
                        </div>
                    )
                })
                }
            </div>
        );
    }
};

export default Notas;