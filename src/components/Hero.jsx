import styles from "../style.js";
import GetStarted from "./GetStarted.jsx";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div class={`${styles.flexStart} flex-1 flex-col`}>
      <div
        className={`flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 py-[6px] px-4`}
      >
        <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount{" "}
          <span className="text-white">One Month</span> Account
        </p>
      </div>
      {/* <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Payment Method.
      </h1> */}
      {/* ------------ */}

      <div className="flex flex-row justify-between items-center w-full xs:text-left text-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[60px] mt-4">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[54px] text-white ss:leading-[100.8px] leading-[75px] w-full xs:text-left text-center">
        Payment Method.
      </h1>

      {/* ------------ */}
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 xs:text-left text-center`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum
        eveniet sapiente neque veritatis rerum, aspernatur ducim Facilis qui
        inventore
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex relative md:my-0 my-10`}>
      <img
        src={robot}
        alt="robotic arm - billing"
        className="w-[100%] h-[100%] h-auto relative z-[5]"
      />
      <div className="absolute w-[40%] h-[35%] z-[0] pink__gradient top-0"></div>
      <div className="absolute w-[80%] h-[80%] z-[1] white__gradient bottom-40 rounded-full"></div>
      <div className="absolute w-[50%] h-[50%] z-[0] blue__gradient bottom-20 right-20"></div>
    </div>
    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />
    </div>
  </section>
);
export default Hero;
