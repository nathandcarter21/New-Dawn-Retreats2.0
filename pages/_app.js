import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import "../globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Come home to yourself by joining us in the ancient healing waters of Oregon's beautiful high plains desert. You can enjoy the natural outdoor hot springs in a spirit of connection and self-healing with other women of like-minded soul community."
				/>
				<title>New Dawn Retreats</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Nunito&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
