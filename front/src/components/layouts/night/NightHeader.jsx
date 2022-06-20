import "../../../styles/App.css";
import { NightNavbar } from "./NightNavbar";
import { NightRamenButton } from "./NightRamenButton";

export const NightHeader = () => {
  return (
    <div>
      <div className="night-color lg:pb-12 pb-6 lg:mb-12 mb-4">
        <NightNavbar />

        <p className="title lg:text-7xl text-5xl text-white font-bord text-center pb-1 pt-10">
          🍜 NO RAMEN NO LIFE 🍜
        </p>
        <p className="lg:text-3xl font-normal text-base text-white text-center pt-3 pb-8">
          ラーメンを愛するすべての人たちへ
        </p>
        <p className="lg:text-2xl text-base text-white font-light text-center mb-4">
          「見つける」ボタンであなたと夜を共に過ごすラーメンを見つけましょう
          <br />
          ラーメンがあなたの夜を充実させます
        </p>
        <NightRamenButton />
      </div>
    </div>
  );
};
