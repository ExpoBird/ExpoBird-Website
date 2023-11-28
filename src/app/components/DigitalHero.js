import styles from "../style";
import Button from "./Button";
import Image from "next/image";

const DigitalHero = () =>(
    <section className={` ${styles.flexCenter} flex-col flex-wrap sm:mb-10 mb-16 mt-16`}>
      <div className="text-center">
        <h1 className={`${styles.heading1} font-montserrat`}>
          <span>
            <span>W</span>
            <span>e</span>
            &nbsp;
            <span>A</span>
            <span>r</span>
            <span>e</span>
            &nbsp;
            <span>#</span>
            <span>1</span>
          </span>
          <br />
          <span>
            <span>A</span>
            <span>p</span>
            <span>p</span>
            &nbsp;
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <div className="o-letter inline-block"></div>
            <span>p</span>
            <span>m</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
          </span>
          <br />
          <span>
            <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>y</span>
            &nbsp;
            <span>D</span>
            <span>u</span>
            <span>b</span>
            <span>a</span>
            <span>i</span>
          </span>
        </h1>
      </div>
      <div className="text-center my-8">
        <p className={`${styles.paragraph} font-montserrat`}>Code Brew Labs is leading mobile app development company Dubai,<br /> helping business transform their ideas into reality. We build mobile app <br /> development solutions to empower startups, SMBs, enterprises and brands.</p>
      </div>
      <Button/>
      <div className=" sm:mt-[40px] mx-auto mt-10">
                        <div className="gap-20 sm:grid sm:grid-cols-2 sm:flex-wrap  md:grid md:grid-cols-2 sm:gap-10 flex items-center justify-center">
                        <Image  src="/assets/award01.svg" height={25} width={150} alt="pic" />
                  <Image  src="/assets/award02.svg" height={25} width={89} alt="pic" />
                  <Image  src="/assets/award03.svg" height={35} width={119} alt="pic" />
                  <Image  src="/assets/award04.svg" height={30} width={125} alt="pic" />
                  <Image  src="/assets/partner01.png" height={31} width={124} alt="pic" />
                  <Image  src="/assets/partner04.png" height={32} width={126} alt="pic" />
                        </div>
                      </div>
    </section>

  )

export default DigitalHero