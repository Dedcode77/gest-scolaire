import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="login-form mt-5">
            <h2>S'inscrire</h2>
            <p>Creer un compte</p>
            <form>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-left custom-input"
                    placeholder="Nom de compte"
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    className="form-control form-control-lg shadow-left custom-input"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-lg shadow-left custom-input"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-lg shadow-left custom-input"
                    placeholder="Confirmer mot de passe"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: "#56CCF2", width: "100%" }}
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 bg-color-right d-flex flex-column justify-content-start align-items-center text-white">
          {/* Add additional content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Register;
