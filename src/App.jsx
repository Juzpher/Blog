import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <div className="min-h-[calc(100vh-96px)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
