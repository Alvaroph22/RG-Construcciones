import React from 'react';


const services = [
    {
        count: 1,
        title: `DISEÑOS`,
        icon: require('./../../images/icon/compass.png'),
        description: 'Estudios fotograficos, levantamientos, diseños 2D Y 3D.',
    },
    {
        count: 2,
        title: 'CARPINTERIA METALICA',
        icon: require('./../../images/icon/renovation.png'),
        description: 'Carpinteria metalica (hierro, aluminio, acero) estrcuturas, mezzanines, barandas, cerramientos, etc.',
    },
    {
        count: 3,
        title: 'VIDRIO Y VENTANERIA',
        icon: require('./../../images/icon/toolbox.png'),
        description: 'Crudo templado y blindado.',
    },
    {
        count: 4,
        title: 'CONSTRUCCION',
        icon: require('./../../images/icon/architecture.png'),
        description: 'Obra negra, obra gris, obra blanca.',
    },
    {
        count: 5,
        title: 'PUERTAS',
        icon: require('./../../images/icon/blueprint.png'),
        description: 'Peatonales y de garaje automatizadas, hidraulicas peatonales, corta fuego',
    },
    {
        count: 6,
        title: 'CORRECTIVOS Y MANTENIMIENTOS',
        icon: require('./../../images/icon/cogwheels.png'),
        description: 'Pintura, plomeria, electrico, puertas.',
    },
    {
        count: 7,
        title: 'RESTAURACION Y REMODELACION',
        icon: require('./../../images/icon/crane-1.png'),
        description: 'Pintura, plomeria, electrico, puertas.',
    },
    {
        count: 8,
        title: 'YATES Y BUQUES',
        icon: require('./../../images/icon/tools.png'),
        description: 'Pintura, plomeria, electrico, puertas.',
    }
]

var img1 = require('./../../images/background/bg-6.png');

class OurServices extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding  p-b50  square_shape2">
                    <div className="section-content">
                        <div className="Service-half-top p-t80  bg-dark bg-moving" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                            <div className="container">
                                {/* TITLE START */}
                                <div className="section-head text-white">
                                    <div className="mt-separator-outer separator-left">
                                        <div className="mt-separator">
                                            <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros</span> Servicios</h2>
                                        </div>
                                    </div>
                                    {/*<h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h3>*/}
                                </div>
                                {/* TITLE END */}
                            </div>
                        </div>
                        <div className="services-half-bottom">
                            <div className="container">
                                <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index} >
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50" style={{
                                                    height:320,
                                                }} >
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        {/*<NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Servicios</strong>
                    </div>*/}
                </div>
            </>
        );
    }
};

export default OurServices;