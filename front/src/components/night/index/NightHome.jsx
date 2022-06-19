import React from 'react'
import { NightResult } from './NightResult'
import { NightForm } from './NightForm'

const NightHome = () => {
  const [isResult, setIsResult] = useState(false)

    const [emotion, setEmotion] = useState("");
    const [price, setPrice] = useState(1000);

    const handleSubmit = (price,emotion) => {
        console.log(price,emotion)
        setIsResult(true)
    }
    
  return (
    <div>
        <NightForm />
        <NightResult/>
    </div>
  )
}

export default NightHome