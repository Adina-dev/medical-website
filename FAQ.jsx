import React from "react";
import "../Css/FAQ.css";


const FAQ = () => {
  return (
    <div>

      {/* <!-- Inne Page Banner Area Start Here --> */}
      <section
        className="inner-page-banner bg-common inner-page-top-margin sec1-bg2"
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1 className="text-white">Faq’s Page</h1>
                <ul>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0 text-white"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className=" text-white">Faq’s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inne Page Banner Area End Here -->
        <!-- Faq Content Area Start Here --> */}
      <section className="faq-wrap-layout1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-12">
              <div className="faq-content-layout1">
                <div className="item-heading">
                  <h2 className="item-title title-bar-primary4">
                    Frequently Ask Any Question
                  </h2>
                  <p className="sub-title">
                    Have you any kind of question, please feel free ask us.
                  </p>
                </div>
                <div className="faq-list-layout1">
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
                              settingaindustry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since thelong
                              established fact thaaret
                              Moimply dummy text of the printing and type
                              settingaindustry. Lorem Ipsum has been the
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
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the
                            transition does limit overflow.
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
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the
                            transition does limit overflow.
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
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the
                            transition does limit overflow.
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
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-none d-lg-block">
              <div className="faq-img-layout1">
                <img src="faq.png" alt="about" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Faq Content Area End Here -->
        <!-- Faq Form Area Start Here --> */}
      <section className="faq-wrap-layout2 bg-light-accent100">
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-lg-8">
              <div className="faq-ask-question-layout1">
                <h2 className="title">Ask Us if you have any question?</h2>
                <form className="faq-question-box">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="form-control"
                        name="Phone"
                        data-error="Phone field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="Last Name *"
                        className="form-control"
                        name="email"
                        data-error="E-mail field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="E-mail *"
                        className="form-control"
                        name="subject"
                        data-error="Subject field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Phone *"
                        className="form-control"
                        name="subject"
                        data-error="Subject field is required"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <select className="select2 w-100 border-secondary-subtle py-3 ps-3 text-secondary">
                        <option value="0">Select Subject *</option>
                        <option value="1">Dr. Mou</option>
                        <option value="2">Dr. Kalvin</option>
                        <option value="3">Dr. Mark Willy</option>
                        <option value="4">Dr. Zinia Zara</option>
                      </select>
                      <div className="help-block with-errors"></div> 
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message*"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows="7"
                        cols="20"
                        data-error="Message field is required"
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <button className="item-btn">Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Faq Form Area End Here --> */}


    </div>
  );
};

export default FAQ;
