import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';
import About4 from '../Elements/About4';
import Specialization4 from '../Elements/Specialization4';
import Team3 from '../Elements/Team3';



class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                     {/*<Banner title="Creando estilos de vida urbanos de calidad, construyendo comunidades más fuertes" pagename="About Us"/>*/}
                     {/*<About4 />*/}
                    <Specialization4 />
                     {/*<Team3 />*/}

                </div>

                <Footer />

            </>
        );
    };
};

export default About;