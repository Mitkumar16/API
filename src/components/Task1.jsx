import React from 'react'
import { movieData } from '../data/movieData'

function Task1() {
    return (
        <div className='w-full'>
            <div className='w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 text-white bg-black'>Task 1</div>

            <div className='w-[95%] sm:w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  space-x-5 space-y-5'>
                {
                    movieData.map((movie, index) => (
                        <div 
                        className=' bg-gray-200 px-5 '
                        key={index}>
                        <p className={`${movie.status == "now showing"? 'bg-blue-700':"bg-green-500"} w-fit uppercase px-2 m-2 text-white rounded-md`}>{movie.status}</p>

                            <img src={movie.image} alt={`${movie.name}`} />
                            <p className='text-xl font-semibold my-5'>{movie.name}</p>
                            <p className='text-[#333] py-3 border-b border-gray-400'>{movie.info}</p>
                            {
                                movie.actor.map((actor, index) => (
                                    <div>
                                        <p className='text-[#333] py-3 border-b border-gray-400'>{actor}</p>
                                    </div>
                                ))
                            }
                            <div className='py-3 text-slate-400'>{movie.action}</div>
                        </div>

                    ))

                }
            </div>
        </div>
    )
}

export default Task1