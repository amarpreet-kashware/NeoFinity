import { useState } from "react";
// import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/header";
import MidPage from "./components/midPage";
import styles from "./styles";
import { benefits } from "./constants";
import Mission from "./components/Mission";
import LogoTransition from "./components/LogoTransition";
import ViewPayment from "./components/viewPayment";
import Bank from "./components/Bank";

function App() {
  return (
    <div
      className="w-full bg-primary overflow-hidden"
      style={{ backgroundColor: "black" }}
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div
        className={`${styles.boxHeight}`}
        style={{ perspective: "2000px" }}
      >
        <div
          className="absolute top-[-70%] left-[15%] w-full h-full transform -rotate-45 border-baseGreen rounded-[60px] border-[6px] blur-sm z-0 abcd"
          style={{
            transform: "rotate(45deg)",
          }}
        ></div>
        <Hero />
      </div>
      <div className={`${styles.boxHeight}`}>
        <ViewPayment />
      </div>
      <div className={`${styles.boxHeight}`}>
        <Bank />
      </div>
      {benefits.map((benefit, index) => {
        return (
          <div key={index} className={`bg-primary ${styles.paddingX}`}>
            <div
              className={`${styles.boxWidth} ${styles.boxHeight} ${styles.flexCenter}`}
            >
              <MidPage benefit={benefit} />
            </div>
          </div>
        );
      })}
      <div
        className={`bg-primaryWhite ${styles.boxHeight} ${styles.flexRowCenter}`}
      >
        <Mission />
      </div>
      <div className={`${styles.flexCenter} ${styles.boxHeight}`}>
        <LogoTransition />
      </div>
    </div>
  );
}

export default App;
