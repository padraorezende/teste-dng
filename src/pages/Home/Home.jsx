import "./Home.scss";
import Text from "../../components/Text";
import MyImage from "../../assets/MyImage.jpg";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../components/SpanImage";

export default function Home() {
  return (
    <div className="home">
      <div className="mb-4 border-bottom">
        <Image
          endereco={MyImage}
          style={{ width: "250px", height: "250px", borderRadius: "50%" }}
        />
        <Text format="mt-2 font-italic" title="Lucas Padrao" />
        <a href="https://www.linkedin.com/in/padrao-lucas/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mr-3 mt-1"
            style={{ color: "#0e76a8" }}
          />
        </a>
        <a href="https://github.com/padraorezende">
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-3 mt-1"
            style={{ color: "#171515" }}
          />
        </a>
        <Text position="justify">
          Estudante e entusiasta da tecnologia. Busco boas oportunidades e estou
          sempre aprendendo um pouco mais a cada dia.
        </Text>
      </div>
      <Text>
        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-4 mt-1" /> Rua
        Castelo da Feira, Belo Horizonte
      </Text>
      <Text>
        <FontAwesomeIcon icon={faEnvelope} className="mr-4 mt-1" />{" "}
        padraorz@gmail.com
      </Text>
      <Text>
        <FontAwesomeIcon icon={faPhoneAlt} className="mr-4 mt-1" /> 31 9
        88975000
      </Text>
    </div>
  );
}
