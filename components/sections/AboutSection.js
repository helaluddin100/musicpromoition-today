import CountUp from "react-countup";

const AboutSection = ({ type = "one" }) => {
	return (
		<section id="about" className={`type-${type}`}>
			<div className="container">
				<div className="about-wrapper">
					<div className="about-col">
						<div className="about-img">
							<img src="/assets/img/6.png" alt="" />
						</div>
					</div>
					<div className="about-col">
						<div className="about">
							<div className="col-2">
								<div className="about-card">
									<img src="/assets/img/icon/4.png" alt="" />
									<p className="count">
										<CountUp end={6} duration={2} />+
									</p>
									<p>Playlist Creators</p>
								</div>
							</div>
							<div className="col-2">
								<div className="about-card">
									<img src="/assets/img/icon/5.png" alt="" />
									<p className="count">
										<CountUp end={56} duration={2} />+
									</p>
									<p>Playlist Creators</p>
								</div>
							</div>
							<div className="col-2">
								<div className="about-card">
									<img src="/assets/img/icon/6.png" alt="" />
									<p className="count">
										<CountUp end={140} duration={2} />+
									</p>
									<p>Playlist Creators</p>
								</div>
							</div>
							<div className="col-2">
								<div className="about-card">
									<img src="/assets/img/icon/7.png" alt="" />
									<p className="count">
										<CountUp end={28000} duration={2} />+
									</p>
									<p>Playlist Creators</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
