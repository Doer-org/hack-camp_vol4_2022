import "../../styles/App.css";
import axios from "axios";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { SnackResult } from "../index/SnackResult";
import omikuzi from "../../data/omikuzi.json";
import animationData from "./lottie/100957-eating-cookie.json";
// import Twitter from "../../data/images/tweet_share.png";

export const Result = ({
  emotion,
  price,
  setEmotion,
  setPrice,
  setIsResult,
}) => {
  const [snackList, setSnackList] = useState([]);
  const randnum = Math.floor(Math.random() * 5);
  const omikuziResult = omikuzi[randnum];
  let currentEmotion = 0;

  if (emotion == "normal") {
    currentEmotion = 0;
  } else if (emotion == "sad") {
    currentEmotion = 1;
  } else if (emotion == "angry") {
    currentEmotion = 2;
  } else if (emotion == "happy") {
    currentEmotion = 3;
  }

  const getSnackList = () => {
    axios
      .get(
        `https://server-doer.herokuapp.com/snack/random?price=${price}&emotion=${currentEmotion}`
      )
      .then((data) => {
        const resData = data.data.data;
        setSnackList(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(price, emotion);

    getSnackList();
  }, []);

  console.log(snackList);

  let sum = 0;
  for (let i = 0; i < snackList.length; i++) {
    sum += snackList[i].price;
  }
  console.log(sum);
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
          <p className="text-3xl text-center my-10">おみくじ結果！！🎉</p>
          <div className="grid grid-cols-5 text-center my-5">
            <div className="col-span-5 m-2 md:col-span-3 md:col-start-2 shadow-2xl results border-4">
              <div className="main-color p-10">
                <p className="text-2xl font-extrabold">{omikuziResult.luck}</p>
                <p>{omikuziResult.description}</p>
              </div>

              <div>
                <div className="grid grid-cols-2 text-center my-5">
                  <div className=" border-r-4 results">
                    総数：{snackList.length}個
                  </div>
                  <div>合計金額：{sum}円</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <button
              onClick={handleResult}
              className="p-5 bg-orange-200 hover:bg-orange-500 hover:text-white rounded-2xl shadow-2xl"
            >
              もう一度遊ぶ
            </button>
          </div>

          <div className="container">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="share-button" data-show-count="false">
              <img src={Twitter} className="mx-auto"></img>
            </a>
          </div>


          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-5">
            {snackList.map((snack, idx) => {
              return (
                <SnackResult
                  snackInfo={snack}
                  iine={omikuziResult.iine}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
