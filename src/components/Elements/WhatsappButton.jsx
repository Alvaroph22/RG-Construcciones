import React from 'react';


const FloatingButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=3044368996" target="_blank" style={{ position: 'fixed',  fontSize: '25px', width:'48px', height: '48px', bottom: '20px', right: '20px', borderRadius: '50px', backgroundColor: '#25d366', color: '#FFF', textAlign: 'center', zIndex:'100'}}>
        <i className="fa fa-whatsapp" style={{marginTop:'13px'}}> </i>
    </a>
  );
};

export default FloatingButton;
