import images from '../images/images'
const CuratedArtwork = () => {
  return (
    <div className="mt-[48px] max-md:flex justify-center max-md:mt-24">
      <div className='md:flex max-md:flex max-md:flex-col items-start justify-between '>
        <div className='flex items-start max-md:flex-col md:mb-0 sm:mb-[32px] max-sm:mb-[32px] pr-3'>
          <h1 className='xl:text-[104px] lg:text-[80px] max-md:text-[64px] md:text-[54px] font-extrabold leading-[83%]'>Curated <br /> Artwork.</h1>
          <button className='bg-bntBg rounded-[48px]  p-5 flex items-center justify-center mt-[8px] hover:opacity-70'>
            <img src={images[3]} alt="" className='xl:w-[152px] max-lg:max-w-[97.333px] ' />
          </button>
        </div>
        <div className='lg:w-[640px] md:w-[400px] sm:w-[400px]'>
          <p className=' mb-[76px] text-[20px] text-[#686A6C]'>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.</p>
          <div className='flex gap-[20px] items-center'>
            <p className='font-extrabold'>start your search</p>
            <img src={images[4]} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CuratedArtwork