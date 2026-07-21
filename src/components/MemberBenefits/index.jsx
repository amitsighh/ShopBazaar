import "./style.css";

import {
  FiGift,
  FiDownload,
  FiArrowRight,
  FiStar,
  FiShoppingBag,
} from "react-icons/fi";

const MemberBenefits = () => {
  return (
    <section className="memberBenefits">
      <div className="container">

        <div className="memberGrid">

          {/* =========================
              REWARD / MEMBER CARD
          ========================== */}

          <div className="memberCard rewardCard">

            {/* LEFT CONTENT */}

            <div className="memberContent">

              <span className="memberBadge">
                <FiStar />
                Become a Member
              </span>

              <h2>
                Earn Reward
                <br />
                Points
              </h2>

              <p>
                Earn points, unlock rewards and enjoy
                exclusive member benefits.
              </p>

              <div className="memberFeatures">

                <span>
                  <FiGift />
                  Exclusive Rewards
                </span>

                <span>
                  <FiStar />
                  Early Sale Access
                </span>

              </div>

              <button className="memberBtn rewardBtn">
                <FiGift />
                Join Now
                <FiArrowRight className="arrowIcon" />
              </button>

            </div>


            {/* RIGHT IMAGE */}

            <div className="memberImageBox">

              <img
                src="/images/MemberBenifits/banner1.jpeg"
                alt="ShopBazaar Reward Points"
                className="memberImage"
              />

            </div>

          </div>


          <div className="memberCard appCard">

            {/* LEFT CONTENT */}

            <div className="memberContent">

              <span className="memberBadge">
                <FiShoppingBag />
                ShopBazaar App
              </span>

              <h2>
                Download
                <br />
                Our App
              </h2>

              <p>
                Get ₹500 OFF on your first order,
                app exclusive offers and faster checkout.
              </p>

              <div className="memberFeatures">

                <span>
                  <FiShoppingBag />
                  App Exclusive Deals
                </span>

                <span>
                  <FiDownload />
                  Faster Checkout
                </span>

              </div>

              <button className="memberBtn appBtn">
                <FiDownload />
                Download App
                <FiArrowRight className="arrowIcon" />
              </button>

            </div>


            {/* RIGHT IMAGE */}

            <div className="memberImageBox">

              <img
                src="/images/MemberBenifits/banner2.jpeg"
                alt="Download ShopBazaar App"
                className="memberImage"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MemberBenefits;