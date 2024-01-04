import React from 'react'
import bank from '../../assets/images/pngs/bank.png'
import styles from '../../styles'

function Bank() {
    return (
        <div className="bg-cover " style={{ backgroundImage:  `url(${bank})`, height: innerHeight }}>
        <div className="flex flex-col gap-6 inset-0 p-40" style={{ backgroundColor: 'rgba(11, 128, 103, 0.8)', height: innerHeight }}>
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

export default Bank