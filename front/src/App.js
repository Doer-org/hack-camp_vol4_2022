import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Result />
      <Footer />
    </div>
  );
}

export default App;
