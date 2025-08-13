import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: rgb(13 12 12 / 80%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background: linear-gradient(to right, #d29a5c, #e5c7a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  font-weight: bolder;
  font-style: normal;
  font-family: "Playwrite AU QLD", cursive;
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
  &:hover > div {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #b28b5f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;
  min-width: 150px;
  z-index: 10;

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
  gap: 15px;
  svg {
    color: #fff;
  }
  .search-bar {
    display: flex;
    border: 1px solid #e5e6e7;
    padding: 15px 52px 10px 20px;
    border-radius: 30px;
    position: relative;

    input {
      background-color: transparent;
      border: none;
      color: #fff;
      outline: none;
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

const Button = styled.button`
  border: 1px solid ${({ primary }) => (primary ? "#949494ff" : "#ccc")};
  background: ${({ primary }) => (primary ? "#3d3f42ff" : "transparent")};
  color: white;
  padding: 6px 19px;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ primary }) => (primary ? "#0056b3" : "#f5f5f5")};
    color: ${({ primary }) => (primary ? "white" : "black")};
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

  const navItems = [
    { name: "Services", sub: ["Web Development", "Design", "SEO"] },
    { name: "About", sub: ["Our Team", "Mission", "Careers"] },
    { name: "Contact Us", sub: ["Email", "Location", "Support"] },
  ];

  return (
    <HeaderWrapper>
      <Container>
        <Logo>Homies</Logo>

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

        <RightSection>
          <div className="search-bar">
            <input type="text" placeholder="Search..." id="name" name="input" />
            <span className="search-icon">
              <CiSearch />
            </span>
          </div>
          <FaShoppingCart style={{ cursor: "pointer" }} />
          <FaHeart style={{ cursor: "pointer" }} />
          <Button>Login</Button>
          <Button primary>Signup</Button>
        </RightSection>

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
          </div>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <Button>Login</Button>
            <Button primary>Signup</Button>
          </div>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};
