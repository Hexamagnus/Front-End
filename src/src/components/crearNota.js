import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Files from 'react-files'
import './crearNota.css';

class CrearNota extends Component {

    constructor(props) {
        super(props);
        this.state = {
            creando: false,
            subirArchivo: false,
            tituloNota: "",
            descripcionNota: "",
            tagsNota: ""
        }
    }

    empezarAGrabar() {
        this.setState({
            creando: true,
        });
    }

    subirTexto() {
        this.setState({
            creando: true,
            subirArchivo:true
        });
    }

    subirAudio() {
        this.setState({
            creando: true,
            subirArchivo:true
        });
    }

    handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

    onFilesChange (files) {
        console.log(files)
    }
 
    onFilesError (error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    guardarNota() {

    }

    
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.empezarAGrabar.bind(this)()}>Empezar a grabar</a>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.subirTexto.bind(this)()}>Subir texto</a>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg" href="#" onClick={() => this.subirAudio.bind(this)()}>Subir audio</a>
                </div>
                {this.state.subirArchivo?
                <div className="files">
                    <Files
                    className='files-dropzone'
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['image/png', 'text/plain', 'audio/*']}
                    multiple
                    maxFiles={3}
                    maxFileSize={1000000000}
                    minFileSize={0}
                    clickable
                    >
                    Drop files here or click to upload
                    </Files>
                </div>
                :
                ''
                }
                {this.state.creando ?
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" name="tituloNota" value={this.state.tituloNota} onChange={this.handleInputChange} className="form-control" placeholder="Título" required /><br />
                        </div>
                        <div className="col-md-12">
                            <input type="text" name="descripcionNota" value={this.state.descripcionNota} onChange={this.handleInputChange} className="form-control" placeholder="Descripción" required /><br />
                        </div>
                        <div className="col-md-12">
                            <input type="text" name="tagsNota" value={this.state.tagsNota} onChange={this.handleInputChange} className="form-control" placeholder="Tags (Separados por coma)" required /><br />
                        </div>
                        <div className="col-md-12">
                            <a className="btn btn-info btn-lg" href="#" onClick={() => this.guardarNota.bind(this)()}>Guardar nota</a>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        );
    }
};

export default CrearNota;