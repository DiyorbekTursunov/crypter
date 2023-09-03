import images from "../images/images"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
const MainHeader = () => {
    register();
    return (
        <div className="mt-[48px] flex">
            <div className="bg-headerColor w-full">
                <div className="max-w-[1600px] mx-auto md:flex max-md:flex-col justify-between ">
                    <img src={images[5]} alt="" className='md:w-2/4 max-md:w-full max-md:mb-12' />
                    <div className="md:w-2/4 max-md:w-full flex flex-col justify-between items-center xl:py-20 lg:py-20 md:py-14 max-md:pb-14 px-2">
                        <div className="flex items-center  gap-[40px] justify-evenly shadow-2xl max-w-[640px] px-5 h-[92px] rounded-[12px] bg-white max-md:mb-12">
                            <div className="card">
                                <p className="font-bold text-[#686A6C] sm:text-[16px] max-sm:text-[14px]">Collection</p>
                                <div className="flex items-center gap-[12px]">
                                    <img src={images[4]} alt="" />
                                    <h3 className="sm:text-[24px] max-sm:text-[16px] font-bold">Escape II</h3>
                                </div>
                            </div>
                            <div className="card">
                                <p className="font-bold text-[#686A6C] sm:text-[16px] max-sm:text-[14px]">Buy now</p>
                                <div className="flex items-center gap-[12px]">
                                    <img src={images[4]} alt="" />
                                    <h3 className="sm:text-[24px] max-sm:text-[16px] font-bold">10.00 ETH</h3>
                                </div>
                            </div>
                            <div className="card xl:block lg:hidden max-lg:hidden">
                                <p className="font-bold text-[#686A6C] ">Reserve</p>
                                <div className="flex items-center gap-[12px]">
                                    <img src={images[4]} alt="" />
                                    <h3 className="text-[24px] font-bold">2.38 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="xl:text-[80px] lg:text-[70px] md:text-[40px] max-md:text-[40px] text-[#202025] font-extrabold leading-[83%] mb-[40px] ">The creator <br /> network.</h2>
                            <div className="flex gap-6 max-md:flex-col">
                                <button className="xl:w-[244px] xl:h-[60px] lg:w-[200px] lg:h-[50px] md:w-[160px] md:h-[40px] max-sm:h-[40px] border-[#202025] border-[2px] rounded-[4px] hover:opacity-80">View NFT <img src="" alt="" /></button>
                                <button className="xl:w-[244px] xl:h-[60px] lg:w-[200px] lg:h-[50px] md:w-[160px] md:h-[40px] max-sm:h-[40px] full rounded-[4px] bg-[#202025] text-[#F7FBFA] hover:opacity-80">place a bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader