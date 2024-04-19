import React from 'react'
import { useRouter } from 'next/navigation'



const ButtonRouter = ({link, name}) => {
    const router = useRouter()

function Redireccion(link){
    router.push(link)
}
  return (
    <div className='bg-tres text-white py-4 cursor-pointer px-12 rounded-full' onClick={()=>Redireccion(link)}>{name}</div>
  )
}

export default ButtonRouter