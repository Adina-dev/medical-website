import React from "react";

const Productdetails = () => {
  return (
    <div className="my-4">
      <div className="product-page container mt-5 pt-5">
        {/* <!-- Product section begins 408x261 --> */}
        <div className="product-section row justify-content-between">
          <div className="product-img-div col-lg-5 col-12">
            <img
              className="product-img shadow img-fluid "
              src="src/img/shop2.png"
            />
          </div>

          <div className="col-lg-6" id="rightDiv">
            <span className="content-block heading">Product Name</span>
            <div id="pricingDiv">
              <span className="price oldPrice">$100</span>
              <span className="price salePrice">$6.95</span>
            </div>

            <p id="productDescription" className="content-block body-text-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.{" "}
            </p>
<br />
           <input className="ps-2 py-1 quantity me-5" type="number" placeholder="1" />

            <button className="button py-2 px-5" id="productButton">
              Add to cart
            </button>

            {/* <!-- Ingredients section begins --> */}
            <div className="product-deatils-block">
              <span className="content-block subtitle">Ingredients</span>
              <span className="content-block body">
                Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod, tempor incididunt, ut labore, et dolore, magna aliqua
              </span>
            </div>

            <div className="product-deatils-block">
              <span className="content-block subtitle">Essential Oils</span>
              <span className="content-block body">
                Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod, tempor incididunt, ut labore, et dolore, magna aliqua
              </span>
            </div>

            {/* <!-- Ingredients section ends --> */}
          </div>
        </div>
        {/* <!-- Product section ends -->
  
  <!-- More products section begins --> */}

        <div className="mt-5 pt-5">
          <span
            id="moreCollectionTitle"
            className="content-block centered subheading container fw-bolder fs-3"
          >
            You might like these
          </span>

          <div className="more-card-collection row mt-4">
            {/* <!-- product card begins --> */}
            <div className="product-card-mini col-lg-3">
              <div className="p-4 shadow">
                <img className="product-card-img-mini" src="src/img/shop2.png" />
                <span className="content-block subtitle">Product Name</span>
                <br />
                <span className="priceMini oldPrice">$8.95</span>
                <span className="priceMini salePrice">$6.95</span>
              </div>
            </div>
            {/* <!-- product card ends --> */}

            {/* <!-- product card begins --> */}
            <div className="product-card-mini col-lg-3">
              <div className="p-4 shadow">
                <img className="product-card-img-mini" src="src/img/shop2.png" />
                <span className="content-block subtitle">Product Name</span>      <br />
                <span className="priceMini oldPrice">$8.95</span>
                <span className="priceMini salePrice">$6.95</span>
              </div>
            </div>
            {/* <!-- product card ends --> */}

            {/* <!-- product card begins --> */}
            <div className="product-card-mini  col-lg-3">
              <div className="p-4 shadow">
                <img className="product-card-img-mini" src="src/img/shop2.png" />
                <span className="content-block subtitle">Product Name</span>     <br />
                <span className="priceMini oldPrice">$8.95</span>
                <span className="priceMini salePrice">$6.95</span>
              </div>
            </div>
            {/* <!-- product card ends --> */}
            {/* <!-- product card begins --> */}
            <div className="product-card-mini col-lg-3">
              <div className="p-4 shadow">
                <img className="product-card-img-mini" src="src/img/shop2.png" />
                <span className="content-block subtitle">Product Name</span>     <br />
                <span className="priceMini oldPrice">$8.95</span>
                <span className="priceMini salePrice">$6.95</span>
              </div>
            </div>
            {/* <!-- product card ends --> */}
          </div>
        </div>

        {/* <!-- More products section ends --> */}
      </div>
    </div>
  );
};

export default Productdetails;
