import React, { useState } from "react";
import { Result } from "./Result";
import { Form } from "./Form";
import Member from "./Member";

const Home = () => {
  const [isResult, setIsResult] = useState(false);
  const [isShow, setShow] = useState(0);
  const [emotion, setEmotion] = useState("");
  const [price, setPrice] = useState(1000);

  const handleSubmit = () => {
    setIsResult(true);
    setShow(true);
  };

  return (
    <div>
      {isResult ? (
        isShow ? (
          <Result
            emotion={emotion}
            price={price}
            setEmotion={setEmotion}
            setPrice={setPrice}
            setIsResult={setIsResult}
          />
        ) : (
          <div>aaa</div>
        )
      ) : (
        <>
          <div className="py-10">
            <Form
              handleSubmit={handleSubmit}
              emotion={emotion}
              price={price}
              setEmotion={setEmotion}
              setPrice={setPrice}
            />
          </div>
          <Member />
        </>
      )}
    </div>
  );
};

export default Home;
