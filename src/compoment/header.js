import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgb(13 12 12 / 80%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
  height: 57px;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  .nav-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 4rem;
  }
`;

const Logo = styled.div`
  background: linear-gradient(to right, #d29a5c, #e5c7a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  font-weight: bolder;
  font-family: "Playwrite AU QLD", cursive;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 10px 0;
  line-height: 1.5;
  height: 40px;

  &:hover {
    border-bottom: 2px solid white;
  }

  /* Keep dropdown open when hovering parent OR dropdown */
  &:hover > div,
  & > div:hover {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 62px; /* Below header */
  left: 0;
  background: #b28b5f;
    box-shadow: 6px 8px 8px rgb(0 0 0 / 65%);
  border-radius: 4px;
  overflow: hidden;
  min-width: 187px;
  z-index: 999;

  a {
    display: block;
    padding: 8px 12px;
    color: #fff;
    text-decoration: none;
    &:hover {
      background: #f5f5f5;
      color: #000;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 13px;
  svg {
    color: #fff;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  .search-bar {
    display: flex;
    border: 1px solid #e5e6e7;
    border-radius: 30px;
    position: relative;
    width: ${({ expanded }) => (expanded ? "350px" : "200px")};
    transition: width 0.3s ease;

    input {
      background-color: transparent;
      border: none;
      color: #fff;
      outline: none;
      padding: 5px 40px 5px 20px;
      width: 100%;
      height: 35px;
    }

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserMenu = styled.div`
 position: absolute;
    top: 50px;
    left: -64px;
    background: #b28b5f;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 6px 8px 8px rgb(0 0 0 / 65%);
    min-width: 194px;
    color: #fff;
  .welcome {
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }

  button {
    background: none;
    border: none;
    padding: 10px 20px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 20;

  details {
    margin-bottom: 10px;
    summary {
      cursor: pointer;
      font-weight: 600;
      padding: 5px 0;
    }
    a {
      display: block;
      padding: 5px 0 5px 15px;
      text-decoration: none;
      color: black;
      &:hover {
        color: #007bff;
      }
    }
  }
`;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const navItems = [
    { name: "Services", sub: ["Web Development", "Design", "SEO"] },
    { name: "About", sub: ["Our Team", "Mission", "Careers"] },
    { name: "Contact Us", sub: ["Email", "Location", "Support"] },
  ];

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const headerbody = document.getElementById("header");
    if (window.scrollY > 0) {
      headerbody.style.background = "black";
    } else {
      headerbody.style.background = "rgb(13 12 12 / 73%)";
    }
  };

  window.addEventListener("scroll", handleScroll);
  
  // Run on mount in case the page is already scrolled
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <HeaderWrapper id="header">
      <Container>
        <Logo>Homies</Logo>
        <div className="nav-div">
          <Nav>
            {navItems.map((item) => (
              <NavItem key={item.name}>
                {item.name}
                <Dropdown>
                  {item.sub.map((subItem) => (
                    <a key={subItem} href="#">
                      {subItem}
                    </a>
                  ))}
                </Dropdown>
              </NavItem>
            ))}
          </Nav>

          <RightSection expanded={searchExpanded}>
            <div
              className="search-bar"
              onClick={() => setSearchExpanded(true)}
            >
              <input
                type="text"
                placeholder="Search..."
                onBlur={() => setSearchExpanded(false)}
              />
              <span className="search-icon">
                <CiSearch />
              </span>
            </div>
            <div style={{ position: "relative" }} ref={userMenuRef}>
              <FaUser onClick={() => setUserMenuOpen((prev) => !prev)} />
              {userMenuOpen && (
                <UserMenu>
                  <div className="welcome">Welcome</div>
                  <div></div>
                  <button>Login /Signup</button>
             
                </UserMenu>
              )}
            </div>
            <FaShoppingCart />
            <FaHeart />
          </RightSection>
        </div>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Container>

      {mobileMenuOpen && (
        <MobileMenu>
          {navItems.map((item) => (
            <details key={item.name}>
              <summary>{item.name}</summary>
              {item.sub.map((subItem) => (
                <a key={subItem} href="#">
                  {subItem}
                </a>
              ))}
            </details>
          ))}
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "100%", marginTop: "10px" }}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <FaShoppingCart />
            <FaHeart />
            <FaUser />
          </div>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};
