import Accordion from "@components/accordion/Accordion";
import AccordionHeader from "@components/accordion/AccordionHeader";
import AppLayout from "@components/layout/AppLayout";
import React from "react";

const FaqPage = () => {
	return (
		<div className="faq">
			<div className="container">
				<h1 className="heading">
					Frequently Asked <br /> <span className="focus">Question</span>
				</h1>
				<p className="body-text">
					Here you can read the frequently asked questions about our music
					promotion service, or you can scroll down below to send us message.
					Please keep in mind that we might take up to 1 business day to reply
					to your inquiry.
				</p>
				<div className="questions">
					{[1, 2, 3, 4].map((item) => (
						<Accordion key={item}>
							<AccordionHeader>How will you promote my music?</AccordionHeader>
							<p className="accordion-body">
								Engagement may vary.* Typical engagements on average 5,000
								streams and 700 followers organically
							</p>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	);
};

FaqPage.layout = AppLayout;
FaqPage.title = "Frequently Asked Question";

export default FaqPage;
