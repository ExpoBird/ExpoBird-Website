import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import OurService2 from '@/app/components/OurService2';
import FeatureWork from '@/app/components/FeatureWork';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Faq2 from '@/app/components/Faq2';
import Driven2 from '@/app/components/Driven2';
import Navbar2 from '@/app/components/Navbar2';
import Nav from '@/app/components/Nav';
import Blog1 from '@/app/components/Blog1';

const App = () => {
  const Menu = [
    {
      id: 1,
      image: "/assets/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.webp",
      name: "Mobile Development",
      category: "App Development",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },

    {
      id: 2,
      image: "/assets/F7148507-7860-465B-950B-2F55B420CEDB-1229-0000010877FFE7CA_tmp-1.jpg",
      name: "Mern",
      category: "Web Development",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },
    {
      id: 3,
      image: "/assets/F7148507-7860-465B-950B-2F55B420CEDB-1229-0000010877FFE7CA_tmp-1.jpg",
      name: "Node js",
      category: "Backend",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },
    {
      id: 4,
      image: "/assets/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.webp",
      name: "Next js",
      category: "Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

  ];
  return (
    <>
      <Script
        src="/scripts/script-1.js"
        strategy="lazyOnload"
      ></Script>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Nav />
        <Navbar2 />
        <DigitalHero title={"Code Brew Labs is leading mobile app development companyDubai, "}
         title1={"helping business transform their ideas into reality. We build mobile app "}
         title2={" development solutions to empower startups, SMBs, enterprises and brands."}
          text1={"We Are #1"} text2={"UI/UX Designer"} text3={"Company Dubai"}
        />
      </div>
      <OurService2 title={"Choose Expobird as your digital marketing agency and propel your business to new heights with our award-winning UI/UX Designer services and proprietary technology platform."} />
      <FeatureWork title={"We are a team of UI/UX Designer and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
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
        para={"Can Software integrate with other platforms and services?"} />
      <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Blog1 menuData={Menu} />
      <Footer />
    </>
  )
}

export default App