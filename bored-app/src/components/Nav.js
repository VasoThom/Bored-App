import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/activities">Activities</Link>
        </li>
      </ul>
    </nav>
  );
}
