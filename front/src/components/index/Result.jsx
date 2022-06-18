import "../../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "../snackList/Snack";


export const Result = ({
    emotion,
    price,
    setEmotion,
    setPrice
}) => {
    const [snackList, setSnackList] = useState([]);

    const getSnackList = () => {
      axios
        .get(`http://localhost:8000/snack/random?price=${price}&emotion=${emotion}`)
        .then((data) => {
          const resData = data.data.data;
          setSnackList(resData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
        console.log(price,emotion)
        getSnackList();
    }, []);
  
    return (
        <div className="py-12">
            <p 
                className="text-3xl text-center"
            >
                おみくじ結果！！🎉
            </p>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-5">
                {snackList.map((snack, idx) => {
                return <Snack snackInfo={snack} key={idx} />;
                })}
            </div>
        </div>
    );
};


