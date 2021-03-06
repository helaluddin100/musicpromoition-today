const ServiceSection = ({ data, type = "one" }) => {
  return (
    <section>
      <div id="service" className={`service cpb-6 type-${type}`}>
        <div className="container">
          <div className="title-wrapper">
            <div className="sec-title">
              <p className="sec-sm-title">Our Services</p>
              <h2 className="main-title">
                Your Complete Music Marketing Agency
              </h2>

              <p className="sec-des">
                We believe in your music! We help artists like you get more
                visibility <br /> and exposure through Spotify.
              </p>
            </div>
          </div>

          <div className="service-wrapper mt-3">
            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/img/icon/1.png" alt="" />
              </div>
              <div className="service-details">
                <h4>Targeted Campaigns</h4>
                <p>
                  Country and genre targeting, We’ll get your music heard by the
                  right people.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/img/icon/2.png" alt="" />
              </div>
              <div className="service-details">
                <h4>Earn Royalties</h4>
                <p>
                  We only run real! campaigns to attract real people, so you
                  continue to earn royalties for streams.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/img/icon/3.png" alt="" />
              </div>
              <div className="service-details">
                <h4>Scalable Solutions</h4>
                <p>
                  We have plans for the starting artist, for big agencies and
                  all in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
