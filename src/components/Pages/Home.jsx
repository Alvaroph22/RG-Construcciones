import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import About from './../Elements/About';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import OurProject from './../Elements/OurProject';
import Testimonials from './../Elements/Testimonials';


const Home = () => {
  return <>
            <Header />
            <div className="page-content">
                <Slider />
                {/*<Specialization />*/}
                <About />
                <OurValue />
                <OurMission />
                <OurServices />
                {/*<WhatsAppButton/>*/}
                {/*<OurProject />*/}
                <Testimonials />
            </div>
            <Footer />
        </>;
};
export default Home;