import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header/Header";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*"  element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
