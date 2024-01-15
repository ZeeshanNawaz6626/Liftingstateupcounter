import React, { useState } from 'react'
import Head from './Head'
import Bodycomp from './Bodycomp'

function Maincom() {
    const [state,setState] =useState(1)
    const Increment =(state)=>{
        //   console.log("parent inc");
                state++
        console.log(state);
                setState(state)
              }
    const Dcrement =(state)=>{
//   console.log("parent dec");
        state--
// console.log(lift);
        setState(state)
      }
  return (
    <>
  
{state}
<Head data={state}/>
<br />
<Bodycomp data={state} Decrement={Dcrement} Increment={Increment} />

    </>
  )
}

export default Maincom