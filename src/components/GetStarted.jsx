import styles from "../style.js";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`bg-blue-gradient ${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`w-[100%] h-[100%] bg-primary rounded-full ${styles.flexCenter}`}
      >
        <div className={`${styles.flexStart} flex-col`}>
          <p className="font-poppins font-medium text-[19px] flex justify-between flex-1 items-center gap-[10px]">
            <span className="text-gradient">Get</span>
            <img
              src={arrowUp}
              alt="Arrow Up"
              className="w-[23px] h-[23px] object-contain"
            />
          </p>
          <p className="font-poppins font-medium text-[19px] leading-[32px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
