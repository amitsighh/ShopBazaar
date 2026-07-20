import "./style.css";
import { useEffect, useState } from "react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) =>
    String(time).padStart(2, "0");

  return (
    <section className="flashSaleSection">
      <div className="container">

        <div className="flashSaleBanner">

          {/* Left */}
          <div className="flashSaleTitle">
            <div className="brandName">
                <span className="brandBolt">⚡</span>
                <span>ShopBazaar</span>
            </div>

            <div>
              <h2>
                FLASH <span>SALE</span>
              </h2>
              <p>Deals of the Day — Don't Miss Out!</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flashCountdown">

            <p className="endsText">
              ⏱ Ends in
            </p>

            <div className="timer">

              <div className="timeBox">
                <strong>
                  {formatTime(timeLeft.hours)}
                </strong>
                <span>HRS</span>
              </div>

              <b>:</b>

              <div className="timeBox">
                <strong>
                  {formatTime(timeLeft.minutes)}
                </strong>
                <span>MINS</span>
              </div>

              <b>:</b>

              <div className="timeBox">
                <strong>
                  {formatTime(timeLeft.seconds)}
                </strong>
                <span>SECS</span>
              </div>

            </div>
          </div>

          {/* Discount */}
          <div className="flashDiscount">
            <p>UP TO</p>
            <h3>60%</h3>
            <strong>OFF</strong>
            <span>On Selected Items</span>
          </div>

          {/* Right */}
          <div className="flashAction">
            <button>
              SHOP NOW →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlashSale;