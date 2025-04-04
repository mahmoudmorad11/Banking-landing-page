import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.paddingY} flex-col`}>
    {/* first div {the footer} */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10 sm:items-start items-center sm:text-left text-center max-sm:w-full">
        <img
          src={logo}
          alt="hoonback"
          className="w-[266px] h-[72px] object-contain "
        />
        <p className={`${styles.paragraph} mt-5 max-w-[310px]`}>
          A New Way To Make Payments Easy, Reliable, And Secure.
        </p>
      </div>
      <div className="flex flex-[1.5] w-full justify-between flex-wrap flex-row md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col flex-1 w-full ss:my-0 my-4 min-w-[150px] sm:items-start items-center sm:text-left text-center"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerLink.links.map((link, id) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    id === footerLink.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    {/* the second div {copyright info} */}
    <div className="flex justify-between items-center border-t-[1px] border-t-[#3f3e45] pt-6 md:flex-row flex-col">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2025 HooBank, All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 items-center justify-center gap-6">
        {socialMedia.map((item, i) => (
          <img
            key={item.id}
            src={item.icon}
            alt={item.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
