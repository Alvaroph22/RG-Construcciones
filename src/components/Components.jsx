import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

import ContactUs from './Pages/ContactUs';
import Products from "./Pages/Products";

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/products' exact component={Products} />
                            {/*<Route path='/homepage2' exact component={Home2} />*/}
                            {/*<Route path='/homepage3' exact component={Home3} />*/}
                            {/*<Route path='/homepage4' exact component={Home4} />*/}

                            <Route path='/about' exact component={About} />
                            {/*<Route path='/services' exact component={Services} />*/}

                            {/*<Route path='/blog-grid' exact component={BlogGrid} />*/}
                            {/*<Route path='/blog-listing' exact component={BlogListing} />*/}
                            {/*<Route path='/blog-masonary' exact component={BlogMasonary} />*/}
                            {/*<Route path='/faq' exact component={Faq} />*/}
                            {/*<Route path='/error' exact component={Error} />*/}
                            <Route path='/contactus' exact component={ContactUs} />

                            {/*<Route path='/post-image' exact component={PostImage} />*/}
                            {/*<Route path='/post-gallery' exact component={PostGallery} />*/}
                            {/*<Route path='/post-video' exact component={PostVideo} />*/}
                            {/*<Route path='/post-sidebar' exact component={PostSidebar} />*/}

                            {/* <Route path='/project-carousel' exact component={ProjectCarousel} />*/}
                            {/*<Route path='/project-classic1' exact component={ProjectClassic1} />*/}
                            
                            

                            {/*<Route path='/accordian' exact component={Accordian} />*/}
                            {/*<Route path='/button' exact component={Button} />*/}
                            {/*<Route path='/iconboxstyle' exact component={IconBoxStyle} />*/}
                            {/*<Route path='/iconfont' exact component={IconFont} />*/}
                            {/*<Route path='/listgroup' exact component={ListGroup} />*/}
                           
                            {/*<Route path='/table' exact component={Table} />*/}
                            {/*<Route path='/tabs' exact component={Tabs} />*/}
                            {/*<Route path='/video' exact component={Video} />*/}
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;