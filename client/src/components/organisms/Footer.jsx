import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const StyledFooters = styled.footer`
  min-height: 20vh;
  padding: 10px 10%;
  background-color: #3b393c;
  display: flex;
  justify-content: space-between;
  > div.social {
    display: flex;
    gap: 10px;
    margin-top: 16px;
  }
`;

const Footer = () => {
  return (
    <StyledFooters>
      <div>
        <p>Nowhere Public Library</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
      <div>
        <p>Working hours: 24/7</p>
        <p>Address: somwhere at Kalvariju Market</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9118.333678932933!2d25.283394538095276!3d54.70357347248616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96a9e18ad90f%3A0x24f9751bf4c2e79e!2sKalvariju%20Market!5e1!3m2!1sen!2slt!4v1728402409441!5m2!1sen!2slt"
          width="280"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <p>
          <Link to={"/policies/privacy"}>Privacy policy</Link>
        </p>
        <p>
          <Link to={"/policies/cookies"}>Cookies</Link>
        </p>
        <p>
          <Link to={"/policies/terms"}>Terms of Use</Link>
        </p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a href="https://www.youtube.com/">
          <YouTubeIcon />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
      </div>
    </StyledFooters>
  );
};

export default Footer;

<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9118.333678932933!2d25.283394538095276!3d54.70357347248616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96a9e18ad90f%3A0x24f9751bf4c2e79e!2sKalvariju%20Market!5e1!3m2!1sen!2slt!4v1728402409441!5m2!1sen!2slt"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
