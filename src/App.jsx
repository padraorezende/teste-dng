import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import history from "./service/history";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
