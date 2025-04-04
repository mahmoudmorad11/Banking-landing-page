import { LuHeading2 } from "react-icons/lu";
import styles from "../style.js";
import Button from "./Button.jsx";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-20 max-sm:py-10`}
  >
    <div className="flex flex-1 flex-col sm:text-left text-center sm:items-start items-center ">
      <h2 className={`${styles.heading2}`}>Let's Try Our Service Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fugit
        maiores officiis corrupti repellendus sapiente.
      </p>
    </div>
    <div className="">
      <Button value="Get Started" styles="rounded-[10px]" />
    </div>
  </section>
);
export default CTA;
