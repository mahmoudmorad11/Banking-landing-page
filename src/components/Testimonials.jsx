import { feedback } from "../constants";
import styles from "../style.js";
import FeedbackCard from "./FeedbackCards.jsx";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
  >
    {/* <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
    {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient overflow-hidden" /> */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm-mb-16 mb:6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People Are <br className="sm:block hidden" /> Saying About Us
      </h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit veniam,
        ullam incidunt eos assumenda perspiciatis.
      </p>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1] w-full">
      {feedback.map((card, i) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default Testimonials;
