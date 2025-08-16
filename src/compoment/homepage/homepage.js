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
background-color: rgba(241,242,244,1.00);
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

  .hero-banner {
    width: 100%;
    height: 720px;
  }
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 10%;
    z-index: 10;
    height: 100%;
    top: 2%;
  }
  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
    margin: 0;
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
    gap: 45px;
  }

  .swiper-slide .text {
    flex: 1;
    img {
      border-radius: 50%;
      width: 500px;
      height: 500px;
    }
  }

  .offer-container {
    padding: 60px 20px 40px;
    .offer-section {
      padding: 30px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
          background-color: rgb(255, 255, 255);

      .offer-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        .heading {
          font-size: 26px;
          font-weight: 600;
        }
        .sub-heading {
          font-size: 12px;
        }
        button {
          padding: 10px 20px;
          background-color: #000;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
  .offer-grid-container {
    padding: 40px 0px;
  }
  .offer-grid-section {
    padding: 20px 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);

    gap: 20px;
    background-color: #fff;
  }

  .block-0 {
    grid-row: 1 / span 2;
  }

  .offer-grid-block {
    position: relative;
    overflow: hidden;
    height: 300px;
    border-radius: 10px;
    width: 100%;
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
    padding: 8px 11px;
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
  .products-container {
    padding: 40px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
            box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
background-color: #fff;
    .heading {
      font-size: 40px;
      font-weight: 600;
      color: #424242;
    }
    .sub-heading {
      font-size: 16px;
      font-weight: 500;
      color: #757575;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    .offer-section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .offer-grid-section {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 767px) {
    /* HERO SECTION FIX */
  
     .hero-banner {
    width: 100vw; /* Ensure full width on mobile */
    height: 420px;
  }
  .hero-section {
    left: 0; /* Remove container offset */
    width: 100%; /* Full width text overlay */
    padding: 20px;
  }
    .hero-section {
      left: 5%;
      top: 0;
      justify-content: flex-start;
      padding: 20px;
    }
    .tagline {
      font-size: 14px;
      &::before {
        width: 25px;
      }
    }
    .hero-title {
      font-size: 38px;
      line-height: 1.2;
    }
    .shop-btn {
      padding: 8px 20px;
      font-size: 13px;
    }

    /* OFFER SECTION FIX */
    .offer-section {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      text-align: center;
    }
    .offer-block {
      width: 100%;
    }

    /* OFFER GRID FIX */
    .offer-grid-section {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 15px;
    }
    .offer-grid-block {
      height: 200px;
    }

    /* PRODUCT SECTION FIX */
    .products-container {
      padding: 20px 0;
      background: #fff;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
      .heading {
        font-size: 28px;
      }
      .sub-heading {
        font-size: 14px;
        padding: 0 10px;
      }
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
             initialSlide={0} // 0 means first slide (index starts from 0)
  slidesPerView={1}
            speed={600}
            parallax={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation,Autoplay]}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {propsData.banner &&
              propsData?.banner.map((item, index) => (
                <SwiperSlide className="title" key={index}>
                  <figure className="hero-banner">
                    <Image
                      src={item?.url}
                      alt="baner-image"
                      fill={true}
                    ></Image>
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
            </div>{" "}
            <div className="offer-block">
              <p className="heading">Get 10% OFF</p>
              <span className="sub-heading">ON ORDERS OVER 399</span>
            </div>{" "}
            <div className="offer-block">
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
                  style={{
                    backgroundImage: `url(https://drapestory.in/cdn/shop/files/Floral_d7910eac-be87-46ae-b460-cf03e2782be1_765x.png?v=1754019065)`,
                  }}
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
          <p className="sub-heading">
            Discover the latest trends and fresh picks — just landed and ready
            to shop!
          </p>
          <ProductsCard />
        </div>
        <AllCategoryList />
      </Layout>
    </HomePageWrapper>
  );
};
