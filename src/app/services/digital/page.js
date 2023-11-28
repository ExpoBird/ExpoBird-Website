import DigitalHero from '@/app/components/DigitalHero';
import TestingNav from '@/app/components/TestingNav';
import Navbar from '@/app/components/Navbar';
import OurService2 from '@/app/components/OurService2';
import Driven2 from '@/app/components/driven2';
import Faq2 from '@/app/components/Faq2';
import Footer2 from '@/app/components/Footer2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';

const App = () => {
  return (
    <>
      <div className='bg-hero-image w-full overflow-hidden'>
            <Navbar />
            <TestingNav />
            <DigitalHero /> 
      </div>
         <OurService2 />
         <FeatureWork title={"We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"} />
         <CaseStudy />
          <Faq2 />
          <Driven2 />
          <Footer2 />
    </>
  )
}

export default App