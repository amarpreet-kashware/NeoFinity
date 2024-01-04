import React from 'react'
import styles from '../../styles'
import { missionValue } from '../../constants'
import BaseLottie from '../BaseLottie'

function Mission() {
  return (
    <div className={`${styles.paddingX} text-center flex flex-col gap-11`}>
        <div>
            <h2 className={`text-primary ${styles.heading2}`}>
                Values & Mission
            </h2>
            <p className={`${styles.paragraph} text-primary`}>
                We don't just talk the talk; we transact it. Our core values are the bedrock of our mission. With a dash of wit, a sprinkle of seriousness, and a whole lot of dedication, we bring you:
            </p>
        </div>
        <div className={`${styles.flexCenter}`}>
            {
                missionValue.map((value, index)=> {
                    return (
                        <div key={index} className={`${styles.flexCenter}`}>
                            <BaseLottie Animation={value.lottie} Text={value.text}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Mission