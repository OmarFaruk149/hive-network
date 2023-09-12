import React, {useState} from 'react'
import Login from './Login';
export default function SignUp() {
  const [open,setOpen]=useState(false);

const isClick = ()=>{
    return(
       "Hesslooajsdlfkjak;sdjfk;"

    )
}

  return (
    <div>

      <button onClick={isClick} className='flex justify-center border-0 rounded-lg  bg-blue-500 bg-opacity-25 hover:bg-opacity-40 mx-auto p-3  text-white hover:green-600'>Create account</button>

     </div>
  )
}
