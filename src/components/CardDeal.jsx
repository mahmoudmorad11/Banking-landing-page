import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2
        className={`${styles.heading2} max-md:text-center max-md:justify-center max-md:items-center`}
      >
        Find a Better Card Deal in <br className="sm:block hidden" /> few easy
        steps
      </h2>
      <p
        className={`${styles.paragraph} mt-10 max-w-[470px] sm:text-left text-center`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        deleniti. Alias veritatis pariatur atque corrupti tenetur quam illo quos
        nemo!
      </p>
      <Button
        value="Get Started"
        styles="mt-10 rounded-[10px] sm:mx-[0px] mx-auto"
      />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="Cards"
        className="object-contain w-[100%] h-[100%]"
      />
    </div>
  </section>
);
export default CardDeal;
