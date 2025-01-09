import React from 'react';
import { movieData } from '../data/movieData';

function Task1() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Header */}
            <div className="w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 bg-gradient-to-r from-gray-800 via-gray-700 to-black shadow-lg">
                Task 1
            </div>

            {/* Movie Grid */}
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-5">
                {movieData.map((movie) => (
                    <div
                        className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-5 relative"
                        key={movie.id}
                    >
                        {/* Status Badge */}
                        <p
                            className={`absolute top-3 left-3 text-sm px-3 py-1 rounded-full ${
                                movie.status === 'now showing' ? 'bg-blue-600' : 'bg-green-500'
                            }`}
                        >
                            {movie.status}
                        </p>

                        {/* Movie Poster */}
                        <img
                            src={movie.image}
                            alt={`Poster of ${movie.name}`}
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        {/* Movie Details */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-3">{movie.name}</h2>
                            <p className="text-gray-400 text-sm mb-5">{movie.info}</p>

                            {/* Actors */}
                            <div className="text-gray-300 mb-5">
                                <h3 className="text-lg font-semibold underline mb-2">Actors</h3>
                                {movie.actor?.length > 0 ? (
                                    movie.actor.map((actor) => (
                                        <p className="text-sm" key={actor}>
                                            {actor}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-sm italic text-gray-500">No actors listed.</p>
                                )}
                            </div>
                        </div>

                        {/* Action */}
                        <div className="text-center">
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                                {movie.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task1;
