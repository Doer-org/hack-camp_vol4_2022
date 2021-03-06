import "../../../styles/App.css";
import { NightNavbar } from "./NightNavbar";
import { NightRamenButton } from "./NightRamenButton";

export const NightHeader = () => {
  return (
    <div>
      <div className="night-color lg:pb-12 pb-6 lg:mb-12 mb-4">
        <NightNavbar />

        <p className="title lg:text-7xl text-5xl text-white font-bord text-center pb-1 pt-10">
          ๐ NO RAMEN NO LIFE ๐
        </p>
        <p className="lg:text-3xl font-normal text-base text-white text-center pt-3 pb-8">
          ใฉใผใกใณใๆใใใในใฆใฎไบบใใกใธ
        </p>
        <p className="lg:text-2xl text-base text-white font-light text-center mb-4">
          ใ่ฆใคใใใใใฟใณใงใใชใใจๅคใๅฑใซ้ใใใฉใผใกใณใ่ฆใคใใพใใใ
          <br />
          ใฉใผใกใณใใใชใใฎๅคใๅๅฎใใใพใ
        </p>
        <NightRamenButton />
      </div>
    </div>
  );
};
