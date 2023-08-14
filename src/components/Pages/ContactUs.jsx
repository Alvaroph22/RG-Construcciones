import React from 'react';

import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import WhatsappButton from './../Elements/WhatsappButton';

const bnrimg = require('./../../images/banner/4.jpg');

class ContactUs extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                {/*<Banner title="¡Poniendo un plan en acción, para asegurar su satisfacción!" pagename="Contact Us" bgimage={bnrimg}/>*/}
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" action="https://formsubmit.co/alvaroperinan@gmail.com" method="POST">
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary"></span>Contactanos</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Nombre" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Correo Electronico" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Mensaje" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="submit" value="Submit" className="site-button btn-effect">Enviar </button>
                                                </div>
                                            </div>
                                            <input type='hidden' name='_next' value='https://rg-construcciones.vercel.app/contactus'/>
                                            <input type='hidden' name='_captcha' value='false'/>
                                            <input type="hidden" name="_autoresponse" value="Su mensaje ha sido enviado con Exito, Gracias"/>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Informacion</span>De Contacto</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Telefonos</h5>
                                                        <p>(304) 436-8996</p>
                                                        <p>(312) 2674292</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Correo</h5>
                                                        <p>rg1ser@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Direccion</h5>
                                                        <p>Cl. 29 #21-47, Manga, Cartagena de Indias, Bolivar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/*<div className="gmap-outline">
                                <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "400px", width: "100%"}}
                                zoom={12}
                                center={{lat: 10.4152888, lng: -75.5347066}}
                                markers={{lat: 10.4152888, lng: -75.5347066}} //optional
                                />
                             </div>*/}
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                <WhatsappButton/>    
                </div>

                
                <Footer />

            </>
        );
    };
};

export default ContactUs;