import '../Spotlight/Spotlight.css'
const UserCard = ({ image, title, titleSpan, AboutUser, id }) => {
    return (
        <label className='relative'>
            <input type="radio" name="Cards" className='InputRadio' />
            <div className="absolute top-6 right-6 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] shadow-lg shadow-black-500/50 bg-white ">
                <p>{id}</p>
            </div>
            <div key={id} className="chaced card flex justify-center items-center  flex-col cursor-pointer  bg-[#F1F4F4] mb-0 border-b-[1px]  border-b-[#d0d0d0] xl:max-w-[400px] xl:h-[400px] lg:max-w-[336px] lg:h-[352px] md:max-w-[256px] md:h-[208px] max-md:h-[258px]">
                <div className={`flex items-center justify-center w-[120px] h-[120px] rounded-[50%] max-sm:w-[100px] max-sm:h-[100px] ${id == 2 ? 'bg-[#FFA6D6]' : 'bg-[#B9A9FB]'} mb-[32px] `}>
                    <img src={image} alt="titleImg" className='max-sm:w-20' />
                </div>
                <h3 className="xl:text-[24px] lg:text-[20px] font-bold ">{AboutUser}</h3>
                <p><span className="xl:text-[16px] lg:text-[14] text-[#686A6C]">{titleSpan}</span>{title}</p>
            </div>
        </label>
    )
}

export default UserCard