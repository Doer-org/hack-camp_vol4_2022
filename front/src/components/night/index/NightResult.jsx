import "../../../styles/App.css";
import axios from "axios";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import omikuzi from "../index/data/omikuzi.json";
import Ramen from "../../ramenList/Ramen";
import animationData from "./lottie/19411-ramen-noodles.json";

export const NightResult = ({ setIsResult }) => {
  const [ramenList, setRamenList] = useState({});
  const randnum = Math.floor(Math.random() * 5);
  const omikuziResult = omikuzi[randnum];

  const getRamenList = () => {
    axios
      .get(`https://server-doer.herokuapp.com/ramen/random`)
      .then((data) => {
        const resData = data.data.data;

        setRamenList(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRamenList();
  }, []);

  const handleResult = () => {
    setIsResult(false);
  };

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3 * 1000);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {loading ? (
        <div>
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
      ) : (
        <div className="py-12">
          <p className="text-3xl text-center text-white">おみくじ結果！！🎉</p>
          <div className="grid grid-cols-5 text-center my-5">
            <div className="col-span-5 m-2 md:col-span-3 md:col-start-2 shadow-2xl result-night border-4">
              <div className="night-color p-10">
                <p className="text-2xl font-extrabold">{omikuziResult.luck}</p>
                <p>{omikuziResult.description}</p>
              </div>

              <div className="">
                <div className="grid grid-cols-1 text-center py-5 bg-white">
                  <div>金額：{ramenList.price}円</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <button
              onClick={handleResult}
              className="p-5 bg-red-800 hover:bg-red-600 hover:text-white text-gray-200 rounded-2xl shadow-2xl"
            >
              もう一度遊ぶ
            </button>
          </div>
          <div>
            <div className=" grid grid-cols-1 gap-5 mx-2 md:mx-5  text-center">
              <Ramen ramenInfo={ramenList} key={ramenList.id} className="" />;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
