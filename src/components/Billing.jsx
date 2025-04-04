import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        className="w-[100%] h-[100%] relative z-[5]"
        alt="Billing Image"
      />
      <div className="w-[50%] h-[50%] absolute z-[5] white__gradient -left-1/2 top-0" />
      {/* <div className="w-[50%] h-[50%] absolute z-[5] white__gradient -left-1/2 top-0" /> */}
      {/* <div className="w-[50%] h-[50%] absolute z-[3] pink__gradient -left-1/2 bottom-0" /> */}
      <div className="w-[50%] h-[50%] absolute z-[3] pink__gradient -left-1/2 bottom-0" />
    </div>
    <div
      className={`${layout.sectionInfo} max-md:text-center max-md:items-center max-md-justify-center`}
    >
      <h2 className={styles.heading2}>
        Easily Control Your <br className="sm:block hidden" /> Billing &
        Invoicing
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        maiores eaque amet accusantium eum cupiditate reiciendis neque a unde
        non.
      </p>
      <div className="flex flex-wrap sm:mt-10 mt-5 gap-5">
        <img
          src={apple}
          className="w-[128px] h-[42px] object-contain"
          alt="Apple Store"
        />
        <img
          src={google}
          className="w-[128px] h-[42px] object-contain"
          alt="Play Store"
        />
      </div>
    </div>
  </section>
);

export default Billing;
