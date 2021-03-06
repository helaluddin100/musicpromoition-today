const VisionSection = ({ type = "" }) => {
	return (
		<section id="vision" className={`type-${type}`}>
			<div className="container">
				<div className="vision-wrapper">
					<div className="vision-left">
						<p className="focus sec-s-title">Our Vision</p>
						<h2 className="vision-title">We are here to grow your channel</h2>

						<p className="vision-des">
							Our vision is to give tal ented independent music artists a
							possibility to get their music discovered by the right type of
							real audiences through the best visual contents & makreting
							stragetis . Which will expand the reach of their music to viral
							influencers,hot playlists, record labels & radio stations.
							<br />
							<br />
							Whether you make pop rock or instrumental music,you only pay us to
							reach 100% active real listeners,influencers and curators who will
							obviously dig your music.
						</p>
					</div>

					<div className="vision-right">
						<img src="/assets/img/4.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default VisionSection;
