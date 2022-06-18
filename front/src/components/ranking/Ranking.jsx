import { useState, useEffect } from "react";
import { RankSnack } from "./RankSnack";
import { RankTitle } from "./RankTitle";
import axios from "axios";

export const Ranking = () => {

  const [ranking, setRanking] = useState([])

  const getRanking = () => {
    axios
      .get(`http://localhost:8000/snack/ranking`)
      .then((data) => {
        const resRank = data.data.data
        console.log(resRank)
        setRanking(resRank)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRanking()
    console.log("hello")
  }, []);


  return (


    <div>
        <RankTitle />
      {
        ranking.map((rankSnack,idx) => {
          return <RankSnack rankSnackInfo={rankSnack} key={idx}/>
        })
      }
    </div>
  );
};
