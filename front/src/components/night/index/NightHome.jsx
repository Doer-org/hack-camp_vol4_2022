import React, { useState } from "react";
import { NightResult } from "./NightResult";
import { NightForm } from "./NightForm";
import Member from "../index/NightMember";

const NightHome = () => {
  const [isResult, setIsResult] = useState(false);
  const [isShow, setShow] = useState(0);

  const handleSubmit = () => {
    setIsResult(true);
    setShow(true);
  };

  return (
    <div>
      {isResult ? (
        isShow ? (
          <NightResult setIsResult={setIsResult} />
        ) : (
          <div>aaa</div>
        )
      ) : (
        <>
          <div className="py-10">
            <NightForm
              handleSubmit={handleSubmit}
              // emotion={emotion}
              // price={price}
              // setEmotion={setEmotion}
              // setPrice={setPrice}
            />
          </div>
          <Member />
        </>
      )}
    </div>
  );
};

export default NightHome;
