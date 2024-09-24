import React from "react";
import "../Css/Shop.css";
import { useNavigate } from "react-router-dom";

const Shop = () => {
 const navigate = useNavigate();
 
  const checkout = ()=>{
navigate("/Checkout")

  }
  return (
    <div>
      {/* <!-- Shop Area Start Here --> */}
      <section className="shop-wrap-layout1 bg-light-primary100">
        <div className="container-fluid">
          <div className="row mx-3">
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5">
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button onClick={checkout} className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5">
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5">
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5">
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div

                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5"
                >
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div
   
                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5"
                >
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div
  
                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5"
                >
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div
  
                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5"
                >
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div
    
                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 mt-5"
                >
                  <div className="shop-box-layout1 margin-b-30 border border-secondary-subtle pb-3">
                    <div className="item-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                        alt="shop"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-content text-center">
                      <h4 className="item-title mb-1">
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0"
                          href="/Productdetails"
                        >
                          Medical Bottle
                        </a>
                      </h4>
                      <p className="mt-2 mb-1">FREE DELIVERY</p>
                      <p className="fw-bold text-primary mb-3 fs-5">Rs.300/-</p>
                      <button className="bg-primary py-2 px-5 border-0 text-light">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="pagination-layout2 margin-t-30 mt-5 pt-5">
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  >
                    Previous
                  </a>
                </li>
                <li className="active">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget-area sidebar-break-md col-xl-3 col-lg-4 col-12 ps-5">
              <div className="widget widget-search">
                <h3 className="section-title title-bar-primary">Search Prodcut</h3>
                <div className="input-group stylish-input-group bg-primary-subtle mt-4">
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Search Here . . ."
                  />
                  <span className="input-group-addon">
                    <button className=" px-0 pt-3 mx-3 " type="submit">
                      <span className="flaticon-search" aria-hidden="true">
                        <i className="bi bi-search fs-5 p-0"></i>
                      </span>
                    </button>
                  </span>
                </div>
              </div>

              <div className="widget widget-categories">
                <h3 className="section-title title-bar-primary">Categories</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Dental
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Laboratory
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-offset-2 link-underline link-underline-opacity-0"
                      href="#"
                    >
                      Eye
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-top-rated">
                <h3 className="section-title title-bar-primary">
                  Related Products
                </h3>
                <ul className="list-unstyled">
                  <li className="media d-flex mt-4">
                    <div className="top-rated-img col-5 px-0">
                      <a href="#">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                          className="img-responsive img-fluid"
                          alt="related"
                        />
                      </a>
                    </div>
                    <div className="media-body space-md top-rated-content col-7">
                      <h4>
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 ms-2"
                          href="#"
                        >
                          Medicine
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="media d-flex">
                    <div className="top-rated-img col-5 px-0">
                      <a href="#">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                          className="img-responsive img-fluid"
                          alt="related"
                        />
                      </a>
                    </div>
                    <div className="media-body space-md top-rated-content col-7">
                      <h4>
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 ms-2"
                          href="#"
                        >
                          Medicine
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="media d-flex">
                    <div className="top-rated-img col-5 px-0">
                      <a href="#">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WF_YS6V_XSRU_f-a5dzEwTffIK7NFmV-Gw&usqp=CAU"
                          className="img-responsive img-fluid"
                          alt="related"
                        />
                      </a>
                    </div>
                    <div className="media-body space-md top-rated-content col-7">
                      <h4>
                        <a
                          className="link-offset-2 link-underline link-underline-opacity-0 ms-2"
                          href="#"
                        >
                          Medicine
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Area End Here --> */}
    </div>
  );
};

export default Shop;
