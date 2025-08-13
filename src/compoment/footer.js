import styled from "styled-components";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

export const FooterWrapper = styled.footer`
  background-image: linear-gradient(19deg, #0a0909, #201f1feb);
  padding: 50px 0 30px;

  .footer {
    color: #fff;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .logo {
    background: linear-gradient(to right, #d29a5c, #e5c7a6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 25px;
    font-weight: 600;
    font-style: italic;
    font-family: "Playwrite AU QLD", cursive;
    font-optical-sizing: auto;
    font-weight: bolder;
    font-style: normal;
    margin-bottom: 20px;
  }

  .footer-column {
    flex: 1;
    min-width: 250px;
    margin: 10px;
    margin-right: 5%;
  }

  .footer h3 {
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 700;
  }

  .footer p,
  .footer li {
    font-size: 14px;
    line-height: 1.6;
    color: #999999;
    font-weight: 500;
  }

  .footer ul {
    list-style: none;
    padding: 0;
  }

  .footer li {
    margin-bottom: 10px;
  }

  .footer .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .contact-list {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
  .contact-item {
    background-color: #fff;
    color: black !important;
    width: 28px;
    height: 28px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    border-radius: 50%;
  }
  .playstore {
    width: 150px;
    height: auto;
  }
  .stores {
    display: flex;
    flex-wrap: nowrap;
  }
  /* Optional: make it responsive */
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    .stores ,.contact-list{
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container footer">
        <div className="footer-column">
          <h2 className="logo">Homies</h2>

          <p>
            We provide quality products and services to make your life better.
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li className="contact-item">
              {" "}
              <BiLogoFacebook />
            </li>
            <li className="contact-item">
              {" "}
              <TiSocialTwitter />
            </li>
            <li className="contact-item">
              {" "}
              <TiSocialLinkedin />
            </li>

            <li className="contact-item">
              {" "}
              <LiaInstagram />
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Downlad App</h3>
          <ul className="contact-list stores">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              className="playstore"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1280px-Download_on_the_App_Store_RGB_blk.svg.png"
              className="playstore"
            ></img>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};
