import ase6 from '../image/ase6.png';
import engagementIcon from '../image/engagement icon.png';
import communicationIcon from '../image/communication icon.png';

const AboutUs = () => {
  return (
    <div id="aboutUs" className="relative w-fit h-fit flex flex-col lg:flex-row py-2 sm:py-4 sm:px-12 px-4 sm:pt-0 pt-12">
      <div className="lg:w-[50%] lg:h-[475px] flex items-start md:mt-12 justify-center sm:p-12 p-4">
        <img src={ase6} alt="" />
      </div>
      <div className="lg:w-[50%] h-[50%] md:mt-16 flex flex-col gap-4">
        <div>
          <div className="font-medium text-2xl sm:text-4xl leading-[28px] sm:leading-[56px] w-fit">
            <span>ABOUT US</span>
            <div className="w-full flex justify-center item-center">
              <div className="w-full bg-gray-400 rounded h-2"></div>
              <div className="w-1/2 h-px ml-1/2 mt-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <div className="font-normal text-base sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <div className="size-11">
              <img src={engagementIcon} alt="Engagement Icon" />
            </div>
            <div className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">Engagement</div>
            <div className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. <span>READ MORE</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="size-11">
              <img src={communicationIcon} alt="Communication Icon" />
            </div>
            <div className="font-medium text-lg sm:text-2xl leading-5 sm:leading-7">Communications</div>
            <div className="font-normal text-sm sm:text-lg leading-5 sm:leading-7 text-[#2C2C2C]">
              We are award-winning leaders in communications and campaign management. <span>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;