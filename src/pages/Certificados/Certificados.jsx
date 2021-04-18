import "./Certificados.scss";
import Text from "../../components/Text";
import Image from "../../components/SpanImage";
import CursoWeb from "../../assets/CursoWeb.jpg";
import LearnWeb from "../../assets/LearnWeb.jpg";
import JavaWeb from "../../assets/JavaWeb.jpg";

export default function Certificados() {
  return (
    <div className="certificado-page">
      <div className="p-3 border-bottom">
        <a href="http://ude.my/UC-7626173f-46c5-4134-b336-6afbba75346f">
          <div className="row">
            <div className="col-md-4">
              <Image
                endereco={CursoWeb}
                style={{ width: "280px", height: "160px" }}
              />
            </div>
            <div className="col-md-8">
              <Text title="Curso Web Moderno Completo com JavaScript 2021" />
              <Text position="text-justify">
                Domine Web, 14 Cursos + Projetos, Javascript, Angular, React,
                Vue, Node, HTML, CSS, jQuery, Bootstrap Webpack Gulp MySQL
              </Text>
              <Text position="text-justify">
                Rating: 4.7 (33,685 ratings) 92,277 students Created by Leonardo
                Moura Leitao, Cod3r Cursos Online Last updated 3/2021
              </Text>
            </div>
          </div>
        </a>
      </div>
      <div className="p-3 border-bottom">
        <a href="http://ude.my/UC-f30e999b-45d4-4b39-b325-9ac3c8ef39fe">
          <div className="row">
            <div className="col-md-4">
              <Image
                endereco={LearnWeb}
                style={{ width: "280px", height: "160px" }}
              />
            </div>
            <div className="col-md-8">
              <Text title="Learn Ethical Hacking From Scratch" />
              <Text position="text-justify">
                Become an ethical hacker that can hack computer systems like
                black hat hackers and secure them like security experts.
              </Text>
              <Text position="text-justify">
                Bestseller Rating: 4.6 (93,580 ratings) 424,956 students Created
                by Zaid Sabih, z Security Last updated 4/2021
              </Text>
            </div>
          </div>
        </a>
      </div>
      <div className="p-3 border-bottom">
        <a href="http://ude.my/UC-e3fd4917-1cb4-45ea-9407-8a7d14cf59b1">
          <div className="row">
            <div className="col-md-4">
              <Image
                endereco={JavaWeb}
                style={{ width: "280px", height: "160px" }}
              />
            </div>

            <div className="col-md-8">
              <Text title="REST API's RESTFul do 0 à AWS com Spring Boot" />
              <Text position="text-justify">
                Desenvolva uma API REST do zero absoluto atendendo todos os
                níveis de maturidade RESTful e implante na AWS + React JS
              </Text>
              <Text position="text-justify">
                Rating: 4.6 (946 ratings) 3,530 students Created by Leandro da
                Costa Gonçalves Last updated 3/2021
              </Text>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
