import { useState, useEffect } from "react";
import { RankSnack } from "./RankSnack";
import { RankTitle } from "./RankTitle";
import axios from "axios";

export const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  const getRanking = () => {
    axios
      .get(`https://server-doer.herokuapp.com/snack/ranking`)
      .then((data) => {
        const resRank = data.data.data;
        setRanking(resRank)
        console.log(resRank);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRanking();
  }, []);


  return (
    <div>
      <RankTitle />
      <div>
        {
          ranking.map((rankSnack, idx) => {
            return <RankSnack rankSnackInfo={rankSnack} index={idx} key={idx} />
          })
        }
      </div>
    </div>
  );
};
