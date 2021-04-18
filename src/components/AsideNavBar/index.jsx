import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import {
  faChevronDown,
  faLanguage,
  faLaptopCode,
  faChartBar,
  faAward,
  faGraduationCap,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import { Link } from "react-router-dom";
export default function AsideNavBar() {
  return (
    <div className="aside-nav-bar p-1">
      <div className="d-flex border-bottom">
        <div className="p-1 d-flex align-middle justify-content-center mt-2">
          <h1 className="h5">MyProfile</h1>
        </div>
      </div>
      <div className="pt-4">
        <Accordion>
          <Card className="aside-card">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                className="w-100"
                variant="link"
                eventKey="0"
              >
                <h1 className="h4">Ações</h1>
                <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/home"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon icon={faIdCard} className="mr-3 mt-1" />{" "}
                  <h1 className="h6 mb-0">Perfil</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/formacao"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="mr-3 mt-1"
                  />{" "}
                  <h1 className="h6 mb-0">Formação</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/idiomas"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon icon={faLanguage} className="mr-3 mt-1" />{" "}
                  <h1 className="h6 mb-0">Idiomas</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/tecnologias"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-3 mt-1" />{" "}
                  <h1 className="h6 mb-0">Tecnologias</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/certificados"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon icon={faAward} className="mr-3 mt-1" />{" "}
                  <h1 className="h6 mb-0">Certificados</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link
                  to="/experiencia"
                  className="d-flex align-middle justify-content-end"
                >
                  <FontAwesomeIcon icon={faChartBar} className="mr-3 mt-1" />{" "}
                  <h1 className="h6 mb-0">Experiências</h1>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
