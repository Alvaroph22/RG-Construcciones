import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');


class OurMission extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + img1 + '), url(' + img2 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START *
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestra</span> Mision y Vision</h2>
                                    </div>
                                </div>
                            </div>*/}
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3 + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-300 text-primary" >Mision</span><br /></h3>
                                        <p>RG – ACABADOS ARQUITECTÓNICOS EN ACERO S.A.S. con su gran equipo de trabajo, tiene como misión ofrecer el servicio de construir con experiencia, calidad y responsabilidad, diseños, construcciones, remodelaciones, puertas automatizadas, entre otros, para demostrar los mejores resultados de toda actividad, pequeña, mediana o a gran escala.</p>
                                        {/*<ul className="list-angle-right anchor-line">*/}
                                        {/*    <li><NavLink to="/about">Construction Management</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Pre Construction Services</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Contract Administration</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Implementation</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Leed consultation</NavLink></li>*/}
                                        {/*</ul>*/}
                                        {/*<div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>*/}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3 + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-300 text-primary">Vision</span><br /></h3>
                                        <p>RG – ACABADOS ARQUITECTÓNICOS EN ACERO S.A.S. con su gran equipo de trabajo, tiene como misión ofrecer el servicio de construir con experiencia, calidad y responsabilidad, diseños, construcciones, remodelaciones, puertas automatizadas, entre otros, para demostrar los mejores resultados de toda actividad, pequeña, mediana o a gran escala.</p>
                                        {/*<ul className="list-angle-right anchor-line">*/}
                                        {/*    <li><NavLink to="/about">Construction Management</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Pre Construction Services</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Contract Administration</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Implementation</NavLink></li>*/}
                                        {/*    <li><NavLink to="/about">Leed consultation</NavLink></li>*/}
                                        {/*</ul>*/}
                                        {/*<div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>*/}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Mision y Vision</strong>
                    </div>*/}
                </div>
            </>
        );
    }
};

export default OurMission;