import React from 'react'
import neoGroup from '../../assets/images/pngs/cardScanner.png'
import styles from '../../styles'

function ViewPayment() {
    
  return (
    <div className="bg-cover " style={{ backgroundImage:  `url(${neoGroup})`, height: innerHeight }}>
        <div className="flex flex-col gap-6 inset-0 p-20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: innerHeight }}>
        <h2 className={`text-primaryWhite ${styles.heading2} opacity-1 md:max-w-[910px]`}>
        Tomorrow’s tech, built today
        </h2>
        <p className={`${styles.paragraph} text-primaryWhite md:max-w-[760px]`}>
        Crafted for tomorrow, our fintech solutions seamlessly blend art with intelligence. Meticulously merging intuitive design with advanced capabilities, making innovation meets everyday utility
        </p>
        </div>
    </div>
  )
}

export default ViewPayment