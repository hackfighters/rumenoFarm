import React, { useContext, useState } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Common/Modal/logusecont";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

const Blog = () => {
  const { cart } = useContext(UserContext);
  const { handleSubmit, setValue, register } = useForm();
  const [blogdata, setblogdata] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenDialog = () => {
    setOpenModal(true);
    setValue("blogimage", "");
    setValue("blogtitle", "");
    setValue("blogheading", "");
    setValue("blogdescription", "");
    setValue("blogtopic", "");
  };

  const handleCloseDialog = () => {
    setOpenModal(false);
    setValue("blogimage", "");
    setValue("blogtitle", "");
    setValue("blogheading", "");
    setValue("blogdescription", "");
    setValue("blogtopic", "");
    setEditIndex(null);
  };

  const onSubmit = (data) => {
    if (editIndex !== null) {
      // Edit existing data
      const updatedData = [...blogdata];
      updatedData[editIndex] = data;
      setblogdata(updatedData);
      console.log(updatedData[editIndex]);
    } else {
      // Add new data
      setblogdata([...blogdata, data]);
    }
    console.log(data);
    setOpenModal(false);
  };

  const handleEdit = (index) => {
    setValue("blogimage", blogdata[index].blogimage);
    setValue("blogtitle", blogdata[index].blogtitle);
    setValue("blogheading", blogdata[index].blogheading);
    setValue("blogdescription", blogdata[index].blogdescription);
    setValue("blogtopic", blogdata[index].blogtopic);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleDelete = (index) => {
    const updatedData = [...blogdata];
    updatedData.splice(index, 1);
    setblogdata(updatedData);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rumeno</title>
        <link rel="canonical" href="https://rumeno.in/blog" />
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
            <span className="label-title">Blog</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary w-auto"
          onClick={() => handleOpenDialog()}
        >
          Add blog
        </button>
        <div className="row justify-content-center">
          {blogdata.map((item, index) => (
            <div className="col-lg-10 " key={index}>
              <div className="p-3 border d-flex bg-white rounded shadow-sm d-flex flex-column justify-content-between mb-3">
                <div className="d-flex align-items-center text-decoration-none">
                  <div className="w-50">
                    <img className="flex-shrink-0 me-3 rounded-start" src={item.blogimage} />
                  </div>
                  <div className="flex-grow-1">
                    <h2 className="mb-3">
                      {item.blogheading}
                    </h2>
                    <div className="text-muted mb-3">
                     {item.blogdescription}
                    </div>

                    <ul className="list-unstyled d-flex mt-3">
                      <li className="me-3">
                        <span>{item.blogtitle}</span>
                      </li>
                      <li>
                        <span>20-07-2024</span>
                      </li>
                    </ul>
                    <div className="text-end">
                      <button
                        className="btn w-auto mx-2 btn-warning"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn w-auto mx-2 btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal show={openModal} onHide={handleCloseDialog} size="xl">
          <Modal.Header>
            {editIndex ? "Edit Blog" : "Add New Blog"}
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row justify-content-around">
                <div className="col-lg-5 my-2">
                  <label className="form-label" for="blogimage">
                    Image
                  </label>
                  <input
                    name="blogimage"
                    placeholder="Deworm Report"
                    type="file"
                    id="blogimage"
                    className="form-control"
                    value={blogdata.blogimage}
                    {...register("blogimage")}
                  />
                </div>
                <div className="col-lg-5 my-2">
                  <label className="form-label" for="blogtitle">
                    Title
                  </label>
                  <input
                    name="blogtitle"
                    placeholder="Deworm Report"
                    type="text"
                    id="blogtitle"
                    className="form-control"
                    value={blogdata.blogtitle}
                    {...register("blogtitle")}
                  />
                </div>
                <div className="col-lg-5 my-2">
                  <label className="form-label" for="blogheading">
                    Heading
                  </label>
                  <input
                    name="blogheading"
                    placeholder="Deworm Report"
                    type="text"
                    id="blogheading"
                    className="form-control"
                    value={blogdata.blogheading}
                    {...register("blogheading")}
                  />
                </div>
                <div className="col-lg-5 my-2">
                  <label className="form-label" for="blogdescription">
                    Description
                  </label>
                  <input
                    name="blogdescription"
                    placeholder="Deworm Report"
                    type="text"
                    id="blogdescription"
                    className="form-control"
                    value={blogdata.blogdescription}
                    {...register("blogdescription")}
                  />
                </div>
                <div className="col-lg-5 my-2">
                  <label className="form-label" for="blogtopic">
                    topic
                  </label>
                  <input
                    name="blogtopic"
                    placeholder="Deworm Report"
                    type="text"
                    id="blogtopic"
                    className="form-control"
                    value={blogdata.blogtopic}
                    {...register("blogtopic")}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-25 mt-3">
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
