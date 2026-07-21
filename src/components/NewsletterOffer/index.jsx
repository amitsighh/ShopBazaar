import { useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import "./style.css";

const NewsletterOffer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("Subscribed Email:", email);

    // Backend/API integration baad me yahan add karenge
    setEmail("");
  };

  return (
    <section className="newsletterOffer">
      <div className="container">

        <div className="newsletterBox">

          {/* Decorative Glow */}
          <div className="newsletterGlow glowOne"></div>
          <div className="newsletterGlow glowTwo"></div>


          {/* LEFT OFFER ICON */}

          <div className="newsletterVisual">
            <img src="/images/gift200.png" alt="₹200 OFF" className="newsletterGiftImage" />
            <div className="offerAmount">
                <span>₹200</span>
                <small>OFF</small>
            </div>
          </div>


          {/* CONTENT */}

          <div className="newsletterContent">

            <span className="newsletterBadge">
              Exclusive Welcome Offer
            </span>

            <h2>
              Get ₹200 OFF Your First Order!
            </h2>

            <p>
              Subscribe for exclusive offers, new arrivals
              and the latest ShopBazaar deals.
            </p>

          </div>


          {/* EMAIL FORM */}

          <form
            className="newsletterForm"
            onSubmit={handleSubscribe}
          >

            <div className="newsletterInputBox">

              <FiMail />

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <button type="submit">
              Subscribe
              <FiArrowRight />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default NewsletterOffer;