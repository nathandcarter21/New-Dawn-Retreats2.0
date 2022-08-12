import PageNavbar from "../components/PageNavbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
	return (
		<div className="content d-flex flex-column vh-100">
			<PageNavbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
