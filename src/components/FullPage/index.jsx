import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

import AsideNavBar from "../AsideNavBar";
import Header from "../Header";
import "./index.css";

export default function FullPage({ children }) {
  const renderChild = () => children;
  const history = useHistory();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    }
  }, [history, isLogged]);

  return (
    <div className="wrapper d-flex">
      <AsideNavBar />
      <div className="container-fluid p-0">
        <Header />
        <main className="d-flex justify-content-center align-middle">
          {renderChild()}
        </main>
      </div>
    </div>
  );
}
