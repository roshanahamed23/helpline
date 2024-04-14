import React from 'react'

const Nav = ({text}) => {
  return (
    <header className='w-full h-20px border-red-400 bg-gray-400 sm:px-16 px-8 md:py-[20px] py-[10px]'>
        <nav>
            {text ? <h3 className='text-2xl font-palanquin font-bold '>{text}</h3> : <h3 className='text-2xl font-palanquin font-bold '>States 
            <span className='text-red-500'> Helpline </span>
            Number</h3>}
        </nav>
    </header>
  )
}

export default Nav