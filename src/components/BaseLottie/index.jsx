import React from 'react'
import Lottie from 'react-lottie'
import styles from '../../styles';

function BaseLottie({Animation, Text}) {
    const defaultOptions = (Animation) => {
        return {
          loop: true,
          autoplay: true,
          animationData: Animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        };
      };
      const AnimationJsx = (Animation) => {
        return (
          <div>
            <Lottie
              options={defaultOptions(Animation)}
              isClickToPauseDisabled
            />
          </div>
        );
      };

  return (
    <div className={`h-[70%] w-[70%] flex-col justify-center`}>
        {Animation && AnimationJsx(Animation)}
        <div className={`${styles.paragraph}`}>
            {Text && Text}
        </div>
    </div>
  )
}

export default BaseLottie