import { Fragment, useEffect } from "react";
import Head from "next/head";

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";


// SEO
import SEO from "@SEO/SEO";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// RC Slider Styles
// import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

// Import Global Style
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const title = Component.title || "Music Promotion Today";
	const Layout = Component.layout || Fragment;

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<Head>
				<title>{title}</title>
				{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/> */}
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
