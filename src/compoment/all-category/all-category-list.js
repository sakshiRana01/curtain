import styled from "styled-components";
import { GoArrowDownRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { CiLocationArrow1 } from "react-icons/ci";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { ProductsCard } from "../category-card/product-card";
import { useState } from "react";

export const AllCategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
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
              onClick={() => handleCategoryClick("Curtains")}
            >
              <Image
                src="https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213282_1_big.jpg"
                className="category-img"
                width={150}
                height={150}
                alt="product-image"
              />
              <p className="arrow">
                <GoArrowDownRight />
              </p>
              <div class="content">
                <h1
                  className={`title ${
                    selectedCategory === "Curtains" ? "active-title" : ""
                  }`}
                >
                  curtain
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`category-card`}
              onClick={() => handleCategoryClick("FitCheck")}
            >
              <Image
                src="https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213282_1_big.jpg"
                className="category-img"
                width={150}
                height={150}
                alt="product-image"
              />
              <p className="arrow">
                <GoArrowDownRight />
              </p>
              <div class="content">
                <h1
                  className={`title ${
                    selectedCategory === "FitCheck" ? "active-title" : ""
                  }`}
                >
                  fitCheck
                </h1>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide items here with other categories */}
        </Swiper>

        <ProductsCard hoverActive={"none"} changeHoverStyle={"true"}/>
        <div class="holographic-card">
          <h2>View All</h2>
        </div>
      </div>
    </AllCaregoryWrapper>
  );
};

export const AllCaregoryWrapper = styled.section`
  padding: 40px 0px;


  .content {
    text-align: center;
    cursor: pointer;
  }

  .title {
    font-size: 28px !important;
    font-weight: 500 !important;
    letter-spacing: normal;
    position: relative;
    overflow: hidden;
    margin: 0;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
   
    transition: 1s;
 
    padding: 7px 10px;
    color: #000;
  }
  .active-title {
    transition: 0.5s !important;
        background: #b28b5f;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    color: #fff;
  }

  @keyframes text-aurora {
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  .holographic-card {
    padding: 5px 95px;
    height: 40px;
    background: #d5a303;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    transition: all 0.5s ease;
    
  }

  .holographic-card h2 {
    color: #fff;
    font-size: 20px;
    position: relative;
    z-index: 2;
  }

  .holographic-card::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(0deg, transparent, transparent 30%, rgb(3 3 3));
    transform: rotate(-45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }

  .holographic-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #75695bff;
  }

  .holographic-card:hover::before {
    opacity: 1;
    transform: rotate(-45deg) translateY(100%);
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
  .swiper-button-disabled {
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

  .swiper-button-next {
    right: 2%;
  }
  .swiper-button-prev {
    left: 2%;
  }

  .view-all-cat {
    background: #bb9210;
    padding: 7px 107px;
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    svg {
      color: #fff;
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .all-category-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background-color: #fff;     
   box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
   padding: 40px 0px 30px;
  }
  .categories-title {
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
      width: 125px;
      height: 125px;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.3s ease-in-out; // Smooth transition
    }

    .arrow {
      background-color: #b28b5f;
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
      top: 45%;
      right: 30px;
      box-shadow: 1px 3px 0px 1px black;
      transition: opacity 0.1s ease-in-out, visibility 0.3s ease-in-out;
    }
    .cat-heading {
      position: relative;
      display: inline-block;
      z-index: 1;
    }

    // Hover effect
  }
   @media (max-width: 767px) {
    padding: 20px 0;

    .categories-title {
      font-size: 22px;
      text-align: center;
      margin-bottom: 20px;
    }

    .all-category-list {
      gap: 25px;
    }

    .mySwiper {
      height: auto;
      padding-bottom: 15px;
    }



    .category-card {
      gap: 10px;

      .category-img {
        width: 80px;
        height: 80px;
      }

      .arrow {
       display: none;
      }
    }

    .title {
      font-size: 16px !important;
      padding: 5px 8px;
      box-shadow: 4px 4px 0 black;
    }

    .active-title {
      box-shadow: 4px 4px 0 #fbc638 !important;
    }

    .holographic-card {
      height: 35px;
      padding: 3px 95px;
      border-radius: 10px;
    }

    .holographic-card h2 {
      font-size: 16px;
    }

    .view-all-cat {
      padding: 5px 20px;
      font-size: 15px;
    }
  }
`;
