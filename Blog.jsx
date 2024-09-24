import React from "react";
import "../Css/Blog.css";

const Blog = () => {
  return (
    <div>
      {/* <!-- Blog-Area Start Here --> */}
      <section className="blog-wrap-layout1 bg-light py-5">
        <div className="container">
          <div className="section-heading heading-dark text-center heading-layout1 pb-5">
            <h1>Latest From Blog</h1>
            <h5>Modern Hospital Facilities</h5>
          </div>
          <div className="row jusify-content-around">
            <p className="fs-4 text-end fw-semibold text-primary-emphasis">
              View more <i className="bi bi-arrow-right-circle-fill"></i>{" "}
            </p>
            <div className=" col-lg-4 col-11 mx-auto">
              <div className=" shadow-sm px-0">
                <div className="blog-box-layout2">
                  <div className="item-img">
                    <a href="single-news.html">
                      <img
                        src="resize.jpg"
                        className="img-fluid"
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="post-date">17/09/2018</div>
                    <h3 className="item-title">
                      <a
                        className=" link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover"
                        href="single-news.html"
                      >
                        Your Medical Records are Safe now a days.
                      </a>
                    </h3>
                    <p>
                      Medicallaore nostrud exerci tation ulm hedi corper turet
                      ipsum dolor sit amet, consectetuer adipiscing elitertye.
                    </p>
                    <div className="post-actions-wrapper">
                      <button className="text-primary fw-semibold bg-white border-0">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-11 mx-auto">
              <div className=" shadow-sm px-0">
                <div className="blog-box-layout2">
                  <div className="item-img">
                    <a href="single-news.html">
                      <img
                        src="resize.jpg"
                        className="img-fluid"
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="post-date">17/09/2018</div>
                    <h3 className="item-title">
                      <a
                        className=" link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover"
                        href="single-news.html"
                      >
                        Your Medical Records are Safe now a days.
                      </a>
                    </h3>
                    <p>
                      Medicallaore nostrud exerci tation ulm hedi corper turet
                      ipsum dolor sit amet, consectetuer adipiscing elitertye.
                    </p>
                    <div className="post-actions-wrapper">
                      <button className="bg-white fw-semibold border-0 text-primary">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-11 mx-auto">
              <div className=" shadow-sm px-0">
                <div className="blog-box-layout2">
                  <div className="item-img">
                    <a href="single-news.html">
                      <img
                        src="resize.jpg"
                        className="img-fluid"
                        alt="blog"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="post-date">17/09/2018</div>
                    <h3 className="item-title">
                      <a
                        className=" link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-0-hover"
                        href="single-news.html"
                      >
                        Your Medical Records are Safe now a days.
                      </a>
                    </h3>
                    <p>
                      Medicallaore nostrud exerci tation ulm hedi corper turet
                      ipsum dolor sit amet, consectetuer adipiscing elitertye.
                    </p>
                    <div className="post-actions-wrapper">
                      <button className="bg-white fw-semibold border-0 text-primary">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog-Area End Here --> */}
    </div>
  );
};

export default Blog;
