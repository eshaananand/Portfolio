import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-info">
        <div className="address-section">
          <h4>eshaanea.</h4>
          <p>
           Lalpur , Ranchi , Jharkhand Pincode:834001
          </p>
          <p><i class="fas fa-phone-alt"></i> : +91-9546051551</p>
          <p><i class="fas fa-envelope"></i> : eshaananand2911@gmail.com</p>
        </div>
        <div className="coding-handles">
            <h4>coding handles.</h4>
            <ul>
                <li>Hackerrank <i class="fab fa-hackerrank"></i> : <a href="https://www.hackerrank.com/eshaananand2911">eshaananand</a></li>
                <li>Codeforces : <a href="https://codeforces.com/profile/eshaananand">eshaananand</a></li>
                <li>LeetCode : <a href="https://leetcode.com/eshaananand/">eshaananand</a></li>
            </ul>
        </div>
      </div>
      <div className="copyright">
      <div className="social">
     <a href="https://github.com/eshaananand"><i class="fab fa-github">Github</i></a>
     <a href="https://www.linkedin.com/in/eshaananand/"><i class="fab fa-linkedin">linkedin</i></a>
     <a href="https://www.instagram.com/eshaananand/"><i class="fab fa-instagram">Instagram</i></a>
     <a href="https://twitter.com/home?lang=en"><i class="fab fa-twitter">twitter</i></a>
     <br/><br/><br/><br/>
      </div>
        <p>
          
          <i class="fas fa-copyright"></i> 2022 ESHAAN ANAND
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
