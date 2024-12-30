import ase3 from '../image/ase3.png'
import ase4 from '../image/ase4.png'
import ase5 from '../image/ase5.png'
import boy from '../image/boy.png';


const Home = () => {
    return (
        <div className="relative w-full min-h-fit h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] max-h-[850px] mb-8">
            <img className="absolute -bottom-16 left-0 -z-40 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out" src={ase3} alt="" />
            <img className="absolute -bottom-16 right-0 -z-50 w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[15rem] xl:w-[18rem] transition-all duration-300 ease-in-out" src={ase4} alt="" />
            <img className="absolute -bottom-16 left-0 -z-50" src={ase5} alt="" />
            <img className="absolute -bottom-16 left-8 sm:left-16 md:left-20 lg:left-28 xl:left-36 -z-20 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[41rem] transition-all duration-300 ease-in-out" src={boy} alt="" />
            <div className="flex flex-col justify-between gap-[15px] mt-[5%] items-center px-12 sm:ml-[30%] md:ml-[50%] mr-[2rem] transition-all duration-1000 ease-in-out">
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:leading-[66px] leading-[33px] font-medium">
                    Mendleson Communication and Engagement
                </div>
                <div className="font-normal text-lg leading-7 text-[#2C2C2C]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus porro voluptatum ut iusto animi nobis perspiciatis magni non.
                </div>
            </div>
        </div>
    );
};

export default Home;
