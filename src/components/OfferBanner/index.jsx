import "./style.css";

const OfferBanner = () => {
  return (
    <section className="offerBanner py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Fashion Banner */}
          <div className="bannerCard">
            <img
              src="/images/OfferBanner/fashion-banner1.jpeg"
              alt="Fashion Collection"
            />

            <div className="bannerContent">
              <span>Today's Deal</span>

              <h2>
                Fashion <br />
                Collection
              </h2>

              <p> Starting From ₹999</p>

              <button>Shop Now</button>
            </div>
          </div>

          {/* Electronics Banner */}
          <div className="bannerCard">
            <img
              src="/images/OfferBanner/electronics-banner1.jpeg"
              alt="Electronics Sale"
            />

            <div className="bannerContent">
              <span> Limited Time Offer</span>

              <h2>
                Electronics <br />
                Mega Sale
              </h2>

              <p>Up To 40% OFF</p>

              <button>Shop Now</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferBanner;