import AppLayout from "@components/layout/AppLayout";
import React from "react";

const Terms = () => {
	return (
		<div id="terms">
			<div className="container">
				<p className="sub-heading">AGREEMENT</p>
				<h1 className="heading">
					Terms of <span className="focus">Services</span>
				</h1>

				<p className="des-top">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s,
					<br />
					<br />
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release
				</p>

				<br />

				<ul className="services">
					<li className="service">
						of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop.
					</li>
					<li className="service">
						of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop.
					</li>
					<li className="service">
						of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop.
					</li>
					<li className="service">
						of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop.
					</li>
					<li className="service">
						of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop.
					</li>
				</ul>

				<br />

				<p className="des-bottom">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s,
					<br />
					<br />
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release
				</p>

				<div className="action-btns">
					<button>Not right now...</button>
					<button>I agree with Terms</button>
				</div>
			</div>
		</div>
	);
};

Terms.layout = AppLayout;
Terms.title = "Terms of Conditions";

export default Terms;
