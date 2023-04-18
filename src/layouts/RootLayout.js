import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink end to="careers">Careers</NavLink>
          </div>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet context={{ greeting: "Welcome" }} />
      </main>
      <footer>
        <p>© 2023 Jobarouter. All right reserved.</p>
      </footer>
    </div>
  );
}
