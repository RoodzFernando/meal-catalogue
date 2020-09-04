/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import paypal from '../images/paypal.svg';
import mastercard from '../images/mastercard.svg';
import visa from '../images/visa.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-top">

        <div className="service">
          <span>Customer Service</span>

          <div className="content">
            <div className="info">
              <img src={phone} alt="" />
              <p>+123 456 789</p>
            </div>

            <div className="info">
              <img src={mail} alt="" />
              <p>catalogue@meal.com</p>
            </div>
          </div>
        </div>

        <div className="find-us">
          <span>Find us</span>
          <div>
            <a href="https://twitter.com/RoodzFernando"><img src={twitter} alt="" /></a>
            <a href="https://www.linkedin.com/in/roodz-fernando-fleurant/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/RoodzFernando"><img src={github} alt="" /></a>
          </div>
        </div>

        <div className="payment-method">
          <span>Payment Methods</span>
          <div>
            <img src={paypal} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Roodz Fernando Copyright &copy; 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
