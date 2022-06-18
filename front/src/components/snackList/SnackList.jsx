import { useState, useEffect } from "react";
import Snack from "./Snack";

import axios from "axios";

export const SnackList = () => {
  const [snackList, setSnackList] = useState([]);

  const getSnackList = () => {
    axios
      .get(`http://localhost:8000/snack/all`)
      .then((data) => {
        const resData = data.data.data;
        setSnackList(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSnackList();
  }, []);

  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-5">
      {snackList.map((snack, idx) => {
        return <Snack snackInfo={snack} key={idx} />;
      })}
    </div>
  );
};
