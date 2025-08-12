import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 20px 5%;

    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    color: #fff;
    background: linear-gradient(45deg, #00000091, #000000c4);

  .left-section {
    display: flex;
    align-items: baseline;
    gap: 20%;

    .logo {
      background: linear-gradient(to right, #d29a5c, #e5c7a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 25px;
      font-weight: bolder;
      font-style: normal;
      font-family: "Playwrite AU QLD", cursive;
    }

    .categories {
      display: flex;
      align-items: center;
      gap: 35px;

      .categories-item {
        position: relative;

        .categories-txt {
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          cursor: pointer;

          svg {
            font-size: 25px;
            margin-left: 3px;
          }
        }

        &:hover .categories-txt {
          border-bottom: 2px solid #000;
        }

        &:hover .subcategories {
          display: flex;
        }

        .subcategories {
          display: none;
          position: absolute;
          top: 28px;
          flex-direction: column;
          background: #b28b5e;
          padding: 10px;
          font-size: 16px;
          color: #fff;
          font-weight: 500;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          z-index: 19;

          a {
            color: #fff;
            text-decoration: none;
            margin: 4px 0;
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 35px;

    .search-bar {
      display: flex;
      border: 1px solid #e5e6e7;
      padding: 10px 52px 10px 20px;
      border-radius: 30px;
      position: relative;

      .search-icon {
        background-color: #b28b5f;
        width: 40px;
        height: 41px;
        border-radius: 50px;
        position: absolute;
        right: 1px;
        top: 2px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 20px;
          color: #ffffff;
        }
      }
    }

    span svg {
      font-size: 18px;
      font-weight: 500;
    }

    .login-div {
      .login-txt {
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }

      &:hover {
        color: #b28b5f;
        text-decoration: underline;
      }
    }
  }

  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .left-section {
      width: 100%;
      justify-content: space-between;
    }

    .categories {
      display: none !important;
      flex-direction: column;
      position: absolute;
      background: #fff;
      top: 70px;
      left: 0;
      width: 100%;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      z-index: 100;

      .categories-item {
        width: 100%;
        .categories-txt {
           border-bottom: 2px solid transparent !important;
        }
        .subcategories {
          position: relative;
          top: 17px ;
          display: none !important;
          background: #b28b5e;
          margin-top: 10px;
          width: 100%;
          a {
            color: #fff;
          }
        }

        &.active .subcategories {
          display: flex !important;
        }
      }
    }

    .categories.open {
      display: flex !important;
      align-items: flex-start;
    }

    .hamburger {
      display: block;
    }

    .right-section {
      display: none;
    }
  }
`;

export const Header = ({ headerData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCategoryClick = (index) => {
    setActiveCategory((prev) => (prev === index ? null : index));
  };

  return (
    <HeaderWrapper>
      <div className="left-section">
        <h2 className="logo">
          <a >Homies</a>
        </h2>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>

        <div className={`categories ${menuOpen ? "open" : ""}`}>
          {headerData.map((item, index) => (
            <div
              key={index}
              className={`categories-item ${
                activeCategory === index ? "active" : ""
              }`}
            >
              <h3
                className="categories-txt"
                onClick={() => handleCategoryClick(index)}
              >
                <span>{item.title}</span>
                {item?.subcategories && <IoMdArrowDropdown />}
              </h3>
              {item?.subcategories && (
                <div className="subcategories">
                  {item.subcategories.map((subcat, subIndex) => (
                    <a href={subcat.url} key={subIndex}>
                      {subcat.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">
            <a >
              <CiSearch />
            </a>
          </span>
        </div>

        <span>
          <a >
            <FaRegHeart />
          </a>
        </span>
        <span>
          <a >
            <FiShoppingBag />
          </a>
        </span>

        <div className="login-div">
          <p className="login-txt">Login/Signup</p>
        </div>
      </div>
    </HeaderWrapper>
  );
};
