import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Connection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Connection() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="login-form mt-5">
            <h2>Connexion</h2>
            <p>Connectez-vous à votre compte</p>
            <form>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text custom-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    className="form-control form-control-lg shadow-left custom-input"
                    placeholder="Adresse Mail"
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
              <div className="d-flex justify-content-between mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#56CCF2" }}
                >
                  Connexion
                </button>
                <a href="#forgot-password">Forgot password ?</a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 bg-color-right d-flex flex-column justify-content-start align-items-center text-white">
          <h2 className="mt-5">S'inscrire</h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            ultrices odio, id pellentesque nunc. Curabitur ac elit non ex
            blandit sagittis eu a enim.
          </p>
          <Link to="/register">
          <button
            type="button"
            className="btn btn-primary mt-3"
            style={{ backgroundColor: "#0073B4" }}
          >
            S'inscrire maintenant 
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Connection;
