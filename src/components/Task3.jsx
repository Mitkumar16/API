import React, { useEffect, useState } from 'react'
import Loader from './Loader';

function Task3() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false)


  const url = "https://inshorts.vercel.app/news/top";

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const result = await response.json();
      setDatas(result.data.articles)
      console.log(result.data.articles);

    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchData();
  }, [])

  console.log(datas)


  return (

    <div className='w-full '>
      <div className='w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 text-white bg-black'>Task 3</div>

      {
        loading ? (<Loader />) :
          
            datas.length === 0 ? (<div className='text-2xl font-bold text-center'>No Data Found</div>) : (
              <div className='w-[95%] sm:w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  space-x-5 space-y-5'>
                {
                  datas.map((news, index) => (
                    <div
                      className=' bg-gray-200 px-5 '
                      key={index}>
                      <div className=''>
                        <p className=" flex gap-7 items-center m-2 ">
                          {
                            news.categoryNames.map((category, index) => (
                              <div key={index}>
                                <p className='bg-green-600  text-white px-2 rounded-md'>{category}</p>
                              </div>
                            ))
                          }
                        </p>

                      </div>
                      <img src={news.imageUrl}
                        className='max-h-[300px] bg-contain'
                        alt={`${news.name}`} />
                      <p className='text-xl font-semibold my-5'>{news.title}</p>
                      <p className='text-[#333] py-3 border-b border-gray-400'>{news.content}</p>

                      <div className='py-3 text-slate-400'>Auther Name : {news.authorName}</div>
                    </div>

                  ))

                }
              </div>
            )
          }

      
    </div>
  )
}


export default Task3