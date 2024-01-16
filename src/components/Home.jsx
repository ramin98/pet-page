import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import check from "../assets/images/Tick Square.png";

function Home() {
  return (
    <main>
      <section className="first">
        <div className="section-first-info">
          <h1>Your little friend can trust</h1>
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family.
          </p>
          <button className="site-button">Contact Us</button>
        </div>
        <div className="section-first-img">
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="two">
        <div className="counts">
          <div>
            <p>Customers</p>
            <p>12788+</p>
          </div>
          <div>
            <p>Adopted</p>
            <p>3832+</p>
          </div>
          <div>
            <p>Happy</p>
            <p>99k+</p>
          </div>
        </div>

        <div className="line"></div>
        <div className="circle"></div>
        <div className="testimoni">
          <p>Our Testimoni</p>
          <p>
            We adopted our puppy. Althought I was skeptical, everything turned
            out perfect!
          </p>
        </div>
      </section>

      <section className="three">
        <div className="section-three-header">
          <h2>Our Services</h2>
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="slider"
        >
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="circle"></div>
            <div className="slider-item-info">
              <h3>Your little friend can trust</h3>
              <p>
                We believe finding a reliable, professional pet sitter should be
                easy. So we make sure every member of our Family.
              </p>
              <button className="site-button">Contact Us</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="four">
        <div className="section-four-first-img"></div>
        <div className="section-four-info">
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family.{" "}
          </p>
          <h3>How to getting a Kitten for your companion</h3>
        </div>
        <div className="section-four-second-img">
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="five">
        <div className="section-five-info">
          <h1>About us of your pets</h1>
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family. We believe finding
            a reliable, professional pet sitter should be easy. So we make sure
            every.
          </p>
          <ul>
            <li>
              <img src={check} alt="check" />
              <span>Over 10 years of experience</span>
            </li>
            <li>
              <img src={check} alt="check" />
              <span>High - quality products only</span>
            </li>
            <li>
              <img src={check} alt="check" />
              <span>20 talented vets ready to help you</span>
            </li>
          </ul>
        </div>

        <div className="section-five-img"></div>
      </section>
      <section className="six">
        <div className="section-six-info">
          <h1>Schedule your appointment today</h1>
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family.
          </p>
          <button className="site-button">Contact Us</button>
        </div>
      </section>
      <section className="seven">
        <div className="section-seven-header">
          <h2>Our Services</h2>
          <p>
            We believe finding a reliable, professional pet sitter should be
            easy. So we make sure every member of our Family.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="slider"
        >
          <SwiperSlide className="slider-item">
            <div className="square"></div>
            <div className="slider-item-info">
              <h3>Dog toys: How to pick the best</h3>
              <p>We adopted our puppy</p>
              <button className="site-button">Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="square"></div>
            <div className="slider-item-info">
              <h3>Dog toys: How to pick the best</h3>
              <p>We adopted our puppy</p>
              <button className="site-button">Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="square"></div>
            <div className="slider-item-info">
              <h3>Dog toys: How to pick the best</h3>
              <p>We adopted our puppy</p>
              <button className="site-button">Read More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="square"></div>
            <div className="slider-item-info">
              <h3>Dog toys: How to pick the best</h3>
              <p>We adopted our puppy</p>
              <button className="site-button">Read More</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="eight">
        <h2>
          Follow us on <span>Instagram</span>
        </h2>
        <ul className="insta-collage">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
