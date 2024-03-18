import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { UserContext } from "../../Common/Modal/logusecont";
import Footer from "../../Common/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  const { cart } = useContext(UserContext);
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy-Policy-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/privacypolicy" />
            </Helmet>
      <div className="desk-nav">
        <Navbar size={cart.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Privacy Policy</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 my-5 px-4 service-head">
            Privacy Policy for Rumeno Farmotech
          </h2>
          <p className="m-3">
            At Rumeno Farmotech, accessible from https://www.rumeno.in/, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by Rumeno Farmotech and how we use it.
          </p>
          <p className="m-3">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">Log Files</h2>
          <p className="m-3">
            Rumeno Farmotech follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information. Our Privacy Policy
            was created with the help of the Privacy Policy Generator.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">
            Cookies and Web Beacons
          </h2>
          <p className="m-3">
            Like any other website, Rumeno Farmotech uses "cookies". These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">Privacy Policies</h2>
          <p className="m-3">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Rumeno Farmotech.
          </p>
          <p className="m-3">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Rumeno Farmotech,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>
          <p className="m-3">
            Note that Rumeno Farmotech has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">
            Third Party Privacy Policies
          </h2>
          <p className="m-3">
            Rumeno Farmotech's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.
          </p>
          <p className="m-3">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">
            Children's Information
          </h2>
          <p className="m-3">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p className="m-3">
            Rumeno Farmotech does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">
            Online Privacy Policy Only
          </h2>
          <p className="m-3">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Rumeno Farmotech. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
          <h2 className="py-2 my-5 px-4 service-head">Consent</h2>
          <p className="my-5 mx-3 ">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
