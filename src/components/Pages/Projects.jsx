import React, {useEffect} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { NavLink } from 'react-router-dom';
import useProducts from "../../controllers/products";
import SimilarProjects from '../Elements/SimilarProjects';
import WhatsappButton from '../Elements/WhatsappButton';

const filters = [
    { label: "Museo Del Oro", filter: ".cat-1" },
    { label: "PortoMarine", filter: ".cat-2" },
    { label: "Torre Del Parque", filter: ".cat-3" },
   
]


const projects = [
    {
        image: require('./../../images/projects/portrait/pic1.jpg'),
        title: 'Museo Del Oro',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/portrait/pic2.jpg'),
        title: 'PortoMarine',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic3.jpg'),
        title: 'PortoMarine',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'PortoMarine Piso 3601',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'PortoMarine',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Museo Del Oro',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/portrait/pic7.jpg'),
        title: 'Museo Del Oro',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/pic-l-5.jpg'),
        title: 'Museo Del Oro',
        address: 'Aqaba, Jordan',
        width: 'col-md-6',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Museo Del Oro',
        address: 'Cartagena',
        width: 'col-md-3',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'Torre Del Parque',
        address: 'Cartegena',
        width: 'col-md-3',
        filter: 'cat-3'
    }, 
    
]

 const Products = ()=>{
  const {products,addToCart} = useProducts()
     console.log({products})
     const {cart} = products
    useEffect(()=>{
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
    },[])

        return (
            <>
                <Header />
            <div className="page-content">

                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Ultimos</span> Proyectos</h2>
                                </div>
                                {/*{cart.length>0 &&  <div style={{display:'flex'}} data-toggle="modal" data-target="#large-Modal" > <img src={Cart}/> <p style={{

                                    backgroundColor:'#243F8C',
                                    color:'white',
                                    borderRadius:'100%',
                                    width:'24px',
                                    height:'24px',
                                    fontSize:'12px',
                                    textAlign:'center',
                                    padding:0,
                                    margin: 'auto 1rem',

                                }}>{cart.length}</p>  </div>}*/}

                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                                {/* COLUMNS 1 */}
                                <div className="stamp col-md-3 col-sm-6 m-b30" style={{ height:'100%'}}>
                                    <div className="bg-gray p-a30">
                                        <div className="filter-wrap">
                                            <ul className="filter-navigation masonry-filter text-uppercase">
                                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                                {filters.map((item, index) => (
                                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item ${item.width} col-sm-6 m-b30`}>
                                        <div className="mt-box   image-hover-block">
                                            <div className="mt-thum-bx">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="mt-info  p-t20 text-white">
                                                <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                                <p className="m-b0">{item.address}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
             <WhatsappButton/>                       
            </div>
            {/*<SimilarProjects /> */}
            <Footer />
               {/* <div id="large-Modal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-lg">
                        MODAL CONTENT 
                        <div className="modal-content">
                            <div className="modal-header bg-secondry">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title text-white">Carrito de compras</h4>
                            </div>
                            <div className="modal-body">
                                {cart.map(item=>{
                                   return  <p>
                                        {item.name} ({item.amount})
                                    </p>
                                })}

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="site-button btn-effect button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            */}

            </>
        );


};

export default Products;