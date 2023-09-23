import React from "react";

// Common Component

import CarouselFadeExample from "../Carousel/carousel";

const FooterTop = () => {
  return (
    <>
      <section className="section-footer-head">
        <div className="container bg-primary footer-header rounded">
          <div className="row py-4 justify-content-evenly">
            <div className="col-sm-9 d-flex align-items-center">
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
  );
};

export default FooterTop;
