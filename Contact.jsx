import React from 'react'
import '../Css/Contact.css'

const Contact = () => {
  return (
    <div>
           {/* <!-- Inne Page Banner Area Start Here --> */}
        <section className="inner-page-banner bg-common inner-page-top-margin">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1 className='text-light'>Contact Us</h1>
                            <ul>
                                <li>
                                    <a className='text-light link-offset-2 link-underline link-underline-opacity-0' href="#">Home</a>
                                </li>
                                <li className='text-light'>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Inne Page Banner Area End Here -->
        <!-- Contact Us Area Start Here --> */}
        <section className="contact-wrap-layout">
            <div className="container">
                <div className="google-map-area mt-5">
                    <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.779174546109!2d70.30317297335316!3d28.42591937577814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375b14d168c833%3A0xdca4bed1b9ea0172!2sPromotezz%20International!5e0!3m2!1sen!2s!4v1706272536403!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact-box-layout1">
                            <h3 className="title title-bar-primary4">Leave Us Message</h3>
                            <form className="contact-form-box" id="contact-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="First Name *" className="form-control" name="first_name"
                                            data-error="Phone field is required" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Last Name *" className="form-control" name="last_name"
                                            data-error="E-mail field is required" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" placeholder="E-mail *" className="form-control" name="email"
                                            data-error="Subject field is required" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Phone *" className="form-control" name="phone"
                                            data-error="Subject field is required" required/>
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
                                        <textarea placeholder="Message*" className="textarea form-control" name="message"
                                            id="form-message" rows="7" cols="20" data-error="Message field is required"
                                            required></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-12 form-group margin-b-none">
                                        <button type="submit" className="item-btn">Submit Message</button>
                                    </div>
                                </div>
                                <div className="form-response"></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="contact-box-layout1">
                            <h3 className="title title-bar-primary4">Address</h3>
                            <div className="contact-info">
                                <ul className='list-unstyled mt-4'>
                                    <li><i className="fas fa-map-marker-alt"></i>Medilink Technological Limited</li>
                                    <li><i className="far fa-envelope"></i>example@example.com</li>
                                    <li><i className="fas fa-phone"></i>(+123) 88 44400</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact Us Area End Here --> */}



    </div>
  )
}

export default Contact