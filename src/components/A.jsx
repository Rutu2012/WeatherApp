import React,{memo} from 'react'

const A = () => {
    console.log('A comp');
  return (
    <div>
      
    </div>
  )
}

export default React.memo(A);

