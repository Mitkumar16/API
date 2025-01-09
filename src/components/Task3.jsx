import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function Task3() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://inshorts.vercel.app/news/top";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setDatas(result.data.articles || []); // Adjusted to fetch the correct array
      console.log(result.data.articles)
    } catch (error) {
      console.error("Error fetching news:", error);
      setDatas([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <div className='w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 text-white bg-black'>
        Task 3
      </div>
      {loading ? (
        <Loader />
      ) : datas.length === 0 ? (
        <div className='text-2xl font-bold text-center'>No Data Found</div>
      ) : (
        <div className='w-[95%] sm:w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {datas.map((news, index) => (
            <div
              className='bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              key={index}
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className='w-full h-64 object-cover'
              />
              <div className='p-5'>
                <h2 className='text-xl font-bold mb-3'>{news.title}</h2>
                <p className='text-gray-300 text-sm mb-4'>
                  {news.content?.length > 120
                    ? `${news.content.substring(0, 120)}...`
                    : news.content}
                </p>
                <p className='text-gray-400 text-sm'>
                  Author: {news.author || 'Unknown'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Task3;
