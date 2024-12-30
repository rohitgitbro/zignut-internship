import aset99 from '../image/aset99.png';
import layer19 from '../image/layer 19.png';
import layer20 from '../image/layer 20.png';
import brigitteLogo from '../image/1280px-Brigitte-Logo.png';
import layer22 from '../image/Layer 22.png';
import bhpLogo from '../image/BHP_2017_logo.png';
import layer21 from '../image/Layer 21.png';
import layer23 from '../image/Layer 23.png';
import layer24 from '../image/Layer 24.png';
import melbourneWaterLogo from '../image/MelbourneWaterLogo-1024x282.png';

const OurClients = () => {
  return (
    <div id="ourClients" className="relative flex flex-col items-center gap-4 md:gap-16 px-8 w-full">
      <img
        className="absolute -top-36 left-0 -z-50 w-[4rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] xl:w-[8rem]"
        src={aset99}
        alt=""
      />

      <div>
        <div className="font-medium text-[48px] leading-[56.88px] bg-no-repeat bg-left-bottom w-fit">
          Our Client
        </div>

        <div className="w-full flex justify-center item-center">
          <div className="w-full bg-gray-400 rounded h-2"></div>
          <div className="w-1/2 h-px ml-1/2 mt-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-6 md:gap-12">
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer19}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer20}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={brigitteLogo}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer22}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={bhpLogo}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer21}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer23}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={layer24}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[5rem] sm:w-[6rem] md:w-[8rem] lg:w-[10rem] xl:w-[14rem]"
            src={melbourneWaterLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
