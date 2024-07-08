const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <div>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p className="description">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="more-shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="images/amazon.png" alt="brand-logo" />
            <img src="images/flipkart.png" alt="brand-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="shoe-img" />
      </div>
    </main>
  );
};

export default Hero;
