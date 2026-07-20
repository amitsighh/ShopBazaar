import "./style.css";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";

const TechUpgradeBanner = () => {
  return (
    <section className="techUpgradeSection">
      <div className="container">
        <div className="techUpgradeBanner">

          {/* Background Image */}
          <img
            src="/images/tech-upgrade-banner/techbanner.png"
            alt="The Ultimate Tech Upgrade"
            className="techUpgradeBg"
          />

          {/* Overlay */}
          <div className="techUpgradeOverlay"></div>

          {/* Content */}
          <div className="techUpgradeContent">

            <span className="techOfferBadge">
              ShopBazaar Exclusive
            </span>

            <p className="techOfferText">
              Top deals on the latest tech — limited time offers!
            </p>

            <div className="techDiscount">
              <span>UP TO</span>

              <div>
                <strong>50%</strong>
                <b>OFF</b>
              </div>
            </div>

            <div className="techBannerButtons">

              <button className="techShopBtn">
                <FiShoppingCart />
                Shop Now
              </button>

              <button className="techExploreBtn">
                Explore Deals
                <FiArrowRight />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TechUpgradeBanner;