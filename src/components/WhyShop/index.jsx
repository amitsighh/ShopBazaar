import "./style.css";

import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const WhyShop = () => {
  const benefits = [
    {
      id: 1,
      icon: <FiTruck />,
      title: "Free & Fast Delivery",
      description:
        "Enjoy fast and reliable delivery right to your doorstep.",
      className: "deliveryCard",
    },

    {
      id: 2,
      icon: <FiShield />,
      title: "Secure Payments",
      description:
        "Shop confidently with safe and protected transactions.",
      className: "paymentCard",
    },

    {
      id: 3,
      icon: <FiRefreshCw />,
      title: "Easy Returns",
      description:
        "Simple and hassle-free returns for a smooth shopping experience.",
      className: "returnCard",
    },

    {
      id: 4,
      icon: <FiHeadphones />,
      title: "24/7 Customer Support",
      description:
        "Our support team is always here whenever you need assistance.",
      className: "supportCard",
    },
  ];

  return (
    <section className="whyShopSection">
      <div className="container">

        {/* SECTION HEADING */}

        <div className="whyShopHeading">
          <span className="whyShopBadge">
            Why Choose Us
          </span>

          <h2>
            Why Shop With <span>ShopBazaar?</span>
          </h2>

          <p>
            Everything you need for a smarter, safer and better
            shopping experience.
          </p>
        </div>


        {/* BENEFITS CARDS */}

        <div className="whyShopGrid">

          {benefits.map((item) => (
            <div
              className={`whyShopCard ${item.className}`}
              key={item.id}
            >

              {/* ICON */}

              <div className="whyShopIcon">
                {item.icon}
              </div>


              {/* CONTENT */}

              <div className="whyShopContent">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="whyShopLearn">
                  Learn More
                  <FiArrowRight />
                </div>

              </div>


              {/* DECORATIVE GLOW */}

              <div className="cardGlow"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyShop;