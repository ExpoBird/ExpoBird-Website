import Script from 'next/script';
import Head from 'next/head';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import OurService2 from '@/app/components/OurService2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Faq2 from '@/app/components/Faq2';
import Nav2 from '@/app/components/Nav2';
import Driven2 from '@/app/components/Driven2';

const App = ({ description }) => {
  return (
    <>
     <Head>
        <title>Services - Social media Marketing</title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>
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
        <Nav2 />
        <DigitalHero title={"ExpoBird is leading mobile app development company \ Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."}
         text1={"We Are"} text2={"Social Media Marketing"} text3={"Company"}
         />
      </div>
      <OurService2 title={"Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning social media marketing services and proprietary technology platform."} />
      <FeatureWork title={"We are a team of Social Media and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"} 
      />
      <CaseStudy />
      <Faq2 />
      <Driven2 />
      <Footer />
    </>
  )
}

export default App