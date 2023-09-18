import React from "react";
import CarouselFadeExample from "../../Common/Select/carousel";


const FooterTop = ()=>{
    return (
        <>
        <section className="section-footer-head">
        <div className="container bg-primary footer-header rounded">
          <div className="row py-4 justify-content-between">
            <div className="col-sm-9 h-50">
              <h2 className="text-white ms-2">
                An ISO 9001:2015 recognized by International Accredited Forum
                Certified Company
              </h2>
            </div>
            <div className="col-sm-2 ">
              <CarouselFadeExample />
            </div>
          </div>
        </div>
      </section>
        </>
    )
};

export default FooterTop;