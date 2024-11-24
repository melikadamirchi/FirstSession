import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import "../css/Footerpage.css";

function FooterPage() {
  return (
    <footer>
      <h3 id="createby" className="icn">
        Created by © Melika
      </h3>

      <div className="icn">
        <a
          className="linkdinANDemail"
          href="mailto:melikadamirchi2000@gmail.com"
        >
          <img className="imgsmall" src={email} alt="" />
        </a>
        <a
          className="linkdinANDemail"
          href="https://www.linkedin.com/in/melikadamirchi"
        >
          <img className="imgsmall" src={linkedin} alt="" />
        </a>
      </div>
    </footer>
  );
}
export default FooterPage;
