import images from "../images/images"
import data from '../DB/data'
import UserCard from "../userCard/userCard"
const HotNFT = () => {
    return (
        <div className='max-w-[1520px] mx-auto mt-[128px] md:flex max-md:flex-col justify-center items-center'>
            <div className="md:w-[640px] max-md:w-full px-10">
                <div className="flex items-start md:mb-[576px] max-md:mb-[40px] max-sm:flex-col max-sm:mt-6" >
                    <h2 className="xl:text-[80] lg:text-6xl md:text-5xl max-md:text-4xl font-extrabold leading-[83%]">Hot NFT <br /> artists of the <br /> month.</h2>
                    <button className=" rounded-[50%] shadow-lg shadow-black-500/50 w-[80px] h-[80px] flex items-center justify-center  hover:bg-slate-100">
                        <img src={images[6]} alt="" />
                    </button>
                </div>
                <div className="text-[#686A6C] max-w-[500px]">
                    <p className="">We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.</p>
                </div>
            </div>
            <div className="md:max-xl:w-2/4 max-md:max-xl:w-full">
                <div className="grid grid-cols-2 ">
                    {data.map((e)=>{
                        return(
                            <UserCard image={e.Image} title={e.title} titleSpan={e.titleSpan}  AboutUser={e.AboutUser} id={e.id} key={e.id}/>
                        )
                    })}
                </div>
                <div className=" h-[160px] bg-[#F1F4F4] flex justify-center items-center">
                    <button className="md:w-[576px] md:h-[64px] max-sm:w-[376px] sm:w-[376px] max-sm:h-[74px] sm:h-[74px] mx-10 bg-[#202025] text-[#F7FBFA] font-extrabold rounded-[4px] hover:opacity-70">EXPLORE MORE</button>
                </div>
            </div>
        </div>
    )
}

export default HotNFT