import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ProfileComponent from "./components/ProfileComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectComponent from "./components/ProjectComponent";
import ProjectDetailComponent from "./components/ProjectDetailComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ProfileComponent />
      <SkillsComponent />
      <ProjectComponent />
    </div>
  );
}

export default App;
