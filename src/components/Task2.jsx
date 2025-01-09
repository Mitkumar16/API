import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function Task2() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = `https://dummyjson.com/users`;

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setDatas(result.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header */}
            <div className="w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 bg-gradient-to-r from-gray-800 via-gray-700 to-black shadow-lg">
                Task 2
            </div>

            {/* Content */}
            <div className="container mx-auto px-5">
                {loading ? (
                    <div className="flex items-center justify-center h-[200px]">
                        <Loader />
                    </div>
                ) : datas.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-black">
                                    <th className="py-3 px-4 border border-gray-700">SR NO</th>
                                    <th className="py-3 px-4 border border-gray-700">FULL NAME</th>
                                    <th className="py-3 px-4 border border-gray-700">EMAIL</th>
                                    <th className="py-3 px-4 border border-gray-700">MOBILE</th>
                                    <th className="py-3 px-4 border border-gray-700">DOB</th>
                                    <th className="py-3 px-4 border border-gray-700">UNIVERSITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map((data, index) => (
                                    <tr
                                        key={index}
                                        className={`${
                                            index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
                                        } hover:bg-gray-600 transition-colors`}
                                    >
                                        <td className="py-3 px-4 text-center">{index + 1}</td>
                                        <td className="py-3 px-4">{`${data.firstName} ${data.lastName}`}</td>
                                        <td className="py-3 px-4">{data.email}</td>
                                        <td className="py-3 px-4">{data.phone}</td>
                                        <td className="py-3 px-4">{data.birthDate}</td>
                                        <td className="py-3 px-4">{data.university}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-400">
                        No data available. Please try again later.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Task2;
