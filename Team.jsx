import React, { useState } from 'react';
import '../Css/Team.css';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const Team = () => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 5) {
      changeSlide(1);
    } else if (diff < -5) {
      changeSlide(-1);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const diff = startX - currentX;

    if (diff > 5) {
      changeSlide(1);
    } else if (diff < -5) {
      changeSlide(-1);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    slidesPerView: 'auto', // This will make sure all slides are visible without extra space
  });
  

  const changeSlide = (direction) => {
    const cardWidth = document.querySelector('.team-box-layout4').offsetWidth;
    const maxIndex = 9 // Assuming you have 5 cards

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > maxIndex - 3) {
      newIndex = maxIndex - 3;
    }

    setCurrentIndex(newIndex);

    const track = document.querySelector('.team-carousel-track');
    const translateValue = -newIndex * cardWidth;
    track.style.transform = `translateX(${translateValue}px)`;
     setTimeout(() => {
      trackRef.current.style.transition = 'none';
    }, 300);
  };

  return (
    <div>
      <section
        className="team-wrap-layout1 pt-5 progress-wrap-layout2 bg-overlay bg-overlay-primary80 bg-common parallaxie"
        onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
         onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        
      >
      
      <div className="container main-scroler-box pb-5">

<div className="section-heading heading-dark text-left heading-layout1">
  <h1 className='text-light'>Specialist Doctors</h1>
  <p className='text-light fs-5'>Experienced Doctor</p>
  <div id="owl-nav2" className="owl-nav-layout1 me-auto">
    <span className="rt-prev" onClick={() => changeSlide(-1)}>
      <i className="bx bx-chevron-left prev"></i>
    </span>
    <span className="rt-next" onClick={() => changeSlide(1)}>
      <i className="bx bx-chevron-right next"></i>
    </span>
  </div>
</div>

<div className="swiper mySwiper rc-carousel-wrap nav-control-layout2">
  <div className="swiper-wrapper team-carousel-track">



<div className="swiper-slide slide_5 bg-light team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. David Roy</a>
          </h4>
          <p>Cardiologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>



      <div className="swiper-slide bg-light slide_2 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>

      <div className="swiper-slide bg-light slide_3 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <div className="doc-text"><a href="single-doctor.html">Dr. Nadim Kamal</a></div>
          </h4>
          <p>urologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>


      <div className="swiper-slide bg-light slide_4 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Marry Smith</a>
          </h4>
          <p>Therapist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>


      <div className="swiper-slide bg-light slide_5 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>

      <div className="swiper-slide bg-light slide_6 team-box-layout4 rounded-4 ">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid rounded-top" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>
   
      <div className="swiper-slide bg-light slide_7 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>
   
      <div className="swiper-slide bg-light slide_8 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>
   
      <div className="swiper-slide bg-light slide_9 team-box-layout4 rounded-top">
        <div className="item-img">
          <img src="1.png" alt="Team1" className="img-fluid" />
        </div>
        <div className="item-content">
          <h4 className="item-title">
            <a href="single-doctor.html">Dr. Zinia Zara</a>
          </h4>
          <p>Neurologist</p>
          <a href="single-doctor.html" className="item-btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>
  
  </div>
</div>
</div>



      </section>
    </div>
  );
};

export default Team;

