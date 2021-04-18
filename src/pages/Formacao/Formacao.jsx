import "./Formacao.scss";
import Text from "../../components/Text";
import Puc from "../../assets/PucMinas.jpg";
import Image from "../../components/SpanImage";

export default function Formacao() {
  return (
    <div className="position-relative formacao">
      <Image endereco={Puc} style={{ width: "100%", height: "100%" }} />
      <div className="position-absolute">
        <Text>Engenharia de Software 2020 – 2023</Text>
      </div>
    </div>
  );
}
