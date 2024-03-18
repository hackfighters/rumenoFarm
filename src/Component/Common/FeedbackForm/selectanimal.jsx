import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import MultiStepForm from "./goatdetail";
import { Helmet } from "react-helmet";

const FrmAftLog = () => {


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Animals-Details-Rumeno</title>
                <link rel="canonical" href="https://rumeno.in/FrmAftLog" />
            </Helmet>
    <div className="">
      <MultiStepForm />
    </div>
    </>
  );
};

export default FrmAftLog;
