import { features } from "../constants/index";
import styles, { layout } from "../style.js";
import Button from "./Button.jsx";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`feature-card p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-0" : "mb-6"
    } flex flex-row`}
  >
    <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex justify-center items-center ">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-Poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div
      className={`${layout.sectionInfo} max-md:justify-center max-md:items-center max-md:text-center `}
    >
      <h2 className={styles.heading2}>
        You do the business,
        <br className="sm:block hidden" />
        we'll handle the money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        quasi consectetur saepe ducimus explicabo numquam! Commodi magni quae
        soluta explicabo?
      </p>
      <Button styles="mt-10" value="Get Started" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, i) => (
        <FeatureCard key={feature.id} index={i} {...feature} />
      ))}
    </div>
  </section>
);
export default Business;
