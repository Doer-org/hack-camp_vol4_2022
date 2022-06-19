import "./styles/App.css";
import Home from "./components/index/Home";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Ranking } from "./components/ranking/Ranking";
import { About } from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackList } from "./components/snackList/SnackList";

import NightHome from "./components/night/index/NightHome";
import NightNotFound from "./components/night/notFound/NightNotFound";
import { NightAbout } from "./components/night/about/NightAbout";
import { NightHeader } from "./components/layouts/night/NightHeader";
import { NightFooter } from "./components/layouts/night/NightFooter";

function App() {
  // 時間取得
  let nowHours = new Date().getHours();

  return (
    <div className="App">
      <BrowserRouter>
        {
          // 00:00 ~ 02:00
          // サイトが変貌します.........🔥🍜
          // テスト用
            // 0 <= nowHours && nowHours <= 24 ? (
          0 <= nowHours && nowHours <= 3 ? (
            <>
              <div className="bg-slate-800">
                <NightHeader />
                <Routes>
                  <Route path="/" element={<NightHome />} />
                  <Route path="/ranking" element={<NightNotFound />} />
                  <Route path="/about" element={<NightAbout />} />
                  <Route path="/snackList" element={<NightNotFound />} />
                </Routes>

                <NightFooter />
              </div>
            </>
          ) : (
            <>
              <div>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ranking" element={<Ranking />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/snackList" element={<SnackList />} />
                </Routes>
              </div>
              <Footer />
            </>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
