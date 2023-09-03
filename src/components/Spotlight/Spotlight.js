import Frime1 from '../images/Frame 113.png'
// import Frime2 from './Frame 113 (1).png'
// import Frime3 from './Frame 113 (2).png'
// import Frime4 from './Frame 113 (3).png'
// import Frime5 from './Frame 113 (4).png'
// import Frime6 from './Frame 113 (5).png'
// import Frime7 from './Frame 113 (6).png'
// import Frime8 from './Frame 113 (7).png'
// import Frime9 from './Frame 113 (8).png'
// import Frime10 from './Frame 113 (9).png'
// import Frime11 from './Frame 113 (10).png'
// import Frime12 from './Frame 113 (11).png'


export default function Spotlight() {
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[64px]">
          <div>
            <h2 className="text-[80px] text-[#F7FBFA] font-extrabold">Spotlight. </h2>
            <p className=" text-[24px] text-[#686A6C]">Projects you'll love</p>
          </div>
          <div className="flex">
            <button className="w-[97px] h-[40px] rounded-[40px] bg-[#F7FBFA]">1 days</button>
            <button className="w-[97px] h-[40px] rounded-[40px] text-[#686A6C]">7 days</button>
            <button className="w-[97px] h-[40px] rounded-[40px] text-[#686A6C]">30 days</button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={Frime1} alt="" />
            </div>
            <div>
              <div>
                <h3>The Currency</h3>
                <p><span>Buy now</span>12.29 ETH</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}