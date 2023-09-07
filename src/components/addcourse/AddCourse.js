import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFile } from "@fortawesome/free-solid-svg-icons"; 
import './AddCourse.css';

function AddCourse(){
  return (
    <div className="container mt-5">
      <div className="card custom-border"> 
        <div className="card-header">
          <h2>Cours</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ajouter un cours</h5>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" id="titre" placeholder="Nom du cours" />
            </div>
            <div className="mb-3">
              <textarea type="text" className="form-control col-md-8" id="description" placeholder="Ajouter une description"></textarea>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faClock} /> 
                  </span>
                  <input type="text" className="form-control" id="duree" placeholder="Duree" />
                </div>
              </div>
              <div className="col-md-4"> 
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faFile} /> 
                  </span>
                  <input type="file" className="form-control" id="fichier" placeholder="Joindre un fichier" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Ajouter un cours
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
