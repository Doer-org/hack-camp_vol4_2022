import "./App.css";
import { Form } from "./components/index/Form";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Ranking } from "./components/ranking/Ranking";
import { About } from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Result } from "./components/index/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/rank" element={<Ranking />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Result/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
