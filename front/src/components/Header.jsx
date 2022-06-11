import { HeadHighlight } from "./HeadHighlight";
import "../App.css"
import image from "../images/logo.png"

export const Header = () => {
  return (
    <div class="main-color p-2">
      <img class="lg:w-20 w-14 m-0 p-0" src={image} alt="お菓子おみくじロゴ" />
      <p class="lg:text-6xl text-3xl text-white font-bord text-center pb-1 pt-5">OKASHI OMIKUZI</p>
      <p class="lg:text-3xl text-xl text-white font-light text-center pt-3">お菓子を愛するすべての人たちへ</p>
      <HeadHighlight />
    </div>
  );
};
