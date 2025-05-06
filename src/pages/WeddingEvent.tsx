import { WeddingEventList } from '../constant/constant'
import { FaMapLocationDot } from 'react-icons/fa6'

const WeddingEvent = () => {
  return (
    <div className='flex flex-col items-center px-4 md:px-20 lg:px-32 justify-center min-h-screen'>
      <div className='text-center flex flex-col gap-5 items-center'>
        <h1 className='text-3xl font-medium text-balance'>Wedding Event</h1>
        <p>Series Event to be Held</p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center mt-20 gap-10'>
        <img src="/assets/wedding-event/akad.jpg" className='rounded-3xl lg:rounded-l-3xl mb-10 lg:mb-0 w-full max-w-md lg:max-w-[545px]' width={545} alt="img" />
        <div className='flex flex-col gap-10'>
          {WeddingEventList.map((item, i) => (
            <div key={i} className='w-full max-w-4xl bg-pink-800 p-6 rounded-2xl grid place-items-center'>
              {i % 2 === 0 ? (
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <h1 className='text-3xl md:text-4xl  lg:text-6xl text-white bg-pink-800 py-2 px-4 rounded-md text-center'>
                    {item.title}
                  </h1>
                  <div className='text-lg text-center bg-white p-5 rounded-3xl flex flex-col items-center gap-2'>
                    <h1 className='text-xl md:text-2xl'>{item.day}</h1>
                    <div className='w-1/2 border border-black' />
                    <h2 className='text-2xl md:text-3xl'>{item.tanggal}</h2>
                    <div className='w-1/2 border border-black' />
                    <h2 className='text-xl md:text-2xl'>{item.waktu}</h2>
                    <p className='text-sm md:text-base font-medium'>{item.tempat}</p>
                    <p className='max-w-md text-sm md:text-base'>{item.alamat}</p>
                    <a href={item.map} className='flex items-center gap-2 text-pink-700 mt-2' target='_blank'>
                      <FaMapLocationDot />
                      Open Map
                    </a>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <div className='text-lg text-center md:text-center bg-white p-5 rounded-3xl flex flex-col items-center  gap-2'>
                    <h1 className='text-xl md:text-2xl'>{item.day}</h1>
                    <div className='w-1/2 border border-black' />
                    <h2 className='text-2xl md:text-3x'>{item.tanggal}</h2>
                    <div className='w-1/2 border border-black' />
                    <h2 className='text-xl md:text-2xll'>{item.waktu}</h2>
                    <p className='text-sm md:text-base font-medium'>{item.tempat}</p>
                    <p className='max-w-md text-sm md:text-base'>{item.alamat}</p>
                    <a href={item.map} className='flex items-center gap-2 text-pink-700 mt-2' target='_blank' rel='noopener noreferrer'>
                      <FaMapLocationDot />
                      Open Map
                    </a>
                  </div>
                  <h1 className='text-3xl md:text-4xl lg:text-6xl text-white bg-pink-800 py-2 px-4 rounded-md text-center  origin-center'>
                    {item.title}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeddingEvent