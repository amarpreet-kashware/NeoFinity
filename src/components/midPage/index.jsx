import React from "react";
import Lottie from "react-lottie";
import styles, { layout } from "../../styles";

const MidPage = ({ benefit }) => {
  const defaultOptions = (animation) => {
    return {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  };
  const AnimationJsx = (animation) => {
    return (
      <div>
        <Lottie
          options={defaultOptions(animation)}
          // height={500}
          // width={500}
          isClickToPauseDisabled
        />
      </div>
    );
  };
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} md:max-w-[570px] text-primaryWhite lowercase`}>
        {benefit && benefit.header && (
            <>
            {benefit.header.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-baseGreen">{benefit.header.split(' ').slice(-1)}</span>
            </>
        )}
        </h2>
        <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
          {benefit && benefit.text}
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {benefit && AnimationJsx(benefit.lottie)}
      </div>
    </section>
  );
};

export default MidPage;
