import React,{useContext} from 'react'
import {Data} from '../../App';

const d = () => {
    const value = useContext(Data)
    console.log(value)

  return (
    <div>
      
    </div>
  )
}

export default d
