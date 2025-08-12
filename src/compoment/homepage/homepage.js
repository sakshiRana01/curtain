import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Layout } from "../layout";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { ProductsCard } from "../category-card/product-card";
import { AllCategoryList } from "../all-category/all-category-list";
export const HomePageWrapper = styled.section`
  .swiper {
    width: 100%;
    height: 100%;
    background: #000;
  }
  .swiper-pagination-bullet {
  background-color: gray;
  opacity: 0.7;
    width: 15px;
  height: 15px;
}

.swiper-pagination-bullet-active {
  background-color: black;
  opacity: 1;

}

.swiper-button-next,
.swiper-button-prev {
  color: black; /* Customize arrow color */
}
  .hero-banner{
    width: 100%;
    height: 720px;
    position: relative;
  }
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30%;
    position: absolute;
    left: 10%;
    z-index: 10;
    top: 36%;
  }
  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  .tagline {
    font-size: 20px;
    font-weight: 500;
    color: black;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 40px;
      height: 2px;
      background-color: #e97933;
      display: inline-block;
      text-align: center;
      margin-right: 10px;
    }
  }
  .hero-title {
    font-size: 95px;
    font-weight: 400;
    color: black;
    line-height: normal;
  }
  .shop-btn {
    padding: 10px 40px;
    background-color: #e97933;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
  }
  .swiper-slide .subtitle {
    flex: 1;
    font-size: 21px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .swiper-slide .text {
    flex: 1;
    img {
      border-radius: 50%;
      width: 500px;
      height: 500px;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
.offer-container{
    padding: 60px 0px 40px;
  .offer-section {
    padding: 30px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .offer-block{
        display: flex;
        flex-direction: column;
        align-items: center;
    .heading{
        font-size: 26px;
    font-weight: 600;
 
    }
    .sub-heading{
        font-size: 12px;

    }
    button{
        padding: 10px 20px;
        background-color: #000;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
    }
}
  }
}
.offer-grid-container{
    padding: 40px 0px;
}
.offer-grid-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}

.block-0 {
  grid-row:1/ span 2;
}

.offer-grid-block {
  position: relative;
  overflow: hidden;
  height: 300px;
  border-radius: 10px;
}
.offer-grid-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  height: auto; /* can also set fixed height if needed */
}

.block-0 {
  grid-row: 1 / span 2;
}

.offer-grid-block {
  position: relative;
  background: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  min-height: 200px;
}

.offer-bg {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}


.offer-overlay {
  width: 100%;
  padding: 20px 30px;
  color: white;
}


.offer-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.offer-subtitle {
  font-size: 0.9rem;
  margin: 5px 0;
}

.offer-button {
  padding: 4px 11px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
}

.offer-button:hover {
  background: #000;
  color: #fff;
}
.products-container{
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
 
  .heading{
  font-size: 40px;
    font-weight: 600;
    color: #424242;
  }
  .sub-heading{
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    text-align: center;
  }
}

@media (max-width:767px){
  .offer-section{
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .offer-grid-section{
    grid-template-columns: 1fr;
  }
}
`;
export const HomePage = ({ propsData }) => {
  return (
    <HomePageWrapper>
      <Layout headerData={propsData.headerData}>
        <div className="hero-banner">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
             modules={[Pagination, Navigation]}
  pagination={{ clickable: true }}
            className="mySwiper"
          >
  
            {propsData.banner &&
              propsData?.banner.map((item, index) => (
                <SwiperSlide className="title" key={index}>
                  <figure className="hero-banner">
                    <Image src={item?.url} alt="baner-image" fill={true}></Image>
                  </figure>
                  <div className="container hero-section">
                    <div className="subtitle" data-swiper-parallax="-200">
                      <h2 className="tagline">{item?.tagline}</h2>
                      <h1 className="hero-title">{item?.title}</h1>
                      <a className="shop-btn">Shop Now</a>
                    </div>
                 
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="offer-container container">
            <div className="offer-section">
        <div className="offer-block">
            <p className="heading">Get 10% OFF</p>
            <span className="sub-heading">ON ORDERS OVER 399</span>
         </div>
           <div className="offer-block">
            <p className="heading">Get 10% OFF</p>
            <span className="sub-heading">ON ORDERS OVER 399</span>
         </div>  <div className="offer-block">
            <p className="heading">Get 10% OFF</p>
            <span className="sub-heading">ON ORDERS OVER 399</span>
         </div>  <div className="offer-block">
       <button>Code:Discount</button>
         </div>
            </div>


        </div>
        <div className="offer-grid-container container">
        <div className="offer-grid-section">
          {propsData?.offergrid?.slice(0, 5).map((item, index) => (
            <div
              className={`offer-grid-block block-${index}`}
              key={index}
              style={index === 0 ? { gridRow: "1 / span 2" } : {}}
            >
              <div
                className="offer-bg"
                style={{ backgroundImage: `url(/offers-grid.jpg)` }}
              >
                <div className="offer-overlay">
                  <p className="offer-title">{item.title}</p>
                  <span className="offer-subtitle">{item.subtitle}</span>
                  <button className="offer-button">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            <div className="products-container container">
        <h2 className="heading">New Arrivals</h2>
        <p className="sub-heading">Discover the latest trends and fresh picks — just landed and ready to shop!</p>
  <ProductsCard/>

      </div>
      <AllCategoryList/>

      </Layout>
    </HomePageWrapper>
  );
};
