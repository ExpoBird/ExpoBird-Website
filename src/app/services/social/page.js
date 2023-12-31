import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import OurService2 from '@/app/components/OurService2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Faq2 from '@/app/components/Faq2';
import Driven2 from '@/app/components/Driven2';
import TestingNav from '@/app/components/TestingNav';

const App = () => {
  return (
    <>
      <Script
        src="/scripts/script-1.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="/scripts/script-3.js"
        strategy="lazyOnload"
      ></Script>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Navbar />
        <TestingNav />
        <DigitalHero title={"ExpoBird is leading mobile app development company \ Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."}
          text1={"We Are"} text2={"Social Media Marketing"} text3={"Company"}
        />
      </div>
      <OurService2 title={"Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning social media marketing services and proprietary technology platform."} />
      <FeatureWork title={"We are a team of Social Media and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
      />
      <CaseStudy />
      <Faq2 question={"which technology used for creating mobile applications"}
        answer={"React Native, Flutter, Ionic, JavaScript, Kotlin, Java, Swift"}
        question2={"which technology used for creating Web applications"}
        answer2={"React JS, Node JS, Express JS, Next JS, Angular JS, Vue JS, Tailwind Css"}
        question3={"which technology used for creating Dev Ops"}
        answer3={"Docker, Kubernetes, Linux, azure, Aws"}
        question4={"which technology used for creating Backend applications"}
        answer4={"Django, Node JS, Express JS, Next JS"} 
        para={"Can Software integrate with other platforms and services?"}/>
      <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Footer />
    </>
  )
}

export default App