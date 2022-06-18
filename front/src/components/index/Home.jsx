import React, { useState } from 'react'
import { Result } from './Result'
import { Form } from './Form'

const Home = () => {
    const [isResult, setIsResult] = useState(false)

    const [emotion, setEmotion] = useState("");
    const [price, setPrice] = useState(1000);

    const handleSubmit = (price,emotion) => {
        console.log(price,emotion)
        setIsResult(true)
    }

    return (
        <div>
            <Form 
                handleSubmit={handleSubmit}
                emotion={emotion}
                price={price}
                setEmotion={setEmotion}
                setPrice={setPrice}
            />
            {
                isResult ?
                    <Result
                        emotion={emotion}
                        price={price}
                        setEmotion={setEmotion}
                        setPrice={setPrice}
                    />
                :
                    <div
                        className='py-24'
                    >
                        {/* resultが表示される前はお菓子とかおみくじの画像を標示したい */}
                    </div>
            }
        </div>
    )
}

export default Home