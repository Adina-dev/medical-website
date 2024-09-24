import React from "react";

const Payment = () => {
  return (
    <div className="my-5 pt-2 mx-5">
      <div className="container-fluid mt-5 px-5 ">
        <div className="row justify-content-between">
          <div className="col-lg-6 shadow py-4 bg-light">
            <h3 className="mt-4">Personal Information</h3>
            <input
              className=" mt-3 w-100 py-2 px-3 inpt bg-light border-1"
              type="text"
              placeholder="Full name"
            />{" "}
            <br />
            <input
              className="mt-3 w-100 py-2 px-3 inpt bg-light border-1"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="mt-3 w-100 py-2 px-3 inpt bg-light border-1"
              type="text"
              placeholder="Email address"
            />
            <br /> <hr />
            <h3 className="mb-1 mt-5">Address Information</h3>
            <input
              className="mt-3 w-100 py-2 px-3 inpt bg-light border-1 "
              type="text"
              placeholder="City"
            />
            <input
              className="mt-3 w-100 py-2 px-3 inpt bg-light border-1"
              type="text"
              placeholder="Address"
            />
            <div className="d-flex justify-content-center">
              <button className="bg-primary text-light border-0 mt-3 py-2 px-3">
                Completed
              </button>
            </div>
          </div>
          <div className="col-5">
            <div className=" bg-primary-subtle p-5">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid border border-dark"
                    src="src/img/appratus.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 ps-0 mt-2">
                  <p className="mb-1">product name</p>
                  <p>Qty: 0</p>
                </div>
                <div className="col-3 mt-3">Rs. 000</div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <img
                    className="img-fluid border border-dark"
                    src="src/img/appratus.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 ps-0 mt-2">
                  <p className="mb-1">product name</p>
                  <p>Qty: 0</p>
                </div>
                <div className="col-3 mt-3">Rs. 000</div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <img
                    className="img-fluid border border-dark"
                    src="src/img/appratus.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 ps-0 mt-2">
                  <p className="mb-1">product name</p>
                  <p>Qty: 0</p>
                </div>
                <div className="col-3 mt-3">Rs. 000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
