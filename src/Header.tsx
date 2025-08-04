import "../styles/Header.css";
import { Link } from "@tanstack/react-router";

export default function Header() : React.ReactElement {
  return (
    <nav>
      <Link className="header-link" to="/">
        <div className="header-brand">
          <h1>Klassiska bad</h1>
          <p>
            Stockholm <span>&bull;</span> Göteborg
          </p>
        </div>
      </Link>
    </nav>
  );
}
