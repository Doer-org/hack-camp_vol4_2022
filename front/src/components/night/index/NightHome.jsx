import React, { useState }from 'react'
import { NightResult } from './NightResult'
import { NightForm } from './NightForm'
import Member from "../index/NightMember";

const NightHome = () => {
  const [isResult, setIsResult] = useState(false)
  const [isShow, setShow] = useState(0);

    // const [emotion, setEmotion] = useState("");
    // const [price, setPrice] = useState(1000);

    const handleSubmit = () => {
        // console.log(price,emotion)
        setIsResult(true);
        setShow(true);
    }
    const sleep = (waitMsec) => {
      var startMsec = new Date();
      // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
      while (new Date() - startMsec < waitMsec);
      setShow(true);
    };
    
  return (
    <div>
    {isResult ? (
      isShow ? (
        <NightResult
          // emotion={emotion}
          // price={price}
          // setEmotion={setEmotion}
          // setPrice={setPrice}
          setIsResult={setIsResult}
        />
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
  )
}

export default NightHome