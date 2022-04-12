const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer-area cpt-5">
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-col">
							<div className="footer-logo">
								<img src="/assets/img/footer-logo.png" alt="" />
							</div>
							<p>Build your brand with Top Notch Music PR Agency.</p>
							<div className="email-phone">
								<p>
									<img src="/assets/img/icon/phone.svg" alt="" className="" />{" "}
									+44 (0) 20 3040 5060 (UK)
								</p>
								<p>
									<img src="/assets/img/icon/email.svg" alt="" className="" />{" "}
									support@musicpromotiontoday.com
								</p>
							</div>
						</div>

						<div className="footer-col">
							<div className="quick-link-wrapper">
								<div className="quick-link-area">
									<h4 className="footer-link-title">Company</h4>
									<ul className="footer-ul">
										<li>
											<a href="" className="footer-link">
												About
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												Refund Policy
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												Terms of Service
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												Privacy Policy
											</a>
										</li>
									</ul>
								</div>
								<div className="quick-link-area">
									<h4 className="footer-link-title">OTHERS</h4>
									<ul className="footer-ul">
										<li>
											<a href="" className="footer-link">
												Contact
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												Blog
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												FAQ
											</a>
										</li>
										<li>
											<a href="" className="footer-link">
												Work With Us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="footer-col">
							<h4 className="footer-link-title">Get In Touch</h4>
							<p>
								Get the ideas, tools and tips you need to grow your sound
								straight to your inbox.
							</p>

							<div className="subscribe-form">
								<form action="">
									<div className="input-group">
										<input
											type="text"
											placeholder="Enter Your Email"
											className="subscribe-input"
										/>
										<button type="submit" className="submit-button">
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="social-area">
						<p>Follow Us On:</p>
						<ul className="social-ul">
							<li>
								<a href="" className="social-link">
									<img src="/assets/img/icon/facebook.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="" className="social-link">
									<img src="/assets/img/icon/twitter.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="" className="social-link">
									<img src="/assets/img/icon/linkind.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="" className="social-link">
									<img src="/assets/img/icon/pintarest.svg" alt="" />
								</a>
							</li>
						</ul>
					</div>
					<div className="payment-method">
						<img src="/assets/img/7.png" alt="image not found" />
					</div>
				</div>
			</div>

			<div className="copyright-sec">
				<div className="container">
					<div className="copy-area">
						<p>© 2021 Music Promotion Today | All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
