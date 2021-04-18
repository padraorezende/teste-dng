import "./Idiomas.scss";
import Progress from "../../components/Progress";
import ImageEnglish from "../../assets/English.png";
import ImageSpanish from "../../assets/Spanish.png";
import Image from "../../components/SpanImage";

export default function Idiomas() {
  return (
    <div className="idioma-page">
      <div className="row">
        <div className="col-md-4">
          <div>
            <Image
              endereco={ImageEnglish}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className="mt-4">
            <Image
              endereco={ImageSpanish}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="pb-4 border-bottom progress-idioma-page">
            <Progress style={{ width: "75%" }}>Reading</Progress>
            <Progress style={{ width: "56%" }}>Speaking</Progress>
            <Progress style={{ width: "66%" }}>Writing</Progress>
            <Progress style={{ width: "70%" }}>Listening</Progress>
          </div>
          <div className="progress-idioma-page">
            <Progress style={{ width: "78%" }}>Leer</Progress>
            <Progress style={{ width: "80%" }}>Escuchar</Progress>
            <Progress style={{ width: "76%" }}>Escribir</Progress>
            <Progress style={{ width: "66%" }}>Hablar</Progress>
          </div>
        </div>
      </div>
    </div>
  );
}
