import React, { useEffect, useState } from 'react'
import neoFinity from '../../assets/images/svgs/neoFinity.svg'
import neoGroup from '../../assets/images/svgs/neoGroupLogo.svg'

function LogoTransition() {
    const [ currentImage, setCurrentImage] = useState(neoFinity)
  useEffect(() => {
        const handleScroll = () => {
          const currentScrollPosition = window.scrollY || window.scrollTop || 0;
    
          if (Math.abs(currentScrollPosition) >= 10) {
            // Change the image to neoGroup
            setCurrentImage(neoGroup);
          } else {
            // Change the image back to neoFinity
            setCurrentImage(neoFinity);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className={`h-[50%] w-[50%]`}>
        <img src={currentImage} className={`w-[100%] h-[100%]`}/>
    </div>
  )
}

export default LogoTransition
