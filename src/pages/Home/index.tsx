import { Footer, Header } from "@components/layout";
import { HomeSection, RootContainer } from "./styles";

const Home = () => {
	return(
		<RootContainer>

			<HomeSection>
				<Header/>
			</HomeSection>


			<Footer/>

		</RootContainer>
	);
};

export default Home;
