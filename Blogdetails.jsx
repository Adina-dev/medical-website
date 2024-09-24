import React from "react";
import "../Css/Blogdetails.css";

const Blogdetails = () => {
  return (
    <div>
      {/* <!-- Inne Page Banner Area Start Here --> */}
      <section
        class="inner-page-banner bg-common inner-page-top-margin"
        data-bg-image="img/figure/figure2.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumbs-area">
                <h1 className="text-light">Detail</h1>
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
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inne Page Banner Area End Here --> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-11 shadow my-4">
            <img className="img-fluid mt-5" src="src/img/blog1.jpg" alt="" />
            <div className="d-flex gap-4 mt-2">
              <div className="text-primary">
           <span><i class="fa-solid fa-user me-2"></i></span>
                <span>writer name</span>
              </div>
              <div>
                <div className="text-primary">
                <span><i class="fa-regular fa-calendar-days me-2"></i></span>
                <span>8 feb 2024</span>
                </div>

          
              </div>
            </div>
            <h2 className="mt-3 me-5">  My dental office need a blog area scrambled type</h2>
            <p className="me-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod, rem dolor quis quidem nesciunt sint animi, aut necessitatibus pariatur veniam exercitationem ab numquam dignissimos accusamus deserunt, soluta adipisci inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum odit est quisquam cum ipsum, pariatur illum impedit distinctio debitis, optio animi nesciunt magnam officia dolor, vero autem voluptate? Qui.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsam placeat consequatur nobis rerum aperiam voluptates consectetur assumenda? Veritatis, aperiam! Quae adipisci et ipsa sapiente ea corrupti a maxime hic!
            </p>
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src="src\img\department1.jpg" alt="" />
              </div>
              <div className="col-6">
                <img className="img-fluid"  src="src\img\department1.jpg" alt="" />
              </div>

            </div>
            <p className="mt-3 me-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis quaerat accusantium quo, tenetur eligendi? Amet similique, minima in atque voluptatibus impedit fugiat blanditiis iste, quasi deserunt omnis suscipit facere.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit quis, eligendi quia cumque neque deleniti ut. Odio eveniet saepe omnis! Nostrum expedita, eius saepe voluptates eligendi esse. Officiis, quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
