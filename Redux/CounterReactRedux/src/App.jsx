import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./Components/Controls";
import PrivacyMsg from "./Components/PrivacyMsg";
import { useSelector } from "react-redux";
function App() {
	const privacy = useSelector((store) => store.privacy);
	return (
		<center>
			<Container>
				<div className="px-4 py-5 my-5 text-center">
					<Header />
					<div className="col-lg-6 mx-auto">
						{privacy ? (
							<PrivacyMsg></PrivacyMsg>
						) : (
							<DisplayCounter></DisplayCounter>
						)}
						<Controls></Controls>
					</div>
				</div>
			</Container>
		</center>
	);
}
export default App;
