// import React from "react";
// import "../Css/Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbarr">
//       {/* Header Area Start Here */}
//       <header id="header_1">
//         <div className="header-top-bar top-bar-border-bottom bg-dark d-none d-md-block">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-8 col-lg-12 col-md-12 col-12 header-contact-layout1">
//                 <ul className="ps-0">
//                   <li className="text-light me-4">
//                     <i className="fas fa-phone"></i>Call: 123 884400
//                   </li>

//                   <li className="text-light">
//                     <i className="far fa-clock"></i>Mon - Fri: 9.00am - 11.00pm
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="header-menu-area header-menu-layout1">
//           <div className="container">
//             <div className="row no-gutters d-flex align-items-center">
//               <div className="col-lg-2 col-md-2 logo-area-layout1">
//                 <a href="index-2.html" className="temp-logo">
//                   <img src="img/logo.png" alt="logo" className="img-fluid" />
//                 </a>
//               </div>
//               <div className="col-lg-7 col-md-7 position-static">
//                 <div className="template-main-menu">
//                   <nav id="dropdown" className="navbar navbar-expand-lg">
//                     {/* Bootstrap responsive navigation */}
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarNav"
//                       aria-controls="navbarNav"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                       <ul className="navbar-nav">
//                         <li className="nav-item">
//                           <a className="nav-link" href="/">
//                             Home
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/About">
//                             About
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/Blogspage">
//                             Blogs
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/Doctors">
//                             Doctors
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/Shop">
//                             Shop
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/FAQ">
//                             FAQ
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="/Contact">
//                             Contact
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3">
//                 <div className="header-action-items-layout1">
//                   <ul className="navbar-nav">
//                     <li className="nav-item d-none">
//                       <form id="top-search-form" className="header-search-dark">
//                         <input
//                           type="text"
//                           className="search-input"
//                           placeholder="Search...."
//                           required=""
//                         />
//                         <button className="search-button">
//                           <i className="flaticon-search"></i>
//                         </button>
//                       </form>
//                     </li>
//                     <li className="nav-item">
//                       <a
//                         href="/appoinment"
//                         className="nav-link action-items-primary-btn bg-primary link-offset-2 link-underline link-underline-opacity-0 my-2"
//                       >
//                         Appointment<i className="fas fa-chevron-right"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* Header Area End Here */}
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import "../Css/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarr">
      <header id="header_1">
        <div className="header-top-bar top-bar-border-bottom bg-dark d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-12 col-md-12 col-12 header-contact-layout1">
                <ul className="ps-0">
                  <li className="text-light me-4">
                    <i className="fas fa-phone"></i> Call: 123 884400
                  </li>
                  <li className="text-light">
                    <i className="far fa-clock"></i> Mon - Fri: 9.00am - 11.00pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
    <div className="container-fluid">
    <Link className="fw-bold fs-4 link-offset-2 link-underline link-underline-opacity-0" to="/"> MEDICAL</Link>
      {/* <a className="navbar-brand" href="#">
        <img src="img/logo.png" alt="Logo"/>
      </a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/"> Home</Link>
           
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/About"> About</Link>

          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Blogspage"> Blog</Link>
     
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Doctors"> Doctors</Link>
         
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Shop"> Shop</Link>
          
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/FAQ"> FAQ</Link>
 
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Contact"> Contact</Link>

          </li>
        </ul>
        <form className="d-flex">
          <Link to="/Appoinment" className="btn btn-appointment">Appointment</Link>
        </form>
      </div>
    </div>
  </nav>
      </header>
    </div>
  );
};

export default Navbar;
