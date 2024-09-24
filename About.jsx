import React from "react";
import "../Css/About.css";


const About = () => {
  return (
    <div>
      {/* <!-- Inne Page Banner Area Start Here --> */}
      <section
        className="inner-page-banner bg-common inner-page-top-margin sec1-bg2"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1 className="text-light">About Us</h1>
                <ul>
                  <li>
                    <a
                      className="text-light link-offset-2 link-underline link-underline-opacity-0"
                      href="index-2.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="text-light" href="index-2.html">
                    About 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inne Page Banner Area End Here -->

      <!-- About Us Start Here --> */}
      <section className="about-wrap-layout5">
        <div className="container-fluid my-5 px-0">
          <div className="row justify-content-center first">
            <div className="col-lg-6 col-11 bg-light pt-5 side-text px-5 shadow">
              <div className="about-box-layout13">
                <h2 className="item-title">
                  Our Best Laboratory
                  <span>Medical Center</span>
                </h2>
                <p>
                  We offer extensive medical services for our patients recommend
                  that you use officia.simply dummy text of theprinting and
                  typesetting industry medical officia.simply dummy text of
                  theprinting and typesetting industry.
                </p>
                <ul className="list-info">
                  <li>Qualified Staff of Doctors</li>
                  <li>Feel like you are at Home Services</li>
                  <li>24x7 Emergency Services</li>
                  <li>Easy and Affordable Billing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-box-layout14">
                <div className="item-video">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-XUUNRptF9vz7aLSZCZNKAgaG9QPbzN_og&usqp=CAU"
                    className="img-fluid about"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Area End Here --> 
        <!-- Department Area Start Here --> */}
      <section className="departments-wrap-layout1 bg-light-accent100 bg-light">
        <div className="container menu-list-wrapper">
          <div className="section-heading heading-dark text-center heading-layout1">
            <h2>Our Departments</h2>
            <p>Dedicated Services</p>
          </div>
          <div className="row menu-list">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 menu-item">
              <div className="departments-box-layout1 shadow-lg">
                <div className="item-img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="department"
                    className=" imag img-fluid"
                  />
                  <div className="item-btn-wrap text-white">
                    <h3 className="item-title text-white">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover text-white"
                        href="single-department.html"
                      >
                        Cardiology
                      </a>
                    </h3>
                    <ul className="department-info list-unstyled">
                      <li>
                        <i className="flaticon-doctor"></i>
                        <span>10 </span>Specialist Docotrs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 menu-item">
              <div className="departments-box-layout1 shadow-lg">
                <div className="item-img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="department"
                    className="img-fluid"
                  />
                  <div className="item-btn-wrap text-white">
                    <h3 className="item-title text-white">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover text-white"
                        href="single-department.html"
                      >
                        Cardiology
                      </a>
                    </h3>
                    <ul className="department-info list-unstyled">
                      <li>
                        <i className="flaticon-doctor"></i>
                        <span>10 </span>Specialist Docotrs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 menu-item">
              <div className="departments-box-layout1 shadow-lg">
                <div className="item-img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="department"
                    className="img-fluid"
                  />
                  <div className="item-btn-wrap text-white">
                    <h3 className="item-title text-white">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover text-white"
                        href="single-department.html"
                      >
                        Cardiology
                      </a>
                    </h3>
                    <ul className="department-info list-unstyled">
                      <li>
                        <i className="flaticon-doctor"></i>
                        <span>10 </span>Specialist Docotrs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 menu-item">
              <div className="departments-box-layout1 shadow-lg">
                <div className="item-img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="department"
                    className="img-fluid"
                  />
                  <div className="item-btn-wrap text-white">
                    <h3 className="item-title text-white">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover text-white"
                        href="single-department.html"
                      >
                        Cardiology
                      </a>
                    </h3>
                    <ul className="department-info list-unstyled">
                      <li>
                        <i className="flaticon-doctor"></i>
                        <span>10 </span>Specialist Docotrs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="loadmore loadmore-layout1 margin-t-20 border-primary"
            data-count="4"
          >
            <a
              href="#"
              className="item-btn text-white-hover link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover "
            >
              More Departments
            </a>
          </div>
        </div>
      </section>
      {/* // <!-- Department Area End Here -->
        // <!-- Progress Area Start Here --> */}
      <section
        className="progress-wrap-layout2 bg-overlay bg-overlay-primary80 bg-common parallaxie"
        data-bg-image="src/img/imageedit_5_6694658640.gif"
      >
        <div className="container">
          <div className="row">
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="59">
                  59
                </div>
                <p>Health Sections</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="4709">
                  4709
                </div>
                <p>Happy Patients</p>
              </div>
            </div>
            <div className="progress-box-layout2 col-md-4">
              <div className="inner-item">
                <div className="counting-text counter" data-num="128">
                  128
                </div>
                <p>Quality Doctors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Progress Area End Here -->
        // <!-- Why Choose Area Start Here --> */}
      <section className="why-choose-wrap-layout1 pb-5">
        <div className="container">
          <div className="row">
            <div className="faq-list-layout1 col-lg-6 col-12">
              <div className="panel-group" id="accordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Moimply dummy text of the printing and type
                          settingaindustry. Lorem Ipsum has been the industry’s
                          standard dummy text ever since thelong established
                          fact thaaret Moimply dummy text of the printing and
                          type settingaindustry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since thelong
                          established fact thaaret
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the, though the transition
                        does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the, though the transition
                        does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseF"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #4
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the, though the transition
                        does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the, though the transition
                        does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-box-layout2 col-lg-6 col-11 mt-5 mt-lg-0">
              <img
                src="faqt.png"
                alt="about"
                className="img-fluid h-100 w-75"
              />
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Why Choose Area End Here -->
    
        // <!-- Brand Area Start Here --> */}
      {/* <section className='brands bg-light'>
        <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="src/img/brand9.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
        </section> */}

      {/* <!-- Brand Area End Here --> */}
    </div>
  );
};

export default About;
