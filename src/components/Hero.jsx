import heroImage from "./../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            praesentium? Corporis perferendis non iure aperiam natus ab a, sit
            quis magni blanditiis. Cum eius quae tempora, minus dolorum id
            laborum!
          </p>
        </div>

        <div className="img-container">
          <img src={heroImage} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
