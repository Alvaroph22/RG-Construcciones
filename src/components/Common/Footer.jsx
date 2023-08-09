import React from 'react';
import { NavLink } from 'react-router-dom';


{/*var bgimage = require('./../../images/background/bg-site.png');*/}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/logo.png')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo.default;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/*<div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage.default+')' }}>*/}
                    {/*    <div className="p-a30 bg-primary ">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-md-8 col-sm-8">*/}
                    {/*                <div className="call-to-action-left text-black">*/}
                    {/*                    <h4 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h4>*/}
                    {/*                    <span>Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-4 col-sm-4">*/}
                    {/*                <div className="call-to-action-right">*/}
                    {/*                    <div className="widget_newsletter">*/}
                    {/*                        <div className="newsletter-bx">*/}
                    {/*                            <form role="search" action="./">*/}
                    {/*                                <div className="input-group">*/}
                    {/*                                    <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />*/}
                    {/*                                    <span className="input-group-btn">*/}
                    {/*                                        <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>*/}
                    {/*                                    </span>*/}
                    {/*                                </div>*/}
                    {/*                            </form>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" style={{
                                                maxWidth:'64px',
                                                marginBottom:'2rem',
                                            }}/></NavLink>
                                        </div>
                                        {/*<p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>*/}
                                        <ul className="social-icons  mt-social-links">

                                            <li><NavLink to={"#"} className="fa fa-instagram" /></li>
                                            <li><NavLink to={"#"} className="fa fa-whatsapp" /></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">RG Acabados Arquitectonicos en Acero SAS</h4>
                                        <ul className="widget_address">
                                            <li>Cl. 29 #21-47, Manga, Cartagena de Indias, Bolivar</li>
                                            <li>rg1ser@gmail.com</li>
                                            <li>(+57) 304 4368996</li>
                                            <li>(+57) 312 2674292</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Enlaces mas usados</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>Sobre la empresa</NavLink></li>
                                            {/*<li><NavLink to={"/project-grid"}>Proyectos</NavLink></li>*/}
                                            <li><NavLink to={"/Products"}>Proyectos</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contactanos</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/*<div className="widget recent-posts-entry-date">*/}
                                    {/*    <h4 className="widget-title">Resent Post</h4>*/}
                                    {/*    <div className="widget-post-bx">*/}
                                    {/*        <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">*/}
                                    {/*            <div className="mt-post-date text-center text-uppercase text-white p-tb5">*/}
                                    {/*                <strong className="p-date">24</strong>*/}
                                    {/*                <span className="p-month">Mar</span>*/}
                                    {/*                <span className="p-year">2021</span>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="mt-post-info">*/}
                                    {/*                <div className="mt-post-header">*/}
                                    {/*                    <h6 className="post-title"><NavLink to={"/post-sidebar"}>On these beams, we’re building dreams.</NavLink></h6>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="mt-post-meta">*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li className="post-author"><i className="fa fa-user" />By Admin</li>*/}
                                    {/*                        <li className="post-comment"><i className="fa fa-comments" /> 28</li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">*/}
                                    {/*            <div className="mt-post-date text-center text-uppercase text-white p-tb5">*/}
                                    {/*                <strong className="p-date">30</strong>*/}
                                    {/*                <span className="p-month">Jan</span>*/}
                                    {/*                <span className="p-year">2021</span>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="mt-post-info">*/}
                                    {/*                <div className="mt-post-header">*/}
                                    {/*                    <h6 className="post-title"><NavLink to={"/post-sidebar"}>We’ll be a sensation for you next renovation</NavLink></h6>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="mt-post-meta">*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li className="post-author"><i className="fa fa-user" />By Admin</li>*/}
                                    {/*                        <li className="post-comment"><i className="fa fa-comments" /> 29</li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2023 RG Acabados S.A.S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*<Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>*/}

            </>
        );
    };
};

export default Footer;