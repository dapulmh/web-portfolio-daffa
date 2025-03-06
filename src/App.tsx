import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ProjectDetailNavbar from "./components/ProjectDetailNavbar";
import HomePage from "./page/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProjectDetailPage from "./page/ProjectDetailPage";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname.startsWith("/project/") ? (
        <ProjectDetailNavbar />
      ) : (
        <NavbarComponent />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
