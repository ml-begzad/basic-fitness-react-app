import React from 'react'

type prop ={
    children : React.ReactNode;
}
const Htext = ({children} : prop) => {
  return (
    <h1 className=' bassis-3/5 font-bold text-3xl font-montserrat'>{children}</h1>
  )
}

export default Htext