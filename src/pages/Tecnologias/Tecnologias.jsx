import "./Tecnologias.scss";
import Progress from "../../components/Progress";

export default function Tecnologias() {
  return (
    <div className="tecnologias-page">
      <div className="row">
        <div className="pt-4 col-md-6">
          <Progress style={{ width: "98%" }}>HTML5</Progress>
          <Progress style={{ width: "95%" }}>CSS3</Progress>
          <Progress style={{ width: "83%" }}>Javascript</Progress>
          <Progress style={{ width: "95%" }}>Bootstrap</Progress>
          <Progress style={{ width: "73%" }}>React</Progress>
          <Progress style={{ width: "70%" }}>NodeJs</Progress>
        </div>

        <div className="pt-4 col-md-6">
          <div className="second-column-progress-tecnologias-page">
            <Progress style={{ width: "62%" }}>Java</Progress>
            <Progress style={{ width: "55%" }}>jQuery</Progress>
            <Progress style={{ width: "50%" }}>SQL</Progress>
            <Progress style={{ width: "65%" }}>Assembly</Progress>
            <Progress style={{ width: "88%" }}>C</Progress>
            <Progress style={{ width: "85%" }}>C++</Progress>
          </div>
        </div>
      </div>
    </div>
  );
}
