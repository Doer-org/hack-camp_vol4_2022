import "./styles/App.css";
import Home from "./components/index/Home";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Ranking } from "./components/ranking/Ranking";
import { About } from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackList } from "./components/snackList/SnackList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rank" element={<Ranking />} />
            <Route path="/about" element={<About />} />
            <Route path="/snackList" element={<SnackList/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
