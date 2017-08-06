import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Files from 'react-files'
import './crearNota.css';
/*
var fs = require("fs");
var azure = require('azure-storage');
var blobService = azure.createBlobService();
blobService.createContainerIfNotExists('audio', {
  publicAccessLevel: 'blob'
}, function(error, result, response) {
  if (!error) {
    // if result = true, container was created.
    // if result = false, container already existed.
  }
});
*/




class CrearNota extends Component {

    constructor(props) {
        super(props);
        this.state = {
            creando: false,
            subirArchivo: false,
            tituloNota: "",
            descripcionNota: "",
            tagsNota: "",
            file:""
        }
    }
i
    empezarAGrabar() {
        this.setState({
            creando: true,
            subirArchivo:false
        });

        document.getElementById("speech").style.display = "block";
    }

    subirTexto() {
        this.setState({
            creando: true,
            subirArchivo:true
        });
        document.getElementById("speech").style.display = "none";
    }

    subirAudio() {
        this.setState({
            creando: true,
            subirArchivo:true
        });
        document.getElementById("speech").style.display = "none";
    }

    handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

    _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleFileChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        console.log(reader.result);
      this.setState({
        file: file
      });
    }
    
    reader.readAsDataURL(file)
    console.log(reader);
    
  }


    guardarNota() {

    }

    
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg btn-crear" href="#" onClick={() => this.empezarAGrabar.bind(this)()}>Empezar a grabar</a>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg btn-crear" href="#" onClick={() => this.subirTexto.bind(this)()}>Subir texto</a>
                </div>
                <div className="col-md-4">
                    <a className="btn btn-info btn-lg btn-crear" href="#" onClick={() => this.subirAudio.bind(this)()}>Subir audio</a>
                </div>
                {this.state.subirArchivo?
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleFileChange(e)} />
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Cargar archivo</button>
                </form>
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
                            <a className="btn btn-info btn-lg btn-crear-nota" href="#" onClick={() => this.guardarNota.bind(this)()}>Guardar nota</a>
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