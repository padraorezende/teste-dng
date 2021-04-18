import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../hooks/useAuth";
import "./index.scss";
export default function Header() {
  const { logout } = useAuth();
  return (
    <div className="header-container">
      <div />
      <div />
      <div className="profile-link">
        <button type="button" onClick={logout}>
          <FontAwesomeIcon size="lg" icon={faDoorOpen} />
        </button>
      </div>
    </div>
  );
}
