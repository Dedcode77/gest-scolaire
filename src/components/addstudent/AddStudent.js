import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddStudent.css';

function AddStudent() {
  return (
    <div className="container mt-5">
      <div className="card custom-border">
        <div className="card-header" style={{ backgroundColor: '#2383C4', color: 'white' }}>
          <h2>Élèves</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#2383C4' }}>Ajouter un élève</h5>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="nom" className="form-label">Nom <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" id="nom" />
              </div>
              <div className="col">
                <label htmlFor="prenom" className="form-label">Prénom <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" id="prenom" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="naissance" className="form-label">Date et lieu de naissance</label>
                <input type="text" className="form-control" id="naissance" />
              </div>
              <div className="col">
                <label htmlFor="genre" className="form-label">Genre</label>
                <select className="form-select" id="genre">
                  <option value="" disabled selected>Sélectionnez le genre</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="niveau" className="form-label">Niveau de classe <span style={{ color: 'red' }}>*</span></label>
              <select className="form-select" id="niveau" style={{ width: '50%' }}>
                <option value="" disabled selected>Sélectionnez le niveau</option>
                <option value="niveau1">Niveau 1</option>
                <option value="niveau2">Niveau 2</option>
                <option value="niveau3">Niveau 3</option>
              </select>
            </div>
            <p><span style={{ color: 'red' }}>*</span> Informations obligatoires</p>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#56CCF2', float: 'right' }}>
              Ajouter l'élève
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
