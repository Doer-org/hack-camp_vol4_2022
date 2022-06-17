import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Ranking } from "./components/Ranking";
import { About } from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Result } from "./components/Result";

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
