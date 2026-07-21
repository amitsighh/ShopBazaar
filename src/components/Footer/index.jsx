import "./style.css";

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiGlobe,
  FiChevronRight,
  FiSmartphone,
  FiCreditCard,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div className="footerMain">
        <div className="container">

          <div className="footerGrid">

            {/* BRAND */}

            <div className="footerBrand">

              <h2 className="footerLogo">
                Shop<span>Bazaar</span>
              </h2>

              <p className="footerTagline">
                Shop smarter. Live better.
              </p>

              <p className="footerDescription">
                Discover quality products, unbeatable deals
                and a seamless shopping experience — all in one place.
              </p>

              <div className="footerSocials">

                <a href="#" aria-label="Facebook">
                  <FiFacebook />
                </a>

                <a href="#" aria-label="Instagram">
                  <FiInstagram />
                </a>

                <a href="#" aria-label="Twitter">
                  <FiTwitter />
                </a>

                <a href="#" aria-label="YouTube">
                  <FiYoutube />
                </a>

              </div>

            </div>


            {/* SHOP */}

            <div className="footerColumn">

              <h3>Shop</h3>

              <a href="#">
                <FiChevronRight />
                All Products
              </a>

              <a href="#">
                <FiChevronRight />
                New Arrivals
              </a>

              <a href="#">
                <FiChevronRight />
                Best Sellers
              </a>

              <a href="#">
                <FiChevronRight />
                Trending Products
              </a>

              <a href="#">
                <FiChevronRight />
                Today's Deals
              </a>

            </div>


            {/* CUSTOMER CARE */}

            <div className="footerColumn">

              <h3>Customer Care</h3>

              <a href="#">
                <FiChevronRight />
                Help Center
              </a>

              <a href="#">
                <FiChevronRight />
                Track Your Order
              </a>

              <a href="#">
                <FiChevronRight />
                Returns & Refunds
              </a>

              <a href="#">
                <FiChevronRight />
                Shipping Information
              </a>

              <a href="#">
                <FiChevronRight />
                Contact Us
              </a>

            </div>


            {/* MY ACCOUNT */}

            <div className="footerColumn">

              <h3>My Account</h3>

              <a href="#">
                <FiChevronRight />
                My Profile
              </a>

              <a href="#">
                <FiChevronRight />
                My Orders
              </a>

              <a href="#">
                <FiChevronRight />
                Wishlist
              </a>

              <a href="#">
                <FiChevronRight />
                Shopping Cart
              </a>

              <a href="#">
                <FiChevronRight />
                Saved Addresses
              </a>

            </div>


            {/* CONTACT */}

            <div className="footerContact">

              <h3>Get In Touch</h3>

              <div className="footerContactItem">

                <div className="contactIcon">
                  <FiMapPin />
                </div>

                <div>
                  <span>Location</span>
                  <p>Uttar Pradesh, India</p>
                </div>

              </div>


              <div className="footerContactItem">

                <div className="contactIcon">
                  <FiPhone />
                </div>

                <div>
                  <span>Call Us</span>
                  <p>+91 98765 43210</p>
                </div>

              </div>


              <div className="footerContactItem">

                <div className="contactIcon">
                  <FiMail />
                </div>

                <div>
                  <span>Email</span>
                  <p>support@shopbazaar.com</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================
          TRUST FEATURES
      ====================================== */}

      <div className="footerTrust">
        <div className="container">

          <div className="footerTrustGrid">

            <div className="trustItem">

              <div className="trustIcon">
                <FiTruck />
              </div>

              <div>
                <h4>Free Delivery</h4>
                <p>On eligible orders</p>
              </div>

            </div>


            <div className="trustItem">

              <div className="trustIcon">
                <FiShield />
              </div>

              <div>
                <h4>Secure Payment</h4>
                <p>100% protected checkout</p>
              </div>

            </div>


            <div className="trustItem">

              <div className="trustIcon">
                <FiRefreshCw />
              </div>

              <div>
                <h4>Easy Returns</h4>
                <p>Hassle-free return policy</p>
              </div>

            </div>


            <div className="trustItem">

              <div className="trustIcon">
                <FiHeadphones />
              </div>

              <div>
                <h4>24/7 Support</h4>
                <p>We're always here to help</p>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================
          APP + PAYMENT AREA
      ====================================== */}

      <div className="footerExtras">
        <div className="container">

          <div className="footerExtrasGrid">

            {/* APP */}

            <div className="footerApp">

              <div className="footerExtraIcon">
                <FiSmartphone />
              </div>

              <div className="footerAppContent">

                <span>SHOP ON THE GO</span>

                <h4>Download ShopBazaar App</h4>

                <p>
                  Get app-exclusive deals and faster checkout.
                </p>

              </div>


              <div className="appButtons">

                <button type="button">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </button>

                <button type="button">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </button>

              </div>

            </div>


            {/* PAYMENT */}

            <div className="footerPayment">

              <div className="paymentHeading">
                <FiCreditCard />

                <div>
                  <span>100% SECURE</span>
                  <h4>Payment Methods</h4>
                </div>
              </div>


              <div className="paymentMethods">

                <span>VISA</span>

                <span>
                  MasterCard
                </span>

                <span>
                  RuPay
                </span>

                <span>
                  UPI
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================
          BOTTOM FOOTER
      ====================================== */}

      <div className="footerBottom">
        <div className="container">

          <div className="footerBottomInner">

            <p>
              © 2026 <span>ShopBazaar</span>.
              All Rights Reserved.
            </p>


            <div className="footerLegal">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms & Conditions
              </a>

              <a href="#">
                Cookie Policy
              </a>

            </div>


            <button
              className="footerLocation"
              type="button"
            >
              <FiGlobe />

              India

              <span>•</span>

              English
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;