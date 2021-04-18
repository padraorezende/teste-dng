import "./Experiencia.scss";
import Text from "../../components/Text";

export default function Experiencia() {
  return (
    <div className="experiencia-page">
      <div className="mb-4 border-bottom">
        <Text title="Help Choice">
          Trabalho Interdisciplinar I Aplicações Web - Gerente de Projeto
        </Text>
      </div>
      <div className="mb-4 border-bottom ">
        <Text title="VemCar">
          Trabalho Interdisciplinar II Aplicações para Processos de Negócios -
          Analista de Requisitos
        </Text>
      </div>
      <div className="mb-4 border-bottom">
        <Text title="Pizza Manager">
          Trabalho Interdisciplinar III Aplicações para Cenários Reais -
          Programador - Em desenvolvimento
        </Text>
      </div>
    </div>
  );
}
