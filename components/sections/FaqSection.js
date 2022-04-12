import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import React from "react";

const FaqSection = ({ type = "one" }) => {
	return (
		<section id="faq">
			<div className="container">
				<h1 className="heading">Frequently Asked Questions</h1>
				<p className="description">
					An in-depth breakdown of our promotional services.
				</p>

				{[1, 2, 3, 4].map((item) => (
					<Accordion key={item}>
						<AccordionHeader>How will you promote my music?</AccordionHeader>
						<p className="accordion-body">
							Engagement may vary.* Typical engagements on average 5,000 streams
							and 700 followers organically
						</p>
					</Accordion>
				))}

				{/* <button
					className="faq-btn"
					style={{
						backgroundColor:
							type === "two"
								? "#ff8435"
								: type === "three"
								? "#ffae34"
								: "#1db954",
					}}
				>
					Know more
				</button> */}
			</div>
		</section>
	);
};

export default FaqSection;
