import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Home, Details } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route exact path="/country/details:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
