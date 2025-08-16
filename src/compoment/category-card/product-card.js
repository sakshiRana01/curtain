import React, { useState } from "react";
import { FaRegHeart,FaStar } from "react-icons/fa";
import Image from "next/image";
import styled from "styled-components";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

export const ProductsCard = ({ hoverActive,changeHoverStyle }) => {
  console.log("changeHoverStyle",changeHoverStyle)
  return (
    <ProductsCardWrapper>
      <div className="container products">
   <Swiper  modules={[Navigation]} 
   spaceBetween={20}
   navigation={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}

 className="mySwiper">
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
              <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>
        <SwiperSlide><Card hoverActive={hoverActive} changeHoverStyle={changeHoverStyle}/></SwiperSlide>

      </Swiper>
      </div>
    </ProductsCardWrapper>
  );
};

const getColor = (index) => {
  const colors = ["#62a237c9", "#f4de36ff", "#2196f3"];
  return colors[index];
};

export const Card = ({ hoverActive,changeHoverStyle }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  return (
    <CardWrapper>
      <div className={`card ${changeHoverStyle =="true"?"outset":""}`}>
        <div
          className={`image-container ${
            hoverActive === "none" ? "no-hover" : ""
          }`}
        >
          <figure className="product-image">
            <Image
              src="https://drapestory.in/cdn/shop/files/566A_1_jpg_765x.jpg?v=1713078931"
              className="card-image"
              width={100}
              height={300}
              alt="Product"
            />
          </figure>
   <div className="rating-box">
          <div className="rating">
            <span>3.2</span>
            <FaStar size={13} color="#f5a623" />
          </div>
          <span className="purchases">| 320</span>
        </div>
          <div className="overlay">
            <div className="sizes">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
            </div>
            <button className="quick-add">Quick Add</button>
            <div className="wishlist">
              <FaRegHeart />
            </div>
          </div>
        </div>

        <h4 className="card-title">Dontella</h4>
        <p className="card-subdesc">Sample jewellery and Accessories</p>
        <p className="card-amount">$4545 <span className="exact-price">$5555</span> <span className="current-discount">(46% OFF)</span></p>
        <div className="color-list">
          {[0, 1, 2].map((item, index) => (
            <span
              key={index}
              className={selectedColor === index ? "selected" : ""}
              onClick={() => handleColorClick(index)}
            >
              <i style={{ backgroundColor: getColor(index) }}></i>
            </span>
          ))}
        </div>

        <div className="active-offer-wrapper">
          <div className="active-offer">10% off</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export const ProductsCardWrapper = styled.section`
  width: 100%;
  position: relative;

  .no-hover {
    .overlay {
      display: none;
    }
  }

.swiper-wrapper-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;         /* spacing between arrows and swiper */
  position: relative;
  width: 100%;
}


.swiper-slide {
  background: none;
color:#000 !important;
 
}
.swiper-button-prev,.swiper-button-next{
  width: 30px !important;
  height: 73px !important;
  top: 35% !important;
  background-color: #b28b5f !important;
  border-radius: 0% !important;
&::after{
  font-size: 20px !important;
  color: #fff !important;
  font-weight: bold !important;
}
  &:hover{
    box-shadow: 6px 8px 8px rgb(0 0 0 / 65%) !important;
  }
}
.swiper-button-next{
  right: 0px !important;
}
.swiper-button-prev{
  left: 0px !important;
}


.swiper-button-disabled{
  display: none;
}
.swiper {
  width: 100%;
  height: 100%;
  background: none !important;
  padding: 10px ;
   flex: 1;  
   box-sizing : border-box;
}




  @media (max-width: 767px) {
    .custom-button {
      display: none;
    }
    .products {
      padding: 0px !important;
    }

  }
`;


export const CardWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  position: relative;
  .outset{
    &:hover{
            box-shadow: 0 3px 16px 0 rgba(0,0,0,.11) !important;

    }
  }

   .rating-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: #fff;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .rating span {
    font-size: 13px;
    font-weight: 500;
  }

  .purchases {
    font-size: 12px;
    font-weight: 400;
    color: #555;
  }
 .card {
  width: 100%;
    position: relative;
    transition: box-shadow .2s ease-in-out;
    z-index: 1; /* Add this line */
    &:hover{
      box-shadow: inset 20px 9px 16px 20px rgba(0, 0, 0, .11);
    }
  }
.product-image {
  width: 100%;
  min-width: unset;
  height: 300px;
}
  .card-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .card-title {
    margin-top: 10px;
  }
  .card-title{
    font-weight: 700 !important;
  }
  .card-title,
  .card-amount {
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 7px;
  }
  .exact-price{
  font-size: 12px;
    text-decoration: line-through;
    color: #878787;
  }
  .current-discount{
       font-size: 13px;
    color: #ff7100;
    font-weight: 500;
  }
  .card-subdesc {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: #444444ff;
    margin: 5px 0px;
  }
  .color-list {
    display: flex;
    gap: 10px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    padding-bottom: 14px;
    span {
      border: 1px solid black;
      border-radius: 50%;
      i {
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: block;
        margin: 2px;
      }
    }
  }
  .color-list span {
    border: 1px solid #8989898c;
    border-radius: 50%;
    padding: 1px;
    cursor: pointer;
    transition: border 0.2s ease;
  }
  .color-list span.selected {
    border: 1px solid #000;
  }
  .active-offer-wrapper {
    position: absolute;
    top: 8px;
    right: -8px;
    &::before {
content: "";
    position: absolute;
    top: 25px;
    right: 0;
    width: 8px;
    height: 11px;
    border-bottom-right-radius: 13px;
    background: linear-gradient(271deg, #ff3700, #e86b488c);

    }
  }
  .active-offer {
    background: linear-gradient(45deg, #e30000, #f43d0c);
    padding: 5px 13px 5px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 16% calc(84% - 10px));
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: rgba(20, 20, 20, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    opacity: 0;
    gap: 20px;
    transition: opacity 0.3s ease;
    border-radius: 6px;
  }
  .image-container{
    position: relative;
  }
  .image-container:hover .overlay {
    opacity: 1;
  }
  .overlay .quick-add {
    background: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 4px;
    width: 96%;
  }
  .overlay .sizes {
    display: flex;
    gap: 8px;
  }
  .overlay .sizes span {
    background: #fff;
    padding: 4px 10px;
    border-radius: 34%;
    font-size: 12px;
    cursor: pointer;
  }
  .overlay .wishlist {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    .card-image {
      height: 220px;
    }
    .overlay {
      height: 220px;
      gap: 12px;
    }
    .overlay .quick-add {
      font-size: 12px;
      padding: 6px 12px;
      width: 90%;
    }
    .overlay .sizes span {
      font-size: 11px;
      padding: 3px 8px;
    }
    .card-title {
      font-size: 13px;
    }
    .card-subdesc {
      font-size: 11px;
    }
    .card-amount {
      font-size: 13px;
    }
  }
`;
