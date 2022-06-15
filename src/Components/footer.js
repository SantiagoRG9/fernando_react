import React from "react";
import "./footer.css";
import logo from "../img/1.png";
function footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img className="img1" src={logo} />
            <h4>Emcali</h4>
            <h1 className="list-unstyled">
              <li>Av 2N entre Calles 10 y 11 CAM Torre EMCALI</li>
              <li>Santiago de Cali</li>
              <li>Horario de Atención: 8:00AM a 5:00PM</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contactanos</h4>
            <ui className="list-unstyled">
              <li>Telefono: +57(602)899 9999</li>
              <li>Línea de Atención al Cliente: 177</li>
              <li>
                Desde Teléfono Fijo: (602)5240177 Líneas de Seguridad: (602)325
                0000 - (602)899 5302
              </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Superintendencia de Industria y Comercio</h4>
            <ui className="list-unstyled">
              <li>Dirección: Carrera 13 27 00 - Bogotá</li>
            </ui>
          </div>
          <div className="col">
            <h4>Correo</h4>
            <ui className="list-unstyled">
              <li>Electrónico: contactenos@sic.gov.co</li>
            </ui>
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <li>Center: (601)5870000 - (601)5920400</li>
              <li>Línea Nacional: 018000910165</li>
            </ui>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Todos los derechos reservados © 2020
          - Términos y Condiciones | Políticas de seguridad Razón social
          EMPRESAS MUNICIPALES DE CALI E.I.C.E. E.S.P.
        </p>
      </div>
    </div>
  );
}

export default footer;
