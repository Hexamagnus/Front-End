import React, { Component } from 'react';
import './notas.css';

class Notas extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="col-md-12">
                {this.props.notas.map((nota, index) => {
                    return (
                        <div className="col-md-12">
                            <a className="btn btn-info btn-lg" href="#" onClick="">
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