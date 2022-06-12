import { HeadHighlight } from "./HeadHighlight";
import "../App.css";
import image from "../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="main-color p-2 pb-10">
      <div>
        <Link to="/">Home</Link>
        <Link to="/rank">Ranking</Link>
      </div>
      <img
        className="lg:w-20 w-14 m-auto p-0 sm:m-0"
        src={image}
        alt="お菓子おみくじロゴ"
      />
      <p className="lg:text-6xl text-3xl text-white font-bord text-center pb-1 pt-5">
        OKASHI OMIKUZI
      </p>
      <p className="lg:text-3xl text-base text-white font-light text-center pt-3 pb-8">
        お菓子を愛するすべての人たちへ
      </p>
      <HeadHighlight />
    </div>
  );
};