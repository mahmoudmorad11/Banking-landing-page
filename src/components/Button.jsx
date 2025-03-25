const Button = ({ styles, value }) => (
  <button
    type="button"
    className={`bg-blue-gradient py-4 px-6 outline-none font-medium font-poppins ${styles} text-primary text-[18px]`}
  >
    {value}
  </button>
);
export default Button;
