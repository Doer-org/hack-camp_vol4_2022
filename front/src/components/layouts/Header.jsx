import "../../styles/App.css";
import {Navbar} from "./Navbar"
import { SnackButton } from "./SnackButton";

export const Header = () => {
  return (
    <div>
        <div className="main-color lg:pb-12 pb-6 lg:mb-12 mb-4">
            <Navbar /> 

            <p className="title lg:text-7xl text-5xl text-white font-bord text-center pb-1 pt-10">
                🍩 OKASHI OMIKUZI 🍩
            </p>
            <p className="lg:text-3xl font-normal text-base text-white text-center pt-3 pb-8">
                お菓子を愛するすべての人たちへ
            </p>
            <p className="lg:text-2xl text-base text-white font-light text-center mb-4">
                test test test test test test test test test
            </p>
            <SnackButton />
        </div>
    </div>
  );
};
