import Script from 'next/script'
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import OurService2 from '@/app/components/OurService2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Faq2 from '@/app/components/Faq2';
import Driven2 from '@/app/components/Driven2';
import TestingNav from '@/app/components/TestingNav';
import ReasonBusiness from '@/app/components/ReasonBusiness';
import WhyShopify from '@/app/components/WhyShopify';
import NewCta from '@/app/components/NewCta';
import PointSection from '@/app/components/PointSection';

const page = () => {
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
      <WhyShopify
      desc={"The Shopify Plus version of the platform is for brands that want more from their eCommerce platform and to take their store to the next level. It's incredibly flexible, but still user-friendly."}
      title={"Why Shopify Plus?"}
      heading1={""}
      paragraph1={""}
      heading2={""}
      paragraph2={""}
      heading3={""}
      paragraph3={""}
      heading4={""}
      paragraph4={""}
      />
      <PointSection
      point1={"Research"}
      desc1={"In this phase we dig up, rather than simply assume, what the problem is. This involves understanding your business, brand, users and technology. But, we also take time to speak to people who are directly affected by the problem at hand and experts who have key insight."}
      point2={"Research"}
      desc2={"In this phase we dig up, rather than simply assume, what the problem is. This involves understanding your business, brand, users and technology. But, we also take time to speak to people who are directly affected by the problem at hand and experts who have key insight."}
      point3={"Research"}
      desc3={"In this phase we dig up, rather than simply assume, what the problem is. This involves understanding your business, brand, users and technology. But, we also take time to speak to people who are directly affected by the problem at hand and experts who have key insight."}
      point4={"Research"}
      desc4={"In this phase we dig up, rather than simply assume, what the problem is. This involves understanding your business, brand, users and technology. But, we also take time to speak to people who are directly affected by the problem at hand and experts who have key insight."}
      />
      <ReasonBusiness
      greenTitle={"5 Reasons"}
      whiteTitle={"Shopify Means Business"}
      heading1={"Hardware, Software and Services, working together as one"}
      paragraph1={"You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system"}
      heading2={"Anything is Possible With Custom Shopify Development"}
      paragraph2={"You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system"}
      heading3={"Shopify is Love !!!"}
      paragraph3={"You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system"}
      heading4={"Powerful Store. Robust Revenue"}
      paragraph4={"You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system"}
      heading5={"Impact of Shopify Across Industires"}
      paragraph5={"You make a change on Magento and it reflects on your ERP. Your team can work side by side to extend their services. Readily available APIs or custom ones can transform your workflow to full automation. This way you don’t have to keep an eye on the integrated part of your system"}
      />
      <NewCta
      heading={"Does Your Store Need a Custom Shopify App"}
      paragraph={"Attract more customers, experience higher conversions, and boost profitability through a custom Shopify app. Discuss your needs with our development experts now."}
      />
      {/* <OurService2 title={"Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning social media marketing services and proprietary technology platform."} /> */}
      <FeatureWork title={"We are a team of Social Media and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
      />
      {/* <CaseStudy /> */}
      <Faq2 question={"which technology used for creating mobile applications"}
        answer={"React Native, Flutter, Ionic, JavaScript, Kotlin, Java, Swift"}
        question2={"which technology used for creating Web applications"}
        answer2={"React JS, Node JS, Express JS, Next JS, Angular JS, Vue JS, Tailwind Css"}
        question3={"which technology used for creating Dev Ops"}
        answer3={"Docker, Kubernetes, Linux, azure, Aws"}
        question4={"which technology used for creating Backend applications"}
        answer4={"Django, Node JS, Express JS, Next JS"} 
        para={"Can Software integrate with other platforms and services?"}/>
      {/* <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} /> */}
      <Footer />
    </>
  )
}

export default page