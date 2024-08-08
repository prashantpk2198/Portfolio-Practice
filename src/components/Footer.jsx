import fblogo from "/src/assets/fb.png";
import instalogo from "/src/assets/insta.png";
import twitterlogo from "/src/assets/Group.png";
import linkedinlogo from "/src/assets/Linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div id="footer-icons">
        <img src={fblogo} alt="facebook icon" />
        <img src={instalogo} alt="instagram icon" />
        <img src={twitterlogo} alt="twitter icon" />
        <img src={linkedinlogo} alt="linkedIn icon" />
      </div>
      <p>Copyright ©2020 All rights reserved</p>
    </footer>
  );
}
