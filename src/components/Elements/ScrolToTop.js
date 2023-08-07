import React from "react";

const WhatsappButton = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=3135197590" target="_blank">
          <button className="scroltop" style={{ borderRadius: '50px', backgroundColor: 'green'}}>
            <span className="fa fa-whatsapp" id="btn-vibrate " />             
          </button>
        </a>
    );
};

export default WhatsappButton;
