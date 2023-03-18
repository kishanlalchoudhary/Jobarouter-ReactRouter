// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          {/* The NavLink is more useful than Link because it adds active class automatically to the link clicked */}
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* Below are two methods for the path to root  */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
