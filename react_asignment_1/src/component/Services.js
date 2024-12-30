import consultationVector from '../image/Consultation vector.png';
import trainingVector from '../image/Training and vector.png';
import aset55 from '../image/aset55.png';
import aset82 from '../image/aset 8 2.png';


import engagementManagement from '../image/engagement managemen.png';
import communicationVector from '../image/communication  vecor.png';
import facilitationVector from '../image/facilation vector.png';
import aset9 from '../image/aset9.png';
import aset77 from '../image/aset77.png';

const Services = () => {
  return (
    <div id ="services" className="relative w-full min-w-fit h-fit py-4 flex flex-col items-center justify-between gap-16 md:gap-8">
      <img
        className="absolute -top-0 sm:-top-4 md:-top-16 left-0 -z-50 w-[10rem] sm:w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[20rem] transition-all duration-300 ease-in-out"
        src={aset55}
        alt=""
      />
      <img
        className="absolute right-0 top-[50rem] sm:top-[46rem] md:top-[25rem] lg:top-[30rem] xl:top-[32rem] -z-50 w-[5rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={aset9}
        alt=""
      />
      <img
        className="absolute left-0 top-[80rem] sm:top-[75rem] md:top-[40rem] lg:top-[50rem] xl:top-[60rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={aset77}
        alt=""
      />
      <img
        className="absolute right-0 top-[108rem] sm:top-[100rem] md:top-[60rem] lg:top-[60rem] xl:top-[85rem] -z-50 w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[12rem] xl:w-[15rem] transition-all duration-300 ease-in-out"
        src={aset82}
        alt=""
      />
      <div>
        <div className="font-medium text-[48px] leading-[56.88px] bg-no-repeat bg-left-bottom w-fit">Services</div>
        <div className="w-full flex justify-center item-center">
          <div className="w-2/5 bg-gray-400 rounded h-2"></div>
          <div className="w-1/2 h-px ml-1/2 mt-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Engagement</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={engagementManagement} alt="Engagement" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={communicationVector} alt="Communication" />
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-left text-center">Communications</div>
          <div className="font-normal text-base leading-6 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Facilitation</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={facilitationVector} alt="Facilitation" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={consultationVector} alt="Consultation" />
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-left text-center">Consultation and Research</div>
          <div className="font-normal text-base leading-6 md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-between text-[#2C2C2C]">
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 flex-col md:w-[430px] lg:w-[480px] xl:w-[529px] h-fit">
          <div className="font-medium text-3xl lg:text-4xl xl:text-5xl leading-[25px] lg:leading-[50px] md:text-right text-center">Training & Mentoring</div>
          <div className="font-normal text-base leading-6 md:text-right text-center">
            We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high-quality approach. We deliver value, creativity, results, and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.
          </div>
        </div>
        <div className="flex items-center xl:w-[450px] lg:w-[350px] md:w-[250px] w-[300px]">
          <img src={trainingVector} alt="Training & Mentoring" />
        </div>
      </div>
    </div>
  );
};

export default Services;


