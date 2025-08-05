import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { token } = useAuth(); // Use the auth hook

  return (
    <header>
      <nav className="navBar">
        <NavLink to="/departments">Departments</NavLink> |{" "}
        <NavLink to="/faculty">Faculty</NavLink>
        {!token && (
          <>
            |<NavLink to="/login"> Admin Login</NavLink> |{" "}
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
