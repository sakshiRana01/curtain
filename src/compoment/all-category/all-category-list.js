import styled from "styled-components";
import { GoArrowDownRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';

import { CiLocationArrow1 } from "react-icons/ci";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ProductsCard } from "../category-card/product-card";
import { useState } from "react";

export const AllCategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <AllCaregoryWrapper>
      <div className="container all-category-list">
        <h2 className="categories-title">Popular Brand Desgin & Products</h2>

        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            767: { slidesPerView: 6 },
          }}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className={`category-card`}
            >
              <Image
                src="https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213282_1_big.jpg"
                className="category-img"
                width={150}
                height={150}
                alt="product-image"
              />
              <p className="arrow"><GoArrowDownRight /></p>
         <div class="content">
<h1 className={`title ${selectedCategory === "Curtains" ? "active-title" : ""}`}>
  curtain
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
</div>
            </div>
          </SwiperSlide>
  <SwiperSlide>
            <div
              className={`category-card`}
            >
              <Image
                src="https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213282_1_big.jpg"
                className="category-img"
                width={150}
                height={150}
                alt="product-image"
              />
              <p className="arrow"><GoArrowDownRight /></p>
         <div class="content">
<h1 className={`title ${selectedCategory === "Curtains" ? "active-title" : ""}`}>
  fitCheck
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
</div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide items here with other categories */}
        </Swiper>

        <ProductsCard />
        <a className="view-all-cat">View all <CiLocationArrow1 /></a>
      </div>
    </AllCaregoryWrapper>
  );
};

export const AllCaregoryWrapper=styled.section`
padding: 40px 0px ;



.content {
  text-align: center;
}

.title {
font-size: 33px !important;
    font-weight: 500 !important;
  letter-spacing:normal;
  position: relative;
  overflow: hidden;
  margin: 0;
  color: #000;

}
.active-title{
    /* Key properties for text animation */
  background: linear-gradient(to right, #00c2ff, #ffc640, #e54cff);
  background-size: 200% 100%;
  -webkit-background-clip: text; /* For webkit browsers */
  background-clip: text;
  color: transparent; /* Makes the text transparent so the background shows through */
  animation: text-aurora 10s linear infinite; /* Animates the background */
}

@keyframes text-aurora {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}




@keyframes aurora-border {
  0% {
    border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
  }

  25% {
    border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
  }

  50% {
    border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
  }

  75% {
    border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
  }

  100% {
    border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
  }
}
.mySwiper {
  width: 100%;
  height: 250px;
  position: relative;
  background: none !important;
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
    color: #000 !important;
    padding: 10px 0px !important;
}
.swiper-button-disabled{
    display: none !important;
}
.swiper-button-prev,
.swiper-button-next {
  z-index: 10;
  background: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 40%;
  color: #000;

  &::after {
    font-size: 20px;
    font-weight: bold;
  }
}

.swiper-button-next{
    right: 2%;
}
.swiper-button-prev{
    left: 2%;
}

.view-all-cat{background: #bb9210;
    padding: 7px 107px;
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    svg{
          color: #fff;
    font-size: 20px;
    font-weight: bolder;
    }
  }
.all-category-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
.categories-title{
    font-size: 40px;
    font-weight: 600;
}
.category-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: relative;

  .category-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out; // Smooth transition
  }

  .arrow {
    background-color: #B28B5F;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    color: #fff;
    font-size: 22px;
    font-weight: 900;
    position: absolute;
    top: 60%;
    right: 30px;
    box-shadow: 1px 3px 0px 1px black;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s ease-in-out, visibility 0.3s ease-in-out;
  }
.cat-heading {
  position: relative;
  display: inline-block;
  z-index: 1;
}



  // Hover effect

&:active {
  .category-img {
    transform: scale(1.05);
  }
  .arrow {
    opacity: 1;
    visibility: visible;
  }
}
}

`;