import React from "react";
import srvcimg1 from "../../../assets/img/service-img/srvc-img1.jpg";
import srvcimg2 from "../../../assets/img/service-img/srvc-img2.jpg";
import srvcimg3 from "../../../assets/img/service-img/srvc-img3.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="container-fluid p-0 service-bg pt-5 overflow-hidden">
        <div
          class="section-header text-center mx-auto mb-3 wow fadeInUp pt-5"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 class="display-5 mb-3 pt-3">Our Services</h1>
        </div>
        <div className="col-lg-12">
          <h2 className="  py-2 px-4 service-head">Our Veterinary Team</h2>
        </div>
        <div className="container">
          <div className="row my-3">
            <div className="col-lg-7">
              <h1 class="display-5 mb-4 mt-4">Dr. Hari Audh Tiwari</h1>
              <p class="mb-4 fs-5 text-danger">
                Chief Consultant Medical Science Managements
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Chief Vetrinary
                Officer (Retired), CIRG Makhdoom Farah, Mathura
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>M.V.Sc. from
                College of Vetrinary Science, Mathura
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>B.V.Sc. & A.H. from
                College of Veterinary Science, Pant Nagar, Udham Singh Nagar{" "}
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img className="w-75" src={srvcimg1} alt="" />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-5">
              <img className="w-75" src={srvcimg2} alt="" />
            </div>
            <div className="col-lg-7">
              <h1 class="display-5 mb-4 mt-5">Dr. Ibne Ali</h1>
              <p class="mb-4 fs-5 text-danger">
                Chief Consultant Nutritional Science and Managements
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>ICAR's JRF exam for
                M.V.Sc. All India Rank 3 in Animal Science
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>M.V.Sc. from IVRI
                Izatnagar, Bareilly
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>B.V.Sc. & A.H. from
                College of Veterinary Science, Pant Nagar, Udham Singh Nagar
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 my-5">
          <h2 className=" py-2 px-4 service-head">
            Our Consulting Team Members
          </h2>
        </div>

        <div className="container">
          <div className="row srvc-consl">
            <div class="col-lg-4 col-md-6">
              <img className="img-fluid w-100" src={srvcimg1} alt="" />
              <div class="bg-light p-4 text-center">
                <h3 className="text-danger">Dr. H A Tiwari</h3>
                <p class="d-block h5 lh-base mb-4" href="">
                  Chief Consultant Medical Science Managements
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <img className="img-fluid w-100" src={srvcimg2} alt="" />
              <div class="bg-light p-4 text-center">
                <h3 className="text-danger">Dr. Ibne Ali</h3>
                <p class="d-block h5 lh-base mb-4" href="">
                  Chief Consultant Nutritional Science and Managements
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <img className="img-fluid w-100" src={srvcimg3} alt="" />
              <div class="bg-light p-4 text-center">
                <h3 className="text-danger">Mohammed Rizwan</h3>
                <p class="d-block h5 lh-base mb-4" href="">
                  Founder & CEO Market and Products Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid srvc-consl-txt p-0 service-bg overflow-hidden">
        <div className="row justify-content-center py-4">
          <div className="col-lg-11">
            <h3>Dairy Consultation</h3>
            <p>
              Ruminant Herd Management is an important factor for Dairy farms
              that maintain long-term high production. They need to successfully
              manage several key factors: nutrition, reproduction, comfort, and
              milking. Alongside these essentials, all dairy farms must deal
              with the logistics of weather, transportation, and expenses. It
              can be a lot to balance, but proper planning and thoughtful
              utilization of the latest dairy farm training and technology make
              it possible.
            </p>
            <h3>Goat and Sheep Consultation</h3>
            <p>
              Goat is a multi-use animal which is commonly reared for the meat
              (chevon). In the different parts of the world, goat is raised for
              the meat, milk, wool and leather. Goat is also called “the poor
              man’s cow”. In India, the goats can be reared in different
              ecological zones; hence, people are adopting goat farming as an
              enterprise. Sheep and goat are belonging to different species, but
              their management is almost similar. In India, almost in all parts,
              sheep and goats are raised. And, as all caste and ethnic people
              like goat meat; day-by-day, goat farming has become a popular
              business. For the goat farming, the meager needs of fodder and
              fewer requirements of feeds compared to rearing other livestock,
              goat farming requires low investment. Shed making can also be
              possible in a low cost, and easy to sell goats in the case of
              needs arises to farmer. So, the goat farming enterprise is in
              growing trend. In order to generate higher income there are some
              special skills, scientific methods and management are required. It
              is advised to work with the experienced and professional people
              for the higher output so ZamZam is here to help to grow in the
              following management consultations.{" "}
            </p>

              <div className="d-flex justify-content-center">
              <ul>
                <li>Business Road Map</li>
                <li>Business Model</li>
                <li>Business Development</li>
                <li>Shed Design</li>
                <li>Animal Performance Management</li>
                <li>Disease Management</li>
                <li>Kid Growth Management</li>
                <li>Health Management</li>
                <li>Feed Planning</li>
              </ul>

              <ul>
                <li>Nutrition Management</li>
                <li>Products Quality Management</li>
                <li>Flock Management</li>
                <li>Farm and Dairy Equipment Management</li>
                <li>Business Relationship Management</li>
                <li>Breeding and Reproduction Management</li>
                <li>Artificial Insemination</li>
                <li>BioSecurity Management</li>
                <li>Risk Management</li>
              </ul>

              <ul>
                <li>Integrated Farming Management</li>
                <li>Manure Management</li>
                <li>New Animals Management</li>
                <li>Goat Trading Management</li>
                <li>Marketing Management</li>
                <li>Farm Data Management</li>
                <li>IT Enable Services</li>
              </ul>
              </div>
          </div>
        </div>
        <div className="col-lg-12 mb-3">
          <h2 className=" py-2 px-4  service-head">Business Start-up Support</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <p>
              Livestock farming is not new in this era it has been in prevalence
              since ages however the new era Livestock farming is based on
              strong scientific methods, innovative farming techniques,
              management, analyzing and calculation methods. livestock farming
              business in India is very promising. Let’s dig deep and find out
              how you will start when you are a complete beginner in livestock
              farming. Besides, A proper raising technique can save your time
              and money.
            </p>
            <p>
              As with any livestock farming business, you must have a proper
              business plan in your hand. You must decide the breed, with how
              many animals you will start, accommodation, feeding, health
              issues, etc. Accordingly, you will need to get the financial
              calculations with ROI. Return on investment is the most important
              factor because on that basis you will need to assess the financial
              investment.{" "}
            </p>
            <p>
              Starting up a new business is not easy without having any expert's
              support. It is full of risk in the competitive market. So this is
              therefore, it is advised to take the support from us we already
              working on the advance technology. ZamZam Ruminant Farmtech has a
              team of great experienced professional who are expert in the
              ruminant livestock farming for many many years. Our main aim is to
              bring the profit for the new start up by helping to organize the
              Farming management by sharing farming techniques, business model,
              Business Income and Outcome, Marketing, ROI etc.{" "}
            </p>
            <p>
              You must have proper skill and knowledge about livestock farming,
              before starting the business. If you are not aware of the skills,
              it is advised to contact us for training.{" "}
            </p>
            <h5>
              We generally conduct training sessions and workshops for the
              following small business entrepreneurs.
            </h5>
            <ul>
              <li>Goat Farming </li>
              <li>Sheep Farming</li>
              <li>Cattle Dairy Farming</li>
            </ul>
            <p>
              Please contact us by filling up the below given form so that one
              of our expert will give you a call to understand your need in
              detail.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
