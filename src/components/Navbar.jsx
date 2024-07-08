import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [manuToggle, setManuToggle] = useState(false)
    return (
        <div className='w-full bg-black'>
            <div className='w-full sm:w-10/12 h-16  px-4 sm:px-8 text-white mx-auto flex items-center justify-between'>
                <div className='text-2xl font-bold'>
                    <Link to={'/'}>Assignment</Link>
                </div>
                <div className='sm:flex items-center gap-5 hidden'>
                    <div>
                        <NavLink
                            className='text-xl font-bold'
                            to={'/task1'}>Task 1</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className='text-xl font-bold'
                            to={'/task2'}>Task 2</NavLink>
                    </div>
                    <div>
                        <NavLink
                            className='text-xl font-bold'
                            to={'/task3'}>Task 3</NavLink>
                    </div>

                </div>
                <div className=' block sm:hidden '>
                    <i
                        onClick={() => setManuToggle(!manuToggle)}
                        className="ri-bar-chart-horizontal-fill text-white border p-1 text-xl hover:text-yellow-200 hover:border-yellow-200"></i>
                </div>


            </div>
            {manuToggle &&

                    <div className='w-full sm:hidden text-white py-8 flex flex-col items-center justify-center gap-3 transition-all duration-300'>
                        <div>
                        <Link
                        onClick={() => setManuToggle(false)}
                            className='text-xl font-bold'
                            to={'/task1'}>Task 1</Link>
                    </div>
                    <div>
                        <Link
                        onClick={() => setManuToggle(false)}
                            className='text-xl font-bold'
                            to={'/task2'}>Task 2</Link>
                    </div>
                    <div>
                        <Link
                        onClick={() => setManuToggle(false)}
                            className='text-xl font-bold'
                            to={'/task3'}>Task 3</Link>
                    </div>
                    </div>


            }
        </div>
    )
}

export default Navbar