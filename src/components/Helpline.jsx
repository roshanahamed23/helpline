import React from 'react'
import { useParams } from 'react-router-dom';
import { states } from '../constants/index.';
import Nav from './Nav';
import { FaPhone } from "react-icons/fa6";

const Helpline = () => {
    const {state} = useParams();
    const stateObject=JSON.parse(decodeURIComponent(state));

  return (
    <div>
        <Nav text={stateObject.state}/>
        <div>
            <div className='sm:px-12 px-6 sm:py-2 py-1 flex flex-row justify-between border-b border-gray-500 mt-6'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-2xl '>Police</h3>
                <p className='font-montserrat text-grey-500'>{stateObject.police}</p>
                </div>
                <div className='flex justify-center items-center text-2xl bg-red-500 p-4 rounded-full text-white' >
                <a href={`tel:${stateObject.police}`}>
                <FaPhone />
                </a>
                </div>
            </div>
            <div className='sm:px-12 px-6 sm:py-2 py-1 flex flex-row justify-between border-b border-gray-500 mt-6'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-2xl '>Fire</h3>
                <p className='font-montserrat text-grey-500'>{stateObject.fire}</p>
                </div>
                <div className='flex justify-center items-center text-2xl bg-red-500 p-4 rounded-full text-white' >
                <a href={`tel:${stateObject.fire}`}>
                <FaPhone />
                </a>
                </div>
            </div>

           <div className='sm:px-12 px-6 sm:py-2 py-1 flex flex-row justify-between border-b border-gray-500 mt-6'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-2xl '>Ambulance</h3>
                <p className='font-montserrat text-grey-500'>{stateObject.ambulance}</p>
                </div>
                <div className='flex justify-center items-center text-2xl bg-red-500 p-4 rounded-full text-white' >
                <a href={`tel:${stateObject.ambulance}`}>
                <FaPhone />
                </a>
                </div>
            </div>
            <div className='sm:px-12 px-6 sm:py-2 py-1 flex flex-row justify-between border-b border-gray-500 mt-6'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-2xl '>Women Helpline</h3>
                <p className='font-montserrat text-grey-500'>{stateObject.womenHelpline}</p>
                </div>
                <div className='flex justify-center items-center text-2xl bg-red-500 p-4 rounded-full text-white' >
                <a href={`tel:${stateObject.womenHelpline}`}>
                <FaPhone />
                </a>
                </div>
            </div>
            <div className='sm:px-12 px-6 sm:py-2 py-1 flex flex-row justify-between border-b border-gray-500 mt-6'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-2xl '>Child Line</h3>
                <p className='font-montserrat text-grey-500'>{stateObject.childHelpline}</p>
                </div>
                <div className='flex justify-center items-center text-2xl bg-red-500 p-4 rounded-full text-white' >
                <a href={`tel:${stateObject.childHelpline}`}>
                <FaPhone />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Helpline