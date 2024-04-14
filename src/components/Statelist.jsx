import React from 'react';
import { states } from '../constants/index.';
import { Link } from 'react-router-dom';

const Statelist = () => {

  return (
    <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {states.map((state)=>(
        <Link to={`/${encodeURIComponent(JSON.stringify(state))}`}>
        <div key={state.state} className='rounded-md border border-gray-800 cursor-pointer hover:scale-110 transition duration-300 ease-in-out transform'>
            <h3 className=' text-black bg-gray-400 p-2 font-bold text-xl'>State</h3>
            <div className='px-10 py-5
            font-montserrat text-red-500 text-xl font-semibold '>
                {state.state}
            </div>
        </div>
        </Link>
        ))
        }
    </div>
  )
}

export default Statelist;