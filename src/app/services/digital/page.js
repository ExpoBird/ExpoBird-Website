import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import TestingNav from '@/app/components/TestingNav';
import Navbar from '@/app/components/Navbar';
import OurService2 from '@/app/components/OurService2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Faq from '@/app/components/Faq';
import Driven from '@/app/components/Driven';

const App = () => {
  return (
    <>
      <Script
        src="/scripts/script-1.js"
        strategy="lazyOnload"
      ></Script>
      <div className='bg-hero-image w-full overflow-hidden'>
            <Navbar />
            <TestingNav />
            <DigitalHero /> 
      </div>
         <OurService2 />
         <FeatureWork title={"We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"} />
         <CaseStudy />
          <Faq />
         <Driven />
          <Footer />
    </>
  )
}

export default App