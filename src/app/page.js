import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import Counter from './components/Counter';
import FeatureWork from './components/FeatureWork';
import HeroBackground from './components/HeroBackground';
import Clients from './components/OurClients';
import Faq from './components/Faq';
import Driven from './components/Driven';
import HouseTechnology from './components/HouseTechnology';
import Navbar from './components/Navbar';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import Awards from './components/Awards';
import Blog1 from './components/Blog1';
import Technologies from './components/Technologies';
import TestingNav from './components/TestingNav';

const Home = ({ description }) => {

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
      <Head>
        <title>Home - ExpoBird</title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>
      <Navbar />
      <TestingNav />
      <Hero />
      <HeroBackground />
      <OurServices />
      <Counter />
      <CaseStudy />
      <FeatureWork title={"We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions"} />
      <Clients />
      <Faq question={"which technology used for creating mobile applications"}
        answer={"React Native, Flutter, Ionic, JavaScript, Kotlin, Java, Swift"}
        question2={"which technology used for creating Web applications"}
        answer2={"React JS, Node JS, Express JS, Next JS, Angular JS, Vue JS, Tailwind Css"}
        question3={"which technology used for creating Dev Ops"}
        answer3={"Docker, Kubernetes, Linux, azure, Aws"}
        question4={"which technology used for creating Backend applications"}
        answer4={"Django, Node JS, Express JS, Next JS"}
        para={"Can Software integrate with other platforms and services?"}
      />
      <Driven para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Awards />
      <HouseTechnology />
      <Technologies />
      <Blog1 menuData={Menu} />
      <Footer />
    </>
  )
}
export default Home
