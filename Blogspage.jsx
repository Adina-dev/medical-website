import React from "react";
import "../Css/Blogspage.css";
import { useNavigate } from "react-router-dom";

const Blogspage = () => {
  const Navigate = useNavigate();

  const blog = ()=>{
    Navigate("/Blogdetails")
      }
  return (
    <div>
      {/* <!-- Inne Page Banner Area Start Here --> */}
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1 className="fw-bold text-white">Health Blogs</h1>
                <ul className="mt-3 ms-1">
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0 fs-5 text-light"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="fs-5 text-light">Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inne Page Banner Area End Here --> */}

      {/* <!-- Blog Grid Area Start Here --> */}
      <section className="blog-wrap-layout2 bg-light-primary100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-6    col-12">
              <div className="row justify-content-center">
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="single-item col-md-5 col-sm-12 col-12">
                  <div className="blog-box-layout4 p-3">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img
                          src="blog1.jpg"
                          className="img-fluid"
                          alt="blog"
                        />
                      </a>
                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>
                    <div className="post-actions-wrapper mt-3">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="link-offset-2 link-underline link-underline-opacity-0"
                            href="#"
                          >
                            <i className="fa-regular fa-user me-2"></i>by
                            <span className="text-black fw-medium"> admin</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item-content ps-0">
                      <h5 className="item-title">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 fw-semibold text-primary-emphasis"
                          href="single-news.html"
                        >
                          My dental office need a blog area scrambled type
                        </a>
                      </h5>
                    </div>
                    <div className="post-actions-wrapper">
                      <button onClick={blog} className="bg-white fw-medium rounded-3 border-primary border-1 px-2 py-1 text-primary-emphasis mb-3 mt-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>

              </div>
              <ul className="pagination-layout1 margin-t-20">
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fs-5"
                    href="#"
                  >
                    Previous
                  </a>
                </li>
                <li className="active">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fs-5"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fs-5"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fs-5"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0 fs-5"
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget-area sidebar-break-md col-xl-4 col-lg-6 col-12 px-5">
              <div className="widget widget-search">
                <h3 className="section-title title-bar-primary">Search Keywords</h3>
                <div className="input-group stylish-input-group bg-primary-subtle">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here . . ."
                  />
                  <span className="input-group-addon">
                    <button className="p-0 my-3 mx-3" type="submit">
                      <span className="flaticon-search" aria-hidden="true">
                        <i className="bi bi-search fs-4 p-0"></i>
                      </span>
                    </button>
                  </span>
                </div>
              </div>
              <div className="widget widget-categories">
                <h3 className="section-title title-bar-primary mt-5">Categories</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Cardiology
                      <span>15</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Dental
                      <span>10</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Laboratory
                      <span>14</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Research
                      <span>13</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Eye
                      <span>19</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-recent">
                <h3 className="section-title title-bar-primary mt-5">
                  Related Posts
                </h3>
                <div className="media mt-3 d-flex">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src="blog1.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="media-body space-sm col-6 ms-3">
                    <div className="post-date fw-bold">June 27, 2018</div>
                    <h4 className="post-title">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        Achieving Better Health Cancer treatment for.
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="media mt-3 d-flex">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src="blog1.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="media-body space-sm col-6 ms-3">
                    <div className="post-date fw-bold">June 27, 2018</div>
                    <h4 className="post-title">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        Achieving Better Health Cancer treatment for.
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="media mt-3 d-flex">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src="blog1.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="media-body space-sm col-6 ms-3">
                    <div className="post-date fw-bold">June 27, 2018</div>
                    <h4 className="post-title">
                      <a
                        className="link-offset-2 link-underline link-underline-opacity-0"
                        href="#"
                      >
                        Achieving Better Health Cancer treatment for.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="widget widget-tag">
                <h3 className="section-title title-bar-primary">Tags</h3>
                <ul className="ps-0">
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Dental
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Eye Care
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Labrotary
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Care
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Health
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Modern Clinic
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Grid Area End Here --> */}
    </div>
  );
};

export default Blogspage;
