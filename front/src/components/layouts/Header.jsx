import "../../styles/App.css";
import {Navbar} from "./Navbar"
import { SnackButton } from "./SnackButton";

export const Header = () => {
  return (
    <div>
        <div className="main-color lg:pb-12 pb-6 lg:mb-12 mb-4">
            <Navbar /> 

            <p className="title lg:text-7xl text-5xl text-white font-bord text-center pb-1 pt-10">
                ๐ฉ OKASHI OMIKUZI ๐ฉ
            </p>
            <p className="lg:text-3xl font-normal text-base text-white text-center pt-3 pb-8">
                ใ่ๅญใๆใใใในใฆใฎไบบใใกใธ
            </p>
            <p className="lg:text-2xl text-base text-white font-light text-center mb-4">
                ใ่ๅญใใใชใใๅพใฃใฆใใ๏ผ<br />
                ไปใฎๆฐๆใกใจไบ็ฎใๅฅๅใใฆใ่ๅญใ่ฆใคใใใ
            </p>
            <SnackButton />
        </div>
    </div>
  );
};
