import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const page404 = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>404-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/*" />
            </Helmet>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-12 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <NavLink className="link_404" to="/home">
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page404;
