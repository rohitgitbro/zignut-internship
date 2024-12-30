import ourProject1 from '../image/Our Project_ 1 img.png';
import ourProject2 from '../image/Our Project_ 2 img.png';
import ourProject3 from '../image/Our Project_ 3 img.png';

const OurProject = () => {
    return (
        <div className="relative w-full h-fit flex flex-col gap-8 items-center mb-28">
            <div>
                <div className="font-medium text-[48px] leading-[56.88px] bg-no-repeat bg-left-bottom w-fit">
                    Our Project
                </div>

                <div className="w-full flex justify-center item-center">
                    <div className="w-full bg-gray-400 rounded h-2"></div>
                    <div className="w-1/2 h-px ml-1/2 mt-1 bg-gray-700 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-wrap justify-around gap-4">
                <div>
                    <img
                        className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]"
                        src={ourProject1}
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <img
                            className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]"
                            src={ourProject2}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]"
                            src={ourProject3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProject;
