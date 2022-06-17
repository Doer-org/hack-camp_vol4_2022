import { HeadHighlight } from "./HeadHighlight";
import "../App.css";
import {Navbar} from "./Navbar"

export const Header = () => {
  return (
    <div className="main-color pb-10">
        <Navbar /> 

      <p className="lg:text-6xl text-3xl text-white font-bord text-center pb-1 pt-10">
        OKASHI OMIKUZI
      </p>
      <p className="lg:text-3xl text-base text-white font-light text-center pt-3 pb-8">
        お菓子を愛するすべての人たちへ
      </p>
      <HeadHighlight />
    </div>
  );
};