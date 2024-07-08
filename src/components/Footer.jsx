import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-black mt-16'>
        <div className='w-10/12 mx-auto h-[100px] flex flex-row text-xl font-semibold gap-8 items-center justify-center text-white'>
            <Link to={'/task1'}>Task 1</Link>
            <Link to={'/task2'}>Task 2</Link>
            <Link to={'/task3'}>Task 3</Link>
        </div>
    </div>
  )
}

export default Footer