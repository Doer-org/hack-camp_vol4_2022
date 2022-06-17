import React from 'react'
import { Result } from './Result'
import { Form } from './Form'
import { SnackButton } from '../layouts/SnackButton'

const Home = () => {
  return (
    <div>
        <SnackButton />
        <Form />
        <Result/>
    </div>
  )
}

export default Home