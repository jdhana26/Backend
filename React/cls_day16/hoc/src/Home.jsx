import React from 'react'
import Bhavankesari from './Bhavankesari'
import withText from './withText';
import Button from './Button';

 const Janayagan = withText(Button);

const Home = () => {


   
  return (
    <>
    <div>
      <Button text="Bhavan Kesari"/>
        <Janayagan text="Jananyagan"/>



    </div>
    </>
  )
}

export default Home
