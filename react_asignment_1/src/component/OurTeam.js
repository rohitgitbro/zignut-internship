import aset55 from '../image/aset55.png';
import aset82 from '../image/aset 8 2.png';
import person1 from '../image/person 1.png';
import person2 from '../image/person 2.png';
import person3 from '../image/person 3.png';


const OurTeam = () => {
    return (
        <div id="ourTeam" className="relative w-full min-w-full h-fit py-4 flex flex-col items-center justify-between gap-8 mt-12 md:mt-36 mb-12 md:mb-28">
            <img
                className="absolute -top-16 sm:-top-20 md:-top-28 lg:-top-40 xl:-top-48 left-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem]"
                src={aset55}
                alt=""
            />
            <img
                className="absolute -bottom-28 sm:-bottom-44 md:-bottom-60 lg:-bottom-80 xl:-bottom-96 right-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem]"
                src={aset82}
                alt=""
            />

            <div>
                <div className="font-medium text-[48px] leading-[56.88px] bg-no-repeat bg-left-bottom w-fit">
                    Our Team
                </div>

                <div className="w-full flex justify-center item-center">
                    <div className="w-1/2 bg-gray-400 rounded h-2"></div>
                    <div className="w-1/2 h-px ml-1/2 mt-1 bg-gray-700 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-20 md:gap-24 lg:gap-32 xl:gap-36">
                <div className="flex flex-col items-center gap-2 sm:gap-8">
                    <img className="w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem]" src={person1} alt="Jessica D'suza" />
                    <h3 className="font-normal text-xs md:text-xl leading-[28.44px]">Jessica D'suza</h3>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-8">
                    <img className="w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem]" src={person2} alt="Johny Williams" />
                    <h3 className="font-normal text-xs md:text-xl leading-[28.44px]">Johny Williams</h3>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-8">
                    <img className="w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem]" src={person3} alt="Sanya R" />
                    <h3 className="font-normal text-xs md:text-xl leading-[28.44px]">Sanya R</h3>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
