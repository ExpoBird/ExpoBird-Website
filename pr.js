import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
const [count, setCount] = useState(0);
const [item, setItem] = useState("web");

useEffect(()=>{
    console.log(`${item}`)
})

const pr = () => {
  return (
    <Fragment>
    <div>
        Current {item}
    </div>
    </Fragment>
  )
}

export default pr