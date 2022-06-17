
import { useState,useEffect } from "react";
import Snack from "./Snack";

import axios from "axios";

export const SnackList = () => {

    const [snackList, setSnackList] = useState([])

    const getSnackList = ()=>{
        axios
            .get(`http://localhost:8000/snack/all`)
            .then((data)=>{
                const resData = data.data.data
                setSnackList(resData)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(() => {
        getSnackList()
    }, []);

    return (
        <div>
            {
                snackList.map((snack,idx)=>{
                    return <Snack snackInfo={snack} key={idx}/>
                })
            }
        </div>
    );
};
