import { stats } from "../constants";
import styles from "../style.js";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        className="flex flex-1 justify-start flex-row items-center m-3"
        key={stat.id}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] uppercase leading-[43px] ml-3 text-gradient">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);
export default Stats;
