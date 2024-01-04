import React, { useEffect, useState } from "react";
import hero1 from "../../assets/images/svgs/neoFinityHero1.svg";
import hero2 from "../../assets/images/svgs/nroFinityHero2.svg";
import RBIlogo from "../../assets/images/svgs/RBIlogo.svg";
import styles from "../../styles";

function Hero() {
  const [showSecondary, setShowSecondary] = useState(false);
  useEffect(() => {
    const ab = document.getElementsByTagName("body");

    ab[0].style.display = "sticky";
    document.addEventListener(
      "scroll",
      () => {
        const scrollPosY = window.scrollY;
        scrollPosY > 70 ? setShowSecondary(true) : setShowSecondary(false);
      },
      { passive: false }
    );
  }, []);
  return (
    <div className={`${styles.flexRowCenter}`}>
      {!showSecondary ? (
        <>
          <img
            src={hero1}
            alt="neoFinity"
            className="relative mt-24 w-[50%] h-[50%]"
          />
          <p className={`${styles.paragraph} text-primaryWhite`}>
            Fintech & Payments arm of Neo
          </p>
        </>
      ) : (
        <>
          <img
            src={hero2}
            alt="neoFinity"
            className="relative mt-44 w-[50%] h-[50%]"
          />
        </>
      )}
      <div className={`flex gap-[2px] items-center bottom-[-320px] relative`}>
        <img src={RBIlogo} alt="rbilogo" className=" w-[24px] h-[24px]" />
        <p className={`${styles.paragraph} text-primaryWhite`}>
          awarded by RBI for innovation in payments.
        </p>
      </div>
    </div>
  );
}

export default Hero;
