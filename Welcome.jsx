import React from "react";
import "../Css/Welcome.css";

const Welcome = () => {
  return (
    <div>
      {/*          <!-- About Area Start Here --> */}
      <section className=" bg-light pb-5">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-10 my-auto">
              <div className="about-box-layout3">
                <h1 className="item-title">
                  Welcome To <br /> Sehat Khidmat
                </h1>
                <p>
                  On the other hand we denounce with righteous indignation and
                  dislike mr turet suscipit lobortis nisl ut aliquip erat
                  volutpat autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu
                  feugiate.pat autem vel eum iriure dolor in hendrerite.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row justify-content-around">
                <div className=" text-center col-md-8 col-10 col-lg-5 lg-ms-5 bg-white py-5 mt-lg-4 shadow">
                  <div className="about-box-layout4">
                    <div className="media flex-column">
                      <div className="item-icon mx-auto">
                        <i className="fa-solid fa-stethoscope text-primary"></i>
                      </div>
                      <div className="media-body space-md mt-4">
                        <h3 className="item-title">Professional Staff</h3>
                        <p className="mb-0">
                          On the other hand we denounce with righteous
                          indignation and dislik men who are so beguiled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-10 col-lg-5 bg-white py-5 mt-4 text-center shadow">
                  <div className="about-box-layout4">
                    <div className="media flex-column">
                      <span className="item-icon mx-auto">
                        <i className="fa-solid fa-briefcase-medical text-primary"></i>
                      </span>
                      <span className="media-body space-md mt-4">
                        <h3 className="item-title">Emergency Treatment</h3>
                        <p className="mb-0">
                          On the other hand we denounce with righteous
                          indignation and dislik men who are so beguiled.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-10 col-lg-5 lg-ms-5 bg-white py-5 mt-4 mt-lg-3 text-center shadow">
                  <div className="about-box-layout4">
                    <div className="media flex-column">
                      <span className="item-icon mx-auto">
                        <i className="fa-solid fa-user-doctor text-primary"></i>
                      </span>
                      <span className="media-body space-md mt-4">
                        <h3 className="item-title">Trusted Doctors</h3>
                        <p className="mb-0">
                          On the other hand we denounce with righteous
                          indignation and dislik men who are so beguiled.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-10 col-lg-5 lg-ms-5 bg-white py-5 mt-4 mt-lg-3 text-center shadow">
                  <div className="about-box-layout4">
                    <div className="media flex-column">
                      <span className="item-icon mx-auto">
                        <i className="bi bi-clock text-primary"></i>
                      </span>
                      <span className="media-body space-md mt-4">
                        <h3 className="item-title">24/7 Services</h3>
                        <p className="mb-0">
                          On the other hand we denounce with righteous
                          indignation and dislik men who are so beguiled.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Area End Here --> */}
    </div>
  );
};

export default Welcome;
