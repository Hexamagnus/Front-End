import React, { Component } from 'react';
import './detalleNota.css';

class DetalleNota extends Component {

    constructor(props) {
        super(props);
        this.state = {
            analisisSelec: false,
            resumenSelec: false,
            resumenActual: null
        }
    }

    analisisSeleccionado() {
        var nuevoSel = !this.state.analisisSelec;
        this.setState({
            analisisSelec: nuevoSel,
            resumenSelec: false
        });

    }

    resumenSeleccionado() {
        var nuevoSel = !this.state.resumenSelec;
        this.setState({
            resumenSelec: nuevoSel
        });
    }

    cambiarResumenActual(resumen) {
        this.setState({
            resumenActual: resumen
        });
    }

    realizarAnalisis(tipoAnalisis) {
        switch (tipoAnalisis) {
            case "resumenSimple":
                // Consumir API y/o otras operaciones
                break;
            case "resumenMedio":
                // Consumir API y/o otras operaciones
                break;
            case "resumenLargo":
                // Consumir API y/o otras operaciones
                break;
            case "nubePalabras":
                // Consumir API y/o otras operaciones
                break;
            case "mapaMental":
                // Consumir API y/o otras operaciones
                break;
            case "resumenEstadistico":
                // Consumir API y/o otras operaciones
                break;
            case "trivias":
                // Consumir API y/o otras operaciones
                break;
            case "asitenteMapaMental":
                // Consumir API y/o otras operaciones
                break;
            case "compartir":
                // Consumir API y/o otras operaciones
                break;
            default:
                break;
        }
    }

    render() {
        if(!this.props.notaActual){
            return (
                <div className="col-md-12"></div>
            )
        }
        else if (!this.state.resumenActual) {
            return (
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="btn btn-info btn-lg btn-analisis" href="#" onClick={() => this.analisisSeleccionado.bind(this)()}>Análisis</a>
                        </div>
                        {this.state.analisisSelec ?
                            <div className="col-md-4">
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.resumenSeleccionado.bind(this)()}>Resumen</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("nubePalabras")}>Nube de Palabras</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("mapaMental")}>Mapa Mental</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("resumenEstadistico")}>Resumen Estadístico</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("trivias")}>Trivias</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("asitenteMapaMental")}>Asistente de Mapa Mental</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg btn-tipoa" href="#" onClick={() => this.realizarAnalisis.bind(this)("compartir")}>Compartir</a>
                                </div>
                            </div>
                            : ''
                        }
                        {this.state.resumenSelec ?
                            <div className="col-md-4">
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.realizarAnalisis.bind(this)("resumenSimple")}>Simple</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.realizarAnalisis.bind(this)("resumenMedio")}>Medio</a>
                                </div>
                                <div className="col-md-12">
                                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.realizarAnalisis.bind(this)("resumenLargo")}>Largo</a>
                                </div>
                            </div>
                            : ''
                        }
                    </div>
                    {this.props.notaActual.resumenes.map((resumen, index) => {
                        return (
                            <div className="row">
                                <div className="col-md-4">
                                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.cambiarResumenActual.bind(this)(resumen)}>
                                        {resumen.titulo}
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            );
        }
        else {
            return (
                <div className="col-md-12">

                </div>
            )
        }
    }
};

export default DetalleNota;