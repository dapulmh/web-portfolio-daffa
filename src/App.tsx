import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavbarComponent></NavbarComponent>
        <ProfileComponent></ProfileComponent>
      </div>
    </>
  );
}

export default App;
