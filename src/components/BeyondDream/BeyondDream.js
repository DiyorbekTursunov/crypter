import mainImg from "../images/Frame 1323.jpg"
import mainIcon from "../images/icon.png"
import mainFrame from "../images/Frame 113.png"
const BeyondDream = () => {
    return (
        <div className='w-full bg-[#010101]'>
            <div className="max-w-[1520px] mx-auto xl:flex  md:flex max-sm:flex-col items-center justify-between px-3 max-sm:px-6 ">
                <div className="md:w-2/4 max-md:w-full ">
                    <div className="flex gap-[16px] max-md:pt-10">
                        <div className='lg:w-[208px] md:w-[170px]  h-[64px] bg-[#202025] flex justify-around items-center rounded-[12px] max-md:px-2'>
                            <img src={mainIcon} alt="" />
                            <a href="#" className="text-[#F7FBFA] lg:text-[18px] md:text-[16px] max-sm:text-[14px] font-bold">@randomdash</a>
                        </div>
                        <div className='bg-[#202025] w-32 flex  items-center justify-between p-3 rounded-[12px] max-md:px-2'>
                            <img src={mainFrame} alt="" className="rounded-lg w-[40px] h-[40px]" />
                            <a href="#" className="text-[#F7FBFA] lg:text-[18px] md:text-[16px] font-bold">Escape</a>
                        </div>
                    </div>
                    <div className="mt-[24px]">
                        <h2 className="xl:text-[90px] max-lg:text-6xl lg:text-5xl md:text-4xl max-sm:text-[48px] text-[#F7FBFA] font-extrabold leading-[83%]">Beyond the Dream.</h2>
                    </div>
                    <div className="mt-[112px] md:flex max-md:flex-col items-center lg:gap-16 md:gap-2">
                        <div className="flex flex-col gap-3">
                            <p className="text-[#A6AEAD] text-[18px]  font-bold">Buy now price</p>
                            <h2 className="xl:text-5xl lg:text-3xl md:text-3xl max-md:text-3xl text-[#F7FBFA] font-extrabold">8.00 ETH</h2>
                            <p className="text-[#A6AEAD] text-[18px] font-bold">$24,635.39</p>
                        </div>
                        <button type="button" className="lg:w-[224px] md:w-[152px] max-md:w-full h-[60px] max-sm:mt-5 bg-[#F7FBFA] text-[#202025] rounded-[4px] font-extrabold text-[16px] hover:opacity-80">MAKE OFFER</button>
                    </div>
                </div>
                <div className="max-md:w-full  flex items-center justify-center">
                    <img src={mainImg} alt="" className="xl:max-w-[792px] xl:h-[779px] lg:max-w-[592px] md:max-w-[432px] max-md:max-w-[432px] max-sm:max-w-[267px] max-sm:mt-[32px]" />
                </div>
            </div>
        </div>
    )
}

export default BeyondDream