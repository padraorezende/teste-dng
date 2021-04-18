import { Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import FullPage from "../components/FullPage";
import Route from "./Route";
import Certificados from "../pages/Certificados/Certificados";
import Experiencia from "../pages/Experiencia/Experiencia";
import Formacao from "../pages/Formacao/Formacao";
import Idiomas from "../pages/Idiomas/Idiomas";
import Tecnologias from "../pages/Tecnologias/Tecnologias";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <FullPage>
        <Route path="/home" exact component={Home} />
        <Route path="/certificados" exact component={Certificados} />
        <Route path="/experiencia" exact component={Experiencia} />
        <Route path="/formacao" exact component={Formacao} />
        <Route path="/idiomas" exact component={Idiomas} />
        <Route path="/tecnologias" exact component={Tecnologias} />
      </FullPage>
    </Switch>
  );
}
