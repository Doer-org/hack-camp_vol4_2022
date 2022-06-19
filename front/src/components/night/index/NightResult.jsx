import "../../../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Ramen from "../../ramenList/Ramen";

export const NightResult = () => {
  const [ramenList, setRamenList] = useState([]);

  const getRamenList = () => {
    axios
      .get(`http://localhost:8000/ramen/random`)
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
  return (
    <div className="py-12">
      <p className="text-3xl text-center text-white">おみくじ結果！！🎉</p>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-5">
        {ramenList.map((ramen, idx) => {
          return <Ramen ramenInfo={ramen} key={idx} />;
        })}
      </div>
    </div>
  );
};
