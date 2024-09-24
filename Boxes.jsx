import React from "react";
import "../Css/Boxes.css";

const Boxes = () => {
  return (
    <div className="bg-light">
      {/* <!-- Service Area Start Here --> */}
      <section className="service-wrap-layout1 bg-light-primary100">
        <div className="container-fluid">
          <div className="row no-gutters service-inner-layout1 justify-content-between">
            <div className="single-item  mt-3 mt-lg-0 col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1 mx-2">
                <div className="item-icon">
                  <i className="fa-solid fa-user-doctor text-light"></i>
                </div>
                <h4 className="item-title">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="single-service.html"
                  >
                    Expert Doctors
                  </a>
                </h4>
                <p>
                  Accurately fill out the required data and get a free
                  appointment with the doctor of your choice.
                </p>
                <button className="border-white text-primary py-2 px-5 rounded-4">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fw-bold"
                    href=""
                  >
                    Appointmnet
                  </a>
                </button>
              </div>
            </div>
            <div className="single-item mt-3 mt-lg-0 col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1 me-2">
                <div className="item-icon">
                  <i className="fa-solid fa-pills"></i>
                </div>
                <h4 className="item-title">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="single-service.html"
                  >
                    Medicine
                  </a>
                </h4>
                <p>
                  Upload or scan your prescription and receive your prescribed
                  medications.
                </p>
                <button className="border-white text-primary py-2 px-5 rounded-4">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fw-bold"
                    href=""
                  >
                    Upload
                  </a>
                </button>
              </div>
            </div>

            <div className="single-item mt-3 mt-lg-0  col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1 me-2">
                <div className="item-icon">
                  <i className="fa-solid fa-flask-vial text-light"></i>
                </div>
                <h4 className="item-title">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="single-service.html"
                  >
                    Lab Test
                  </a>
                </h4>
                <p>
                  Upload or scan your prescribed lab tests from the doctor and
                  enjoy a free appointment at the lab.{" "}
                </p>
                <button className="border-white text-primary py-2 px-5 rounded-4">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fw-bold"
                    href=""
                  >
                    Upload
                  </a>
                </button>
              </div>
            </div>
            <div className="single-item mt-3 mt-lg-0  col-lg-3 col-md-6 col-12">
              <div className="service-box-layout1 me-2">
                <div className="item-icon">
                  <i className="fa-solid fa-briefcase-medical text-light"></i>
                </div>
                <h4 className="item-title">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="single-service.html"
                  >
                    Emergency
                  </a>
                </h4>
                <p>
                  Feel free to contact us in case of an emergency or for any
                  inquiries at this number.
                </p>
                <button className="border-white text-primary py-2 nmbr-btn rounded-4">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fw-bold"
                    href="tel:+92 0000000000"
                  >
                    +92 0000000000
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
